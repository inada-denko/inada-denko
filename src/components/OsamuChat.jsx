import { useState, useRef, useEffect } from 'react'
import { Send, FileText } from 'lucide-react'
import { navy, navyL, navyM, yellow, gray, grayL } from '../theme'

const S = { ISSUE: 0, LOCATION: 1, DETAILS: 2, PHOTO: 3, DONE: 4 }

const PHOTO_GUIDES = {
  '防犯カメラ': ['設置場所の見上げ写真', '最寄りのコンセント・電源', 'ルーター設置場所'],
  'EV': ['分電盤の全体写真', '駐車場の全景', '配線を通す経路'],
  'エアコン': ['設置予定の壁面', '屋外配管の出口候補', '室外機の置き場所'],
  'スマート化': ['現状の機器全体', '型番ラベルのアップ', '周囲の状況'],
}

function detectService(text) {
  if (/防犯|カメラ|監視/.test(text)) return '防犯カメラ'
  if (/EV|電気自動車|充電|テスラ|コンセント/.test(text)) return 'EV'
  if (/エアコン|冷暖房|空調/.test(text)) return 'エアコン'
  if (/スマート|リモコン|シャッター|自動/.test(text)) return 'スマート化'
  return null
}

function osamuReply(stage, userText, collected) {
  if (/キュービクル|高圧受電|特別高圧|受変電設備/.test(userText)) {
    return {
      text: 'おおきに！\n\n申し訳ないのですが、キュービクル（高圧受電設備）の工事は対応外です。専門業者をご紹介することはできますよ。\n\n低圧側の工事・EV充電・防犯カメラ・エアコンなどでしたら何でも！',
      nextStage: S.ISSUE, collected,
    }
  }

  switch (stage) {
    case S.ISSUE: {
      const service = detectService(userText)
      const photoHint = service
        ? `\n\n${service}の場合、以下の3枚の写真をご用意いただくと最速で見積もりできます：\n` +
          PHOTO_GUIDES[service].map((p, i) => `${i + 1}. ${p}`).join('\n')
        : ''
      return {
        text: `なるほど！ありがとうございます。${photoHint}\n\n現場の市区町村を教えてもらえますか？（例：加古川市、姫路市 など）`,
        nextStage: S.LOCATION,
        collected: { ...collected, issue: userText, service },
      }
    }
    case S.LOCATION:
      return {
        text: `${userText}ですね。\n\n建物の種類（住宅・店舗・工場など）と、いつ頃の施工をお考えか教えてください。`,
        nextStage: S.DETAILS,
        collected: { ...collected, location: userText },
      }
    case S.DETAILS:
      return {
        text: 'ありがとうございます！\n\n現場の写真があれば、より正確な見積もりが出せます。\nお持ちでしたら「写真あり」、なければ「なし」で構いません。',
        nextStage: S.PHOTO,
        collected: { ...collected, details: userText },
      }
    case S.PHOTO:
      return {
        text: 'おおきに！「現場カルテ」を作成します…',
        nextStage: S.DONE,
        collected: { ...collected, photo: userText },
        generateKarte: true,
      }
    default:
      return {
        text: 'カルテは作成済みです。他にご質問があればどうぞ！',
        nextStage: S.DONE, collected,
      }
  }
}

