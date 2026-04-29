import { Zap, MessageSquare, Mail } from 'lucide-react'
import { navy, navyL, navyM, yellow, gray, LINE_URL, MAIL, COMPANY } from '../theme'

export default function Footer() {
  return (
    <footer style={{ background: navyL, borderTop: `1px solid ${navyM}` }} className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap size={20} color={yellow} />
              <span className="font-black text-lg tracking-widest">{COMPANY.name}</span>
            </div>
            <p style={{ color: gray }} className="text-xs leading-relaxed">
              {COMPANY.address}<br />
              {COMPANY.license1}<br />
              {COMPANY.license2}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href={LINE_URL} target="_blank" rel="noreferrer"
               style={{ background: '#06C755', color: '#fff' }}
               className="flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-sm hover:brightness-110 transition-all w-fit">
              <MessageSquare size={16} /> LINEで無料相談
            </a>
            <a href={`mailto:${MAIL}`}
               style={{ border: `1px solid ${navyM}`, color: gray }}
               className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm hover:border-yellow-400 transition-all w-fit">
              <Mail size={16} /> {MAIL}
            </a>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${navyM}` }}
             className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p style={{ color: gray }} className="text-xs">
            播磨エリア（加古川・姫路・明石・神戸西区）対応
          </p>
          <p style={{ color: gray }} className="text-xs">© 2026 稲田電工</p>
        </div>
      </div>
    </footer>
  )
}
