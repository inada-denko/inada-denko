import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Zap, Menu, X } from 'lucide-react'
import { navy, navyL, navyM, yellow, grayL, LINE_URL } from '../theme'

const links = [
  ['防犯カメラ', '/bouhan'],
  ['EVコンセント', '/ev'],
  ['エアコン', '/aircon'],
  ['スマート化', '/smart'],
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav style={{ background: `${navy}EE`, borderBottom: `1px solid ${navyM}`, backdropFilter: 'blur(8px)' }}
         className="fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <Zap size={22} color={yellow} />
          <span className="font-black text-lg tracking-widest text-white">稲田電工</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(([label, href]) => (
            <Link key={href} to={href}
                  style={{ color: pathname === href ? yellow : grayL }}
                  className="text-sm font-medium hover:text-yellow-400 transition-colors no-underline">
              {label}
            </Link>
          ))}
          <a href={LINE_URL} target="_blank" rel="noreferrer"
             style={{ background: '#06C755', color: '#fff' }}
             className="px-5 py-2 rounded font-black text-sm hover:brightness-110 transition-all">
            LINE無料相談
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X color={yellow} /> : <Menu color={yellow} />}
        </button>
      </div>

      {open && (
        <div style={{ background: navyL, borderTop: `1px solid ${navyM}` }}
             className="md:hidden px-4 py-4 flex flex-col gap-3">
          {links.map(([label, href]) => (
            <Link key={href} to={href} onClick={() => setOpen(false)}
                  style={{ color: grayL }} className="py-2 text-sm no-underline">
              {label}
            </Link>
          ))}
          <a href={LINE_URL} target="_blank" rel="noreferrer"
             style={{ background: '#06C755', color: '#fff' }}
             className="py-2 rounded font-black text-sm text-center">
            LINE無料相談
          </a>
        </div>
      )}
    </nav>
  )
}
