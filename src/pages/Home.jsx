import { Link } from 'react-router-dom'
import { Zap, ArrowRight, Brain, Users, Shield, Award, CheckCircle, Star, Clock, ChevronDown } from 'lucide-react'
import NavBar    from '../components/NavBar'
import Footer    from '../components/Footer'
import LineFloat from '../components/LineFloat'
import OsamuChat from '../components/OsamuChat'
import Seo       from '../components/Seo'
import ceoPhoto  from '../assets/ceo.jpg'
import { navy, navyL, navyM, yellow, gray, grayL, LINE_URL, COMPANY } from '../theme'

const services = [
  {
    emoji: '🔒',
    title: '防犯カメラ',
    sub: 'スマホで確認。プロが設計する',
    desc: '単なる設置ではなく、侵入経路と死角を考えた「セキュリティ設計」として提供。スマホ連携・夜間対応。',
    href: '/bouhan',
    tags: ['スマホ連携', 'AI監視', '夜間対応'],
  },
  {
    emoji: '⚡',
    title: 'EVコンセント',
    sub: 'テスラも、リーフも。自宅で充電',
    desc: '第一種電気工事士が200V専用回路を確実施工。輸入車・国産EV全対応。補助金申請サポートも。',
    href: '/ev',
    tags: ['200V専用回路', '第一種資格', '補助金対応'],
  },
  {
    emoji: '❄️',
    title: 'エアコン工事',
    sub: '翌日対応。写真3枚で即見積もり',
    desc: '他社の遅い対応を「爆速」で破壊。標準から複雑案件まで、施主支給品の取り付けも喜んで対応。',
    href: '/aircon',
    tags: ['翌日対応', '施主支給OK', '既存撤去'],
  },
  {
    emoji: '🏠',
    title: 'スマート化',
    sub: '古いシャッターをスマホで動かす',
    desc: 'シャッターリモコン化・LED化・IoT連携など、「感動する」電気工事を提供。生活をアップグレード。',
    href: '/smart',
    tags: ['リモコン化', 'IoT連携', 'LED化'],
  },
]

