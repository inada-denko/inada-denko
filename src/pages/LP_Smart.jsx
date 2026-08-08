import { Smartphone, Star, Zap, ChevronDown } from 'lucide-react'
import NavBar        from '../components/NavBar'
import Footer        from '../components/Footer'
import LineFloat     from '../components/LineFloat'
import PhotoGuideCards from '../components/PhotoGuideCards'
import Seo            from '../components/Seo'
import { navy, navyL, navyM, yellow, gray, grayL, LINE_URL } from '../theme'

const photos = [
  { title: '現状機器の全体写真', desc: 'シャッター・照明・スイッチなど、スマート化したい機器の全体がわかるよう撮影。' },
  { title: '型番ラベルのアップ', desc: '機器についているラベルの型番・メーカーをアップで撮影。互換性の確認に使います。' },
  { title: '周囲の状況', desc: '機器の周囲（配線・コンセント・壁の素材）がわかるよう撮影。施工方法の検討に使います。' },
]

const faqs = [
  { q: 'どんなシャッターでもリモコン化できますか？', a: '対応できるものとできないものがあります。型番を教えていただければ事前に確認します。写真のラベルを撮って送ってください。' },
  { q: 'インターネットがなくてもリモコン操作できますか？', a: 'はい。基本的なリモコン化はWi-Fiなしでも可能です。スマホ連携を希望する場合はWi-Fiが必要です。' },
  { q: 'IH・レンジフード・浴室乾燥機の交換もできますか？', a: 'はい、対応しています。施主支給品の取り付けも歓迎です。型番がわかれば事前に確認します。' },
  { q: 'LED化の費用感は？', a: '電球交換のみなら数千円〜、照明器具ごと交換する場合は器具代＋取り付け工賃になります。写真をいただいて見積もりします。' },
]

const examples = [
  { emoji: '🚪', title: 'シャッターリモコン化', desc: '手動シャッターをリモコン・スマホで開閉。毎日の開け閉めが劇的に楽になります。' },
  { emoji: '💡', title: 'LED全灯化', desc: '蛍光灯・白熱球を高効率LEDに全交換。電気代削減と明るさの改善を同時に実現。' },
  { emoji: '🏠', title: 'IH・設備交換', desc: 'ガスコンロ→IHへの交換、浴室乾燥機・レンジフードの入れ替えに対応。' },
  { emoji: '📱', title: 'スマホ連携照明', desc: 'スマートスイッチへの交換で、スマホやスケジュールで照明を自動制御。' },
]

export default function LP_Smart() {
  return (
    <div style={{ background: navy, color: '#fff', fontFamily: '"Noto Sans JP", sans-serif', minHeight: '100vh' }}>
      <Seo title="シャッターリモコン化・LED化・スマート設備交換｜稲田電工（播磨エリア）"
           description="手動シャッターのリモコン化、LED全灯化、IH・浴室乾燥機交換、スマホ連携照明まで対応。写真3枚をLINEで送るだけで見積もり完了。加古川・姫路・明石・神戸市西区。" />
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
              🏠 スマート化・設備交換 | 播磨エリア
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            古いシャッターを、<br />
            <span style={{ color: yellow }}>スマホで動かす。</span>
          </h1>

          <p style={{ color: grayL }} className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            「感動する」電気工事を提供します。<br />
            シャッターリモコン化・LED全灯化・IH交換・スマート照明。<br />
            写真3枚を送るだけで見積もり完了。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={LINE_URL} target="_blank" rel="noreferrer"
               style={{ background: '#06C755', color: '#fff' }}
               className="px-8 py-4 rounded-lg font-black text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all">
              LINEで無料見積もり
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {[['感動', '体験重視'], ['施主支給', '大歓迎'], ['写真3枚', '見積もり完了']].map(([n, l]) => (
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

      {/* EXAMPLES */}
      <section style={{ background: navyL }} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">対応できるスマート化メニュー</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {examples.map(e => (
              <div key={e.title}
                   style={{ background: navy, border: `1px solid ${navyM}` }}
                   className="rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{e.emoji}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{e.title}</h3>
                <p style={{ color: grayL }} className="text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">稲田電工のスマート化が選ばれる理由</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Star size={24}/>, title: '感動体験の設計',
                text: '「動いた！」という瞬間の感動を大切にします。技術的な正確さだけでなく、使い勝手の良さまで考えます。' },
              { icon: <Smartphone size={24}/>, title: 'スマホ連携まで対応',
                text: 'リモコン化だけでなく、スマホアプリ連携・タイマー制御まで一貫して設計・施工します。' },
              { icon: <Zap size={24}/>, title: '施主支給品も大歓迎',
                text: 'ネット購入した機器の取り付けも喜んで対応。技術料はきっちり、機器代は賢く節約。' },
            ].map(item => (
              <div key={item.title}
                   style={{ background: navyL, border: `1px solid ${navyM}` }}
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
      <PhotoGuideCards service="smart" />

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
              当社は「利便性・感動体験・スマートな対応」を重視する方向けです。
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
