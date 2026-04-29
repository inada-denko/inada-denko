import { Camera } from 'lucide-react'
import { navy, navyL, navyM, yellow, gray, grayL, LINE_URL } from '../theme'

export default function PhotoEstimate({ photos, lineMessage }) {
  const href = lineMessage
    ? `${LINE_URL}`
    : LINE_URL

  return (
    <section style={{ background: navyL }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">
            Smart Estimate
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 text-white">
            3枚の写真を送るだけ
          </h2>
          <p style={{ color: grayL }} className="mt-3 text-base max-w-lg mx-auto">
            現地調査は原則不要です。写真を見て、正確な見積もりをお出しします。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {photos.map((p, i) => (
            <div key={i}
                 style={{ background: navy, border: `1px solid ${navyM}` }}
                 className="rounded-2xl p-6 text-center">
              <div style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)' }}
                   className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span style={{ color: yellow }} className="text-2xl font-black">{i + 1}</span>
              </div>
              <div style={{ color: yellow }} className="mb-2 flex justify-center">
                <Camera size={20} />
              </div>
              <h3 className="font-bold text-sm mb-2 text-white">{p.title}</h3>
              <p style={{ color: gray }} className="text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href={href} target="_blank" rel="noreferrer"
             style={{ background: '#06C755', color: '#fff' }}
             className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-black text-lg hover:brightness-110 transition-all">
            LINEで写真を送って見積もりを受け取る →
          </a>
          <p style={{ color: gray }} className="text-xs mt-3">
            通常1〜2時間以内に返信します（受付時間外は翌朝）
          </p>
        </div>
      </div>
    </section>
  )
}
