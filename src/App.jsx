import { useState, useRef, useEffect } from 'react'
import {
  Zap, Menu, X, Phone, Mail, MessageSquare, Users, Brain,
  Shield, CheckCircle, ArrowRight, Car, Building, Send,
  FileText, ChevronDown, Star, Clock, Award,
} from 'lucide-react'

/* ─── THEME ─── */
const navy  = '#0A1628'
const navyL = '#0F2040'
const navyM = '#1A3A5C'
const yellow = '#FFD700'
const gray  = '#8FA3BF'
const grayL = '#B8CADA'

/* ─── OSAMU CHAT ENGINE ─── */
const S = { ISSUE: 0, LOCATION: 1, DETAILS: 2, PHOTO: 3, DONE: 4 }

function osamuReply(stage, userText, collected) {
  if (/キュービクル|高圧受電|特別高圧|受変電設備/.test(userText)) {
    return {
      text: 'おおきに！ご連絡ありがとうございます。\n\n申し訳ないんですが、キュービクル（高圧受電設備）の工事はうちでは対応しとりません。専門の高圧工事業者さんをご紹介することはできますよ。\n\nほかに低圧側の電気工事や、照明・コンセント・EV充電設備のことやったら、なんでも聞いてくださいね！',
      nextStage: S.ISSUE,
      collected,
    }
  }
  switch (stage) {
    case S.ISSUE:
      return {
        text: 'なるほど！ありがとうございます。\n\nそれで、現場はどちらですか？\n市区町村を教えてもらえますか？（例：姫路市、加古川市、神戸市 など）',
        nextStage: S.LOCATION,
        collected: { ...collected, issue: userText },
      }
    case S.LOCATION:
      return {
        text: `${userText}ですね、わかりました！\n\nもう少し詳しく教えてもらえますか？\n・建物の種類（住宅・店舗・工場など）\n・いつ頃から困ってるか、どんな状況か\n・気になることは何でも教えてください！`,
        nextStage: S.DETAILS,
        collected: { ...collected, location: userText },
      }
    case S.DETAILS:
      return {
        text: 'ありがとうございます、だいぶイメージできてきました！\n\n現場の写真があれば、より正確な見積もりができます。\nお持ちでしたら「写真あり」と教えてください。\nなければ「なし」で大丈夫ですよ。',
        nextStage: S.PHOTO,
        collected: { ...collected, details: userText },
      }
    case S.PHOTO:
      return {
        text: 'おおきに！ほな「現場カルテ」を作りますね。少々お待ちください…',
        nextStage: S.DONE,
        collected: { ...collected, photo: userText },
        generateKarte: true,
      }
    default:
      return {
        text: 'カルテはすでに作成済みです。他にご質問があればどうぞ！',
        nextStage: S.DONE,
        collected,
      }
  }
}

