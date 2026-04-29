import { Zap, Award, CheckCircle, ChevronDown } from 'lucide-react'
import NavBar        from '../components/NavBar'
import Footer        from '../components/Footer'
import LineFloat     from '../components/LineFloat'
import PhotoEstimate from '../components/PhotoEstimate'
import { navy, navyL, navyM, yellow, gray, grayL, LINE_URL, COMPANY } from '../theme'

const photos = [
  { title: '分電盤の全体写真', desc: '分電盤（ブレーカーボックス）を扉を開けた状態で全体を撮影。空きスロットも確認します。' },
  { title: '駐車場の全景', desc: '車を停める場所の全景と、建物外壁との位置関係がわかるよう撮影してください。' },
  { title: '配線を通す経路', desc: '分電盤から駐車場までの経路（壁・床・天井裏など）を撮影。配線ルートの確認に使います。' },
]

const faqs = [
  { q: 'テスラ（輸入EV）にも対応していますか？', a: 'はい、対応しています。200V単相15A〜30Aの専用回路を新設します。テスラ純正アダプターへの対応も含めてご相談ください。' },
  { q: '補助金は使えますか？', a: 'CEV補助金・各自治体の補助金に対応しています。申請に必要な書類の作成もサポートします（別途費用なし）。' },
  { q: '集合住宅でも設置できますか？', a: 'マンション・アパートの場合、管理組合・オーナーの許可が必要です。交渉の参考になる資料もご提供できます。' },
  { q: 'なぜ第一種電気工事士が必要ですか？', a: '低圧電気工事（一般住宅・店舗）は第二種でも対応できますが、第一種は上位資格でより複雑な工事や大規模施設にも対応可能。安心感が違います。' },
]

export default function LP_EV() {
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
              ⚡ EV充電コンセント工事 | 播磨エリア
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            テスラも、リーフも。<br />
            <span style={{ color: yellow }}>自宅で充電する未来へ。</span>
          </h1>

          <p style={{ color: grayL }} className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            第一種電気工事士（{COMPANY.license1}）が<br />
            200V専用回路を確実に施工。<br />
            写真3枚をLINEで送るだけで見積もり完了。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={LINE_URL} target="_blank" rel="noreferrer"
               style={{ background: '#06C755', color: '#fff' }}
               className="px-8 py-4 rounded-lg font-black text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all">
              LINEで無料見積もり
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {[['第一種', '電気工事士'], ['補助金', '申請サポート'], ['全EV', 'メーカー対応']].map(([n, l]) => (
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
            <h2 className="text-3xl font-black text-white">稲田電工のEV工事が選ばれる理由</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Award size={24}/>, title: '第一種電気工事士による施工',
                text: `上位資格「${COMPANY.license1}」保有。資格番号を公開し、実力を数字で証明しています。` },
              { icon: <CheckCircle size={24}/>, title: '補助金申請サポート',
                text: 'CEV補助金・各自治体補助金に対応。必要書類の作成も追加費用なしでサポートします。' },
              { icon: <Zap size={24}/>, title: '全メーカー・全車種対応',
                text: 'テスラ・日産リーフ・ホンダ・三菱など、輸入・国産問わず全EV車に対応します。' },
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

      {/* PHOTO ESTIMATE */}
      <PhotoEstimate photos={photos} />

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
              当社は「技術・スピード・資格」を重視する方向けです。
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
