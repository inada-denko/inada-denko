import { Shield, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react'
import NavBar        from '../components/NavBar'
import Footer        from '../components/Footer'
import LineFloat     from '../components/LineFloat'
import PhotoGuideCards from '../components/PhotoGuideCards'
import Seo            from '../components/Seo'
import { navy, navyL, navyM, yellow, gray, grayL, LINE_URL } from '../theme'

const photos = [
  { title: '設置場所の見上げ写真', desc: '設置したい壁・柱・軒下を真下から撮影。周囲の状況がわかるように広角で。' },
  { title: '最寄りのコンセント・電源', desc: '設置場所から最も近いコンセントや配電盤を撮影。配線経路の確認に使います。' },
  { title: 'ルーター設置場所', desc: 'Wi-Fiルーターの設置場所を撮影。有線か無線かの判断に使います。' },
]

const faqs = [
  { q: '工事の日に家にいる必要がありますか？', a: '原則必要です。設置後に動作確認をしていただくため、工事時間中（通常2〜4時間）のご在宅をお願いしています。' },
  { q: 'スマートフォンで映像を見るにはどうすれば？', a: '設置後にアプリの設定をその場で行います。iPhoneでもAndroidでも対応可能です。' },
  { q: '録画データはどこに保存されますか？', a: 'SDカード・クラウド・NASなど、ご希望の方式を選べます。ご相談ください。' },
  { q: '賃貸物件でも設置できますか？', a: 'オーナー様の許可が必要です。壁への穴あけが難しい場合は、ビス不要の取り付け方法もご提案します。' },
]

export default function LP_Bouhan() {
  return (
    <div style={{ background: navy, color: '#fff', fontFamily: '"Noto Sans JP", sans-serif', minHeight: '100vh' }}>
      <Seo title="防犯カメラ工事｜侵入経路まで考えたセキュリティ設計｜稲田電工（播磨エリア）"
           description="「とりあえず設置」ではなく侵入経路・死角・照明条件を分析した防犯カメラ設計。写真3枚をLINEで送るだけで見積もり、最短翌日施工。加古川・姫路・明石・神戸市西区対応。" />
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
              🔒 防犯カメラ工事 | 播磨エリア
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            「守る」を、<br />
            <span style={{ color: yellow }}>デジタルで設計する。</span>
          </h1>

          <p style={{ color: grayL }} className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            単なる設置ではなく、侵入経路・死角・照明条件を考えた<br />
            「セキュリティ設計」として提供します。<br />
            電話不要・現地調査不要。写真3枚で見積もり完了。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={LINE_URL} target="_blank" rel="noreferrer"
               style={{ background: '#06C755', color: '#fff' }}
               className="px-8 py-4 rounded-lg font-black text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all">
              LINEで無料見積もり
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {[['写真3枚', '見積もり完了'], ['最短', '翌日施工'], ['24h', 'LINE対応']].map(([n, l]) => (
              <div key={l} className="text-center">
                <div style={{ color: yellow }} className="text-2xl font-black">{n}</div>
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
            <h2 className="text-3xl font-black text-white">稲田電工の防犯カメラが選ばれる理由</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Shield size={24}/>, title: 'セキュリティ設計',
                text: '「とりあえず設置」ではなく、侵入経路・死角・照明条件を分析した設置計画を立案。' },
              { icon: <CheckCircle size={24}/>, title: 'スマホ連携',
                text: 'iPhoneでもAndroidでも、外出先からリアルタイムで確認できるシステムを構築。' },
              { icon: <ArrowRight size={24}/>, title: '爆速対応',
                text: '写真3枚をLINEで送るだけ。現地調査不要で最短翌日見積もり・最短翌日施工。' },
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
      <PhotoGuideCards service="bouhan" />

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
              当社は「最新技術・爆速対応・非対面」に特化しています。<br />
              以下のご要望がある方には、地域の老舗電気店さんをご紹介します。
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
