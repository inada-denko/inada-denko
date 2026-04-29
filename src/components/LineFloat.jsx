import { MessageSquare } from 'lucide-react'
import { LINE_URL } from '../theme'

export default function LineFloat() {
  return (
    <a href={LINE_URL} target="_blank" rel="noreferrer"
       style={{
         position: 'fixed', bottom: 24, right: 24, zIndex: 100,
         background: '#06C755', color: '#fff',
         width: 60, height: 60, borderRadius: '50%',
         display: 'flex', alignItems: 'center', justifyContent: 'center',
         boxShadow: '0 4px 20px rgba(6,199,85,0.5)',
         transition: 'transform 0.2s, box-shadow 0.2s',
       }}
       onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(6,199,85,0.7)' }}
       onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(6,199,85,0.5)' }}
       title="LINEで相談">
      <MessageSquare size={26} />
    </a>
  )
}