/* ─── APP ─── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [messages, setMessages] = useState([{
    from: 'osamu',
    text: 'おおきに！わたし「おさむ」と申します。稲田電工の番頭です。\n\nEV充電設備・幹線工事・店舗改修など、電気工事のことなら何でも聞いてください！\n\nまず、どんなことでお困りですか？',
  }])
  const [input, setInput] = useState('')
  const [stage, setStage] = useState(S.ISSUE)
  const [collected, setCollected] = useState({})
  const endRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const send = () => {
    const text = input.trim()
    if (!text) return
    setInput('')
    const newMsgs = [...messages, { from: 'user', text }]
    setMessages(newMsgs)

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
        setTimeout(() => {
          setMessages(prev => [...prev, { from: 'karte', karte: k }])
        }, 500)
      }
    }, 700)
  }

  const navLinks = [
    ['対応工事', '#services'],
    ['体制図',   '#team'],
    ['番頭おさむ', '#contact'],
    ['代表',     '#ceo'],
  ]

  /* ── shared style helpers ── */
  const badge = (extra = '') => ({
    background: 'rgba(255,215,0,0.1)',
    color: yellow,
    border: '1px solid rgba(255,215,0,0.3)',
    ...extra,
  })

  return (
    <div style={{ background: navy, color: '#fff', fontFamily: '"Noto Sans JP", sans-serif', minHeight: '100vh' }}>

      {/* ══ NAV ══ */}
      <nav style={{ background: `${navy}EE`, borderBottom: `1px solid ${navyM}`, backdropFilter: 'blur(8px)' }}
           className="fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap size={22} color={yellow} />
            <span className="font-black text-lg tracking-widest">稲田電工</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} style={{ color: grayL }}
                 className="text-sm font-medium hover:text-yellow-400 transition-colors">
                {label}
              </a>
            ))}
            <a href="#contact" style={{ background: yellow, color: navy }}
               className="px-5 py-2 rounded font-black text-sm hover:brightness-110 transition-all">
              無料相談
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            {menuOpen ? <X color={yellow} /> : <Menu color={yellow} />}
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: navyL, borderTop: `1px solid ${navyM}` }}
               className="md:hidden px-4 py-4 flex flex-col gap-3">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}
                 style={{ color: grayL }} className="py-2 text-sm">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
               style={{ background: yellow, color: navy }}
               className="py-2 rounded font-black text-sm text-center">
              無料相談
            </a>
          </div>
        )}
      </nav>

      {/* ══ HERO ══ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden"
               style={{ paddingTop: 80 }}>
        {/* Grid BG */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               backgroundImage: `linear-gradient(rgba(255,215,0,0.04) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,215,0,0.04) 1px, transparent 1px)`,
               backgroundSize: '50px 50px',
             }} />
        {/* Radial glow */}
        <div className="absolute pointer-events-none"
             style={{
               top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
               width: 600, height: 600,
               background: 'radial-gradient(circle, rgba(255,215,0,0.12), transparent 70%)',
               filter: 'blur(40px)',
             }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
          <div className="mb-6 inline-block">
            <span style={{ background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.4)', color: yellow }}
                  className="px-4 py-1 rounded-full text-xs font-bold tracking-widest">
              ⚡ AI × ELECTRICAL ENGINEERING
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span style={{ color: yellow }}>AI</span>を駆使する<br />
            <span className="text-white">現場の司令塔</span>
          </h1>

          <p style={{ color: grayL }} className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            EV充電設備・幹線更新・店舗改修。<br />
            稲田電工は最新AIと現場技術で<br className="sm:hidden" />
            あなたの電気工事を最速解決。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#contact" style={{ background: yellow, color: navy }}
               className="px-8 py-4 rounded-lg font-black text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all">
              <MessageSquare size={20} /> 番頭おさむに相談
            </a>
            <a href="#services"
               style={{ border: '2px solid rgba(255,215,0,0.5)', color: yellow }}
               className="px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-yellow-400 hover:bg-opacity-20 transition-all">
              対応工事を見る <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
            {[['15年+', '経験年数'], ['200+', '施工実績'], ['24h', 'AI対応']].map(([n, l]) => (
              <div key={l} className="text-center">
                <div style={{ color: yellow }} className="text-3xl font-black">{n}</div>
                <div style={{ color: gray }} className="text-xs mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown color="rgba(255,215,0,0.6)" size={28} />
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" style={{ background: navyL }} className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">
              Specialized Services
            </span>
            <h2 className="text-4xl font-black mt-2">得意な工事領域</h2>
            <p style={{ color: grayL }} className="mt-3 max-w-lg mx-auto text-base">
              10万〜30万円規模の中堅案件に特化。迅速な見積もり・責任施工を約束します。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Car size={28} />,
                title: 'EV充電設備工事',
                sub: '電気自動車インフラ',
                desc: '住宅・マンション・駐車場へのEV充電器設置。200V専用回路の新設から認定工事まで対応。',
                price: '10〜25万円',
                tags: ['200V回路', '普通充電', '認定工事士'],
              },
              {
                icon: <Zap size={28} />,
                title: '幹線更新・分電盤',
                sub: '電力容量アップ',
                desc: '経年劣化した幹線の引き直し、スマートメーター対応分電盤への交換。家全体の電力を一新。',
                price: '15〜30万円',
                tags: ['幹線引込', '分電盤交換', '容量増設'],
              },
              {
                icon: <Building size={28} />,
                title: '店舗・施設改修',
                sub: '開業・リニューアル',
                desc: '店舗改装・移転時の電気設備一式。照明計画から厨房電源確保まで総合コーディネート。',
                price: '20〜50万円',
                tags: ['照明設計', '厨房電源', 'テナント改修'],
              },
            ].map(s => (
              <div key={s.title}
                   style={{ background: navy, border: `1px solid ${navyM}` }}
                   className="rounded-2xl p-7 hover:border-yellow-400 transition-all group">
                <div style={{ color: yellow }} className="mb-5 inline-block group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                <p style={{ color: gray }} className="text-xs mb-4">{s.sub}</p>
                <p style={{ color: grayL }} className="text-sm leading-relaxed mb-5">{s.desc}</p>
                <div style={{ borderTop: `1px solid ${navyM}`, color: yellow }}
                     className="pt-4 text-sm font-bold">
                  目安: {s.price}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.tags.map(t => (
                    <span key={t}
                          style={{ background: 'rgba(255,215,0,0.1)', color: yellow, border: '1px solid rgba(255,215,0,0.25)' }}
                          className="text-xs px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM FLOW ══ */}
      <section id="team" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">
              Team FLOW System
            </span>
            <h2 className="text-4xl font-black mt-2">ハブ＆スポーク体制</h2>
            <p style={{ color: grayL }} className="mt-3 text-base">
              代表一人でも、専門職人チームが動く。電気から建設全般まで一括受注。
            </p>
          </div>

          {/* SVG Hub & Spoke */}
          <div className="flex justify-center mb-12">
            <svg viewBox="0 0 500 380" className="w-full max-w-xl h-auto">
              {/* Dashed lines center → nodes */}
              {[
                [250, 190, 250, 55],
                [250, 190, 430, 110],
                [250, 190, 430, 270],
                [250, 190, 250, 325],
                [250, 190, 70,  270],
                [250, 190, 70,  110],
              ].map(([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="rgba(255,215,0,0.35)" strokeWidth="1.5" strokeDasharray="5 4" />
              ))}

              {/* Center hub */}
              <circle cx="250" cy="190" r="52" fill={yellow} />
              <text x="250" y="184" textAnchor="middle" fill={navy} fontSize="13" fontWeight="900">稲田電工</text>
              <text x="250" y="201" textAnchor="middle" fill={navy} fontSize="10">司令塔</text>

              {/* Spoke nodes */}
              {[
                [250, 40,  '電気協力会社', '現場施工'],
                [430, 105, '設計事務所',   '図面・確認'],
                [430, 270, 'AI支援',       '見積・事務'],
                [250, 340, '顧客',         '依頼主'],
                [70,  270, '材料業者',     '資材調達'],
                [70,  105, '建設業者',     '内装・建築'],
              ].map(([cx, cy, label, sub]) => (
                <g key={label}>
                  <rect x={cx - 48} y={cy - 20} width="96" height="40" rx="8"
                        fill={navyL} stroke="rgba(255,215,0,0.45)" strokeWidth="1" />
                  <text x={cx} y={cy - 5} textAnchor="middle" fill={yellow} fontSize="10" fontWeight="700">
                    {label}
                  </text>
                  <text x={cx} y={cy + 10} textAnchor="middle" fill={gray} fontSize="9">
                    {sub}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Brain size={20} />,
                title: 'AI自動化',
                text: '見積・工程管理・書類をAIで自動処理。職人の時間を現場作業に集中させる。',
              },
              {
                icon: <Users size={20} />,
                title: '協力ネットワーク',
                text: '専門職人との連携で、電気以外の工事も一括コーディネート可能。',
              },
              {
                icon: <Shield size={20} />,
                title: '代表直接関与',
                text: '全案件で稲田輝吉が直接判断。「知らなかった」では済まない責任施工。',
              },
            ].map(item => (
              <div key={item.title}
                   style={{ background: navyL, border: `1px solid ${navyM}` }}
                   className="rounded-xl p-5 flex gap-4">
                <div style={{ color: yellow }} className="flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-sm mb-1.5">{item.title}</h3>
                  <p style={{ color: grayL }} className="text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AI INTAKE / CHAT ══ */}
      <section id="contact" style={{ background: navyL }} className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">
              AI Intake Center
            </span>
            <h2 className="text-4xl font-black mt-2">番頭「おさむ」に相談</h2>
            <p style={{ color: grayL }} className="mt-3 text-sm">
              兵庫・播磨の電気工事なら何でも。まずは気軽に話しかけてください。
            </p>
          </div>

          {/* Chat window */}
          <div style={{ background: navy, border: `1px solid ${navyM}` }}
               className="rounded-2xl overflow-hidden shadow-2xl">

            {/* Header */}
            <div style={{ background: navyM }} className="px-5 py-4 flex items-center gap-3">
              <div style={{ background: yellow, color: navy }}
                   className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                お
              </div>
              <div>
                <div className="font-bold text-sm">番頭おさむ</div>
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
                           className="px-4 py-3 rounded-2xl rounded-tl-none text-sm leading-relaxed whitespace-pre-line">
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
                      <div style={{ color: yellow }}
                           className="font-bold text-sm mb-3 flex items-center gap-1.5">
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
                  type="text"
                  value={input}
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

          {/* Quick contact */}
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {[
              { icon: <Phone size={20} />, label: '電話でのお問い合わせ', value: '080-xxxx-xxxx', href: 'tel:080xxxxxxxx' },
              { icon: <Mail size={20} />, label: 'メールでのお問い合わせ', value: 'inada@inada-denko.com', href: 'mailto:inada@inada-denko.com' },
            ].map(c => (
              <a key={c.label} href={c.href}
                 style={{ background: navy, border: `1px solid ${navyM}` }}
                 className="rounded-xl p-4 flex items-center gap-3 hover:border-yellow-400 transition-all">
                <div style={{ color: yellow }}>{c.icon}</div>
                <div>
                  <div style={{ color: gray }} className="text-xs">{c.label}</div>
                  <div className="font-bold text-sm">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CEO PROFILE ══ */}
      <section id="ceo" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">
              CEO Profile
            </span>
            <h2 className="text-4xl font-black mt-2">代表プロフィール</h2>
          </div>

          <div style={{ background: navyL, border: `1px solid ${navyM}` }}
               className="rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar placeholder */}
              <div style={{ background: navyM, border: '2px solid rgba(255,215,0,0.4)' }}
                   className="w-36 h-36 rounded-2xl flex-shrink-0 flex items-center justify-center text-5xl mx-auto md:mx-0">
                👷
              </div>

              <div className="flex-1">
                <span style={{ color: yellow }} className="text-xs font-bold">稲田電工 代表</span>
                <h3 className="text-3xl font-black mt-1 mb-4">稲田 輝吉</h3>
                <p style={{ color: grayL }} className="text-sm leading-relaxed mb-6">
                  電気工事士として15年以上の現場経験を持つ。EV設備・幹線工事・店舗改修を得意とし、
                  「AI × 電工」という新しいスタイルで現場効率を追求。<br /><br />
                  兵庫県姫路市を拠点に活動。協力会社とのチーム「FLOW」を組み、
                  電気工事から建設全般まで一括受注できる体制を構築している。
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    [<Award size={14} />,        '第一種電気工事士'],
                    [<CheckCircle size={14} />,  '認定電気工事従事者'],
                    [<Star size={14} />,          'EV充電設備工事認定'],
                    [<Clock size={14} />,         '15年以上の現場経験'],
                  ].map(([icon, label]) => (
                    <div key={label}
                         style={{ background: 'rgba(255,215,0,0.1)', color: yellow, border: '1px solid rgba(255,215,0,0.3)' }}
                         className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs">
                      {icon} {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: navyL, borderTop: `1px solid ${navyM}` }} className="py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap size={18} color={yellow} />
            <span className="font-black tracking-widest">稲田電工</span>
          </div>
          <div style={{ color: gray }} className="text-xs text-center">
            兵庫県姫路市｜TEL: 080-xxxx-xxxx｜inada@inada-denko.com
          </div>
          <div style={{ color: gray }} className="text-xs">© 2026 稲田電工</div>
        </div>
      </footer>
    </div>
  )
}