export default function OsamuChat() {
  const [messages, setMessages] = useState([{
    from: 'osamu',
    text: 'おおきに！わたし「おさむ」と申します。稲田電工の番頭です。\n\n防犯カメラ・EVコンセント・エアコン・スマート化など、電気工事のことなら何でも。\nまず、どんなことでお困りですか？',
  }])
  const [input, setInput]     = useState('')
  const [stage, setStage]     = useState(S.ISSUE)
  const [collected, setCollected] = useState({})
  const endRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const send = () => {
    const text = input.trim()
    if (!text) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text }])

    setTimeout(() => {
      const reply = osamuReply(stage, text, collected)
      setMessages(prev => [...prev, { from: 'osamu', text: reply.text }])
      setStage(reply.nextStage)
      setCollected(reply.collected)

      if (reply.generateKarte) {
        const k = {
          issue:    reply.collected.issue    || '未記入',
          location: reply.collected.location || '未記入',
          details:  reply.collected.details  || '未記入',
          photo:    reply.collected.photo    || '未記入',
          time:     new Date().toLocaleString('ja-JP'),
        }
        setTimeout(() => setMessages(prev => [...prev, { from: 'karte', karte: k }]), 500)
      }
    }, 700)
  }

  return (
    <div style={{ background: navy, border: `1px solid ${navyM}` }}
         className="rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div style={{ background: navyM }} className="px-5 py-4 flex items-center gap-3">
        <div style={{ background: yellow, color: navy }}
             className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
          お
        </div>
        <div>
          <div className="font-bold text-sm text-white">番頭おさむ</div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            <span style={{ color: 'rgb(74,222,128)' }}>オンライン</span>
          </div>
        </div>
        <span style={{ color: gray }} className="ml-auto text-xs hidden sm:block">
          稲田電工 AI受付窓口
        </span>
      </div>

      {/* Messages */}
      <div className="overflow-y-auto flex flex-col gap-4 p-5" style={{ height: 380 }}>
        {messages.map((msg, i) => (
          <div key={i}>
            {msg.from === 'osamu' && (
              <div className="flex items-start gap-2.5" style={{ maxWidth: '85%' }}>
                <div style={{ background: yellow, color: navy }}
                     className="w-7 h-7 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5">
                  お
                </div>
                <div style={{ background: navyM }}
                     className="px-4 py-3 rounded-2xl rounded-tl-none text-sm leading-relaxed whitespace-pre-line text-white">
                  {msg.text}
                </div>
              </div>
            )}
            {msg.from === 'user' && (
              <div className="flex justify-end">
                <div style={{ background: yellow, color: navy, maxWidth: '85%' }}
                     className="px-4 py-3 rounded-2xl rounded-tr-none text-sm leading-relaxed whitespace-pre-line">
                  {msg.text}
                </div>
              </div>
            )}
            {msg.from === 'karte' && msg.karte && (
              <div style={{ background: 'rgba(255,215,0,0.07)', border: '1px solid rgba(255,215,0,0.4)' }}
                   className="rounded-2xl p-5 mt-1">
                <div style={{ color: yellow }} className="font-bold text-sm mb-3 flex items-center gap-1.5">
                  <FileText size={14} /> 現場カルテ（自動生成）
                </div>
                <div className="flex flex-col gap-1.5 text-sm">
                  {[
                    ['ご相談', msg.karte.issue],
                    ['現場',   msg.karte.location],
                    ['状況',   msg.karte.details],
                    ['写真',   msg.karte.photo],
                    ['受付',   msg.karte.time],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-3">
                      <span style={{ color: gray }} className="flex-shrink-0 w-12">{k}</span>
                      <span className="text-white">{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: yellow, color: navy }}
                     className="mt-4 py-2 rounded text-center text-sm font-black">
                  ✓ 稲田代表に転送済み
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div style={{ borderTop: `1px solid ${navyM}` }} className="p-4">
        <div className="flex gap-2">
          <input
            type="text" value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="メッセージを入力..."
            style={{ background: navyM, border: '1px solid transparent', color: '#fff' }}
            className="flex-1 px-4 py-3 rounded-xl text-sm outline-none focus:border-yellow-400 transition-colors placeholder:text-gray-500"
          />
          <button onClick={send} style={{ background: yellow, color: navy }}
                  className="px-4 py-3 rounded-xl font-bold hover:brightness-110 transition-all flex-shrink-0">
            <Send size={16} />
          </button>
        </div>
        <p style={{ color: gray }} className="text-xs mt-2 text-center">
          ※ キュービクル（高圧受電設備）は対応外です
        </p>
      </div>
    </div>
  )
}