export default function Home() {
  return (
    <div style={{ background: navy, color: '#fff', fontFamily: '"Noto Sans JP", sans-serif', minHeight: '100vh' }}>
      <Seo title="稲田電工｜AI×電工 現場の司令塔"
           description="稲田電工｜EV充電設備・幹線工事・店舗改修。AI×電工で兵庫の電気工事を最速解決。" />
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
               background: 'radial-gradient(circle, rgba(255,215,0,0.12), transparent 70%)',
               filter: 'blur(40px)',
             }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
          <div className="mb-6 inline-block">
            <span style={{ background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.4)', color: yellow }}
                  className="px-4 py-1 rounded-full text-xs font-bold tracking-widest">
              ⚡ 播磨エリアの AI 電気工事
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span style={{ color: yellow }}>爆速対応</span>・<span style={{ color: yellow }}>非対面</span>。<br />
            <span className="text-white">電話不要の電気工事</span>
          </h1>

          <p style={{ color: grayL }} className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            写真3枚をLINEで送るだけ。<br />
            第一種電気工事士が最速で見積もり。<br className="sm:hidden" />
            現地調査は原則不要です。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={LINE_URL} target="_blank" rel="noreferrer"
               style={{ background: '#06C755', color: '#fff' }}
               className="px-8 py-4 rounded-lg font-black text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all">
              LINEで無料相談
            </a>
            <a href="#services"
               style={{ border: '2px solid rgba(255,215,0,0.5)', color: yellow }}
               className="px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-yellow-400 hover:bg-opacity-20 transition-all">
              サービスを見る <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
            {[['15年+', '現場経験'], ['200+', '施工実績'], ['24h', 'LINE対応']].map(([n, l]) => (
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

      {/* SERVICES */}
      <section id="services" style={{ background: navyL }} className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">Services</span>
            <h2 className="text-4xl font-black mt-2">専門サービス</h2>
            <p style={{ color: grayL }} className="mt-3 max-w-lg mx-auto text-base">
              各工事の専用ページで、詳細な情報・スマート見積もりをご確認ください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(s => (
              <Link key={s.href} to={s.href}
                    style={{ background: navy, border: `1px solid ${navyM}` }}
                    className="rounded-2xl p-6 hover:border-yellow-400 transition-all group no-underline block">
                <div className="text-4xl mb-4">{s.emoji}</div>
                <p style={{ color: yellow }} className="text-xs font-bold mb-1">{s.sub}</p>
                <h3 className="text-xl font-black mb-3 text-white">{s.title}</h3>
                <p style={{ color: grayL }} className="text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {s.tags.map(t => (
                    <span key={t}
                          style={{ background: 'rgba(255,215,0,0.1)', color: yellow, border: '1px solid rgba(255,215,0,0.25)' }}
                          className="text-xs px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ color: yellow }} className="text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  詳しく見る <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">Why Us</span>
            <h2 className="text-4xl font-black mt-2">稲田電工が選ばれる理由</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Brain size={20} />, title: 'エリア唯一のAI対応',
                text: '24時間AIが自動受付。深夜の問い合わせも翌朝には返信。LINE写真見積もりで現地調査を最小化。' },
              { icon: <Award size={20} />, title: '第一種電気工事士',
                text: `上位資格「第一種電気工事士」保有。資格番号も公開（${COMPANY.license1}）。実力を数字で証明。` },
              { icon: <Shield size={20} />, title: '代表直接施工・責任完遂',
                text: '下請け丸投げなし。稲田代表が直接現場に立ち、責任を持って最後まで仕上げます。' },
            ].map(item => (
              <div key={item.title}
                   style={{ background: navyL, border: `1px solid ${navyM}` }}
                   className="rounded-xl p-6 flex gap-4">
                <div style={{ color: yellow }} className="flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-sm mb-2 text-white">{item.title}</h3>
                  <p style={{ color: grayL }} className="text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM FLOW */}
      <section id="team" style={{ background: navyL }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">Team FLOW System</span>
            <h2 className="text-4xl font-black mt-2">ハブ＆スポーク体制</h2>
            <p style={{ color: grayL }} className="mt-3 text-base">
              代表一人でも、専門職人チームが動く。電気から建設全般まで一括受注。
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <svg viewBox="0 0 500 380" className="w-full max-w-xl h-auto">
              {[[250,190,250,55],[250,190,430,110],[250,190,430,270],[250,190,250,325],[250,190,70,270],[250,190,70,110]]
                .map(([x1,y1,x2,y2],i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="rgba(255,215,0,0.35)" strokeWidth="1.5" strokeDasharray="5 4" />
              ))}
              <circle cx="250" cy="190" r="52" fill={yellow} />
              <text x="250" y="184" textAnchor="middle" fill={navy} fontSize="13" fontWeight="900">稲田電工</text>
              <text x="250" y="201" textAnchor="middle" fill={navy} fontSize="10">司令塔</text>
              {[
                [250,40,'電気協力会社','現場施工'],
                [430,105,'設計事務所','図面・確認'],
                [430,270,'AI支援','見積・事務'],
                [250,340,'顧客','依頼主'],
                [70,270,'材料業者','資材調達'],
                [70,105,'建設業者','内装・建築'],
              ].map(([cx,cy,label,sub]) => (
                <g key={label}>
                  <rect x={cx-48} y={cy-20} width="96" height="40" rx="8"
                        fill={navyL} stroke="rgba(255,215,0,0.45)" strokeWidth="1" />
                  <text x={cx} y={cy-5} textAnchor="middle" fill={yellow} fontSize="10" fontWeight="700">{label}</text>
                  <text x={cx} y={cy+10} textAnchor="middle" fill={gray} fontSize="9">{sub}</text>
                </g>
              ))}
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Brain size={20}/>, title: 'AI自動化',
                text: '見積・工程管理・書類をAIで自動処理。職人の時間を現場作業に集中させる。' },
              { icon: <Users size={20}/>, title: '協力ネットワーク',
                text: '専門職人との連携で、電気以外の工事も一括コーディネート可能。' },
              { icon: <Shield size={20}/>, title: '代表直接関与',
                text: '全案件で稲田輝吉が直接判断。「知らなかった」では済まない責任施工。' },
            ].map(item => (
              <div key={item.title}
                   style={{ background: navy, border: `1px solid ${navyM}` }}
                   className="rounded-xl p-5 flex gap-4">
                <div style={{ color: yellow }} className="flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-sm mb-1.5 text-white">{item.title}</h3>
                  <p style={{ color: grayL }} className="text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OSAMU CHAT */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">AI Intake</span>
            <h2 className="text-4xl font-black mt-2">番頭「おさむ」に相談</h2>
            <p style={{ color: grayL }} className="mt-3 text-sm">
              播磨の電気工事なら何でも。まず気軽に話しかけてください。
            </p>
          </div>
          <OsamuChat />
        </div>
      </section>

      {/* CEO */}
      <section id="ceo" style={{ background: navyL }} className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">CEO Profile</span>
            <h2 className="text-4xl font-black mt-2">代表プロフィール</h2>
          </div>

          <div style={{ background: navy, border: `1px solid ${navyM}` }}
               className="rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img src={ceoPhoto} alt="稲田輝吉"
                   style={{ border: '2px solid rgba(255,215,0,0.4)' }}
                   className="w-36 h-36 rounded-2xl flex-shrink-0 object-cover object-top mx-auto md:mx-0" />
              <div className="flex-1">
                <span style={{ color: yellow }} className="text-xs font-bold">稲田電工 代表</span>
                <h3 className="text-3xl font-black mt-1 mb-4 text-white">稲田 輝吉</h3>
                <p style={{ color: grayL }} className="text-sm leading-relaxed mb-6">
                  電気工事士として15年以上の現場経験。EV設備・幹線工事・防犯カメラ・スマート化を得意とし、
                  「AI × 電工」という新しいスタイルで現場効率を追求。<br /><br />
                  兵庫県加古川市を拠点に活動。協力会社とのチーム「FLOW」を組み、
                  電気工事から建設全般まで一括受注できる体制を構築。
                  「現地調査不要・LINE写真見積もり」で顧客の時間を最大限尊重するサービスを提供。
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    [<Award size={14}/>, '第一種電気工事士'],
                    [<CheckCircle size={14}/>, '認定電気工事従事者'],
                    [<Star size={14}/>, 'EV充電設備工事認定'],
                    [<Clock size={14}/>, '15年以上の現場経験'],
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

      {/* COMPANY INFO */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">Company</span>
            <h2 className="text-3xl font-black mt-2">会社概要</h2>
          </div>
          <div style={{ background: navyL, border: `1px solid ${navyM}` }}
               className="rounded-2xl overflow-hidden">
            {[
              ['会社名',   '稲田電工'],
              ['代表者',   '稲田 輝吉'],
              ['所在地',   COMPANY.address],
              ['資格',     COMPANY.license1],
              ['登録',     COMPANY.license2],
              ['対応エリア', '加古川市・姫路市・明石市・神戸市西区 ほか播磨全域'],
              ['受付方法', 'LINE・メール（電話対応は原則お断りしています）'],
              ['営業時間', '9:00〜18:00（土日対応可・要相談）'],
            ].map(([k, v], i) => (
              <div key={k}
                   style={{ borderBottom: i < 7 ? `1px solid ${navyM}` : 'none' }}
                   className="flex">
                <div style={{ background: navy, color: yellow, minWidth: 120 }}
                     className="px-5 py-4 text-xs font-bold flex-shrink-0">
                  {k}
                </div>
                <div style={{ color: grayL }} className="px-5 py-4 text-sm">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <LineFloat />
    </div>
  )
}
