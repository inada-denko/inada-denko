import { Wind, CheckCircle, Clock, ChevronDown } from 'lucide-react'
import NavBar        from '../components/NavBar'
import Footer        from '../components/Footer'
import LineFloat     from '../components/LineFloat'
import PhotoGuideCards from '../components/PhotoGuideCards'
import { navy, navyL, navyM, yellow, gray, grayL, LINE_URL } from '../theme'

const photos = [
  { title: '設置予定の壁面', desc: '室内機を取り付けたい壁を正面から撮影。コンセントや換気口の位置も入れてください。' },
  { title: '屋外配管の出口候補', desc: '壁の外側・配管を出す予定の場所を撮影。近くに障害物がないか確認します。' },
  { title: '室外機の置き場所', desc: '室外機を設置する場所（ベランダ・地面・屋根）を撮影。スペースの広さがわかるように。' },
]

const faqs = [
  { q: '購入したエアコンを持ち込んでも工事してもらえますか？', a: 'はい、喜んで対応します。施主支給品の取り付けは大歓迎です。技術料はきっちりいただきますが、機器代が抑えられる分、トータルコストが下がることが多いです。' },
  { q: '古いエアコンの取り外しも頼めますか？', a: '取り外し・処分も対応しています。処分は家電リサイクル法に基づいて適正に行います。' },
  { q: '隠蔽配管（壁内配管）にも対応していますか？', a: '対応しています。既存の隠蔽配管の再利用や、新規での隠蔽配管工事も可能です。写真をいただいて状況を確認させてください。' },
  { q: '翌日施工とは？', a: '写真見積もりが完了し、工事日程が合えば翌日以降最短で施工に伺います。繁忙期は前後する場合があります。' },
]

export default function LP_Aircon() {
  return (
    <div style={{ background: navy, color: '#fff', fontFamily: '"Noto Sans JP", sans-serif', minHeight: '100vh' }}>
      <NavBar />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ paddingTop: 80 }}>
        <div className="absolute inset-0 pointer-events-none"
             style={{
               backgroundImage: `linear-gradient(rgba(255,215,0,0.04) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,215,0,0.04) 1px, transparent 1px)`,
               backgroundSize: '50px 50px',
             }} />
        <div className="absolute pointer-events-none"
             style={{
               top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
               width: 600, height: 600,
               background: 'radial-gradient(circle, rgba(255,215,0,0.1), transparent 70%)',
               filter: 'blur(40px)',
             }} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <span style={{ background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.4)', color: yellow }}
                  className="px-4 py-1 rounded-full text-xs font-bold tracking-widest">
              ❄️ エアコン工事 | 播磨エリア
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            エアコン工事、<br />
            <span style={{ color: yellow }}>翌日対応。</span>
          </h1>

          <p style={{ color: grayL }} className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            他社の「3日後に見積もりに伺います」を<br />
            「今日LINEで写真を送って翌日施工」で破壊。<br />
            施主支給品の取り付けも大歓迎。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={LINE_URL} target="_blank" rel="noreferrer"
               style={{ background: '#06C755', color: '#fff' }}
               className="px-8 py-4 rounded-lg font-black text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all">
              LINEで無料見積もり
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {[['最短', '翌日施工'], ['施主支給', '大歓迎'], ['写真3枚', '見積もり完了']].map(([n, l]) => (
              <div key={l} className="text-center">
                <div style={{ color: yellow }} className="text-xl font-black">{n}</div>
                <div style={{ color: gray }} className="text-xs mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown color="rgba(255,215,0,0.6)" size={28} />
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: navyL }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">稲田電工のエアコン工事が選ばれる理由</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Clock size={24}/>, title: '爆速見積もり・翌日施工',
                text: 'LINEで写真を送ってその日のうちに見積もり回答。日程が合えば翌日施工も対応します。' },
              { icon: <CheckCircle size={24}/>, title: '施主支給品も喜んで対応',
                text: 'ネット購入・量販店購入のエアコンを持ち込んでOK。技術料はきっちりいただきます。' },
              { icon: <Wind size={24}/>, title: '標準〜難工事まで対応',
                text: '隠蔽配管・2階への引き上げ・石膏ボード補強など、他社が断る難工事も対応可能。' },
            ].map(item => (
              <div key={item.title}
                   style={{ background: navy, border: `1px solid ${navyM}` }}
                   className="rounded-2xl p-6">
                <div style={{ color: yellow }} className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p style={{ color: grayL }} className="text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GUIDE */}
      <PhotoGuideCards service="aircon" />

      {/* FAQ */}
      <section style={{ background: navyL }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">よくあるご質問</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <div key={q}
                   style={{ background: navy, border: `1px solid ${navyM}` }}
                   className="rounded-xl p-6">
                <p style={{ color: yellow }} className="font-bold text-sm mb-2">Q. {q}</p>
                <p style={{ color: grayL }} className="text-sm leading-relaxed">A. {a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div style={{ background: navyL, border: `1px solid ${navyM}` }}
               className="rounded-2xl p-8">
            <h3 style={{ color: gray }} className="text-sm font-bold mb-4">当社をお勧めしない方</h3>
            <p style={{ color: grayL }} className="text-sm leading-relaxed mb-4">
              当社は「スピード・利便性・明瞭な技術料」を重視する方向けです。
            </p>
            <ul style={{ color: gray }} className="text-xs leading-relaxed list-none space-y-1">
              <li>・お電話での詳しい説明を重視される方</li>
              <li>・必ず担当者に現地調査に来てほしい方</li>
              <li>・最安値を最優先に探している方</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <LineFloat />
    </div>
  )
}
