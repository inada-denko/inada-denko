import { navy, navyL, navyM, yellow, gray, grayL, LINE_URL } from '../theme'

/* ── palette — theme.js に準拠 ───────────────── */
const NAVY = '#0A1628'              // 公式 navy
const NVY2 = '#1A3A5C'              // 公式 navyM（描画要素）
const GOLD = '#FFD700'              // 公式 yellow
const GODF = 'rgba(255,215,0,0.25)' // gold fill
const RED  = '#EF4444'              // annotation
const REDF = 'rgba(239,68,68,0.15)' // annotation fill
const GRN  = '#16A34A'              // LED green
const BLU  = '#3B82F6'              // LED blue
const BG   = '#EEF4FF'              // カード背景 — 明るい水色
const W1   = '#C4D8F0'              // 面: sky / floor
const W2   = '#DCE9F8'              // 面: lighter
const TXT  = '#0A1628'              // 暗いテキスト（明るい背景用）
const WHT  = '#FFFFFF'              // ヘッダー・フッター内の白テキスト

function Ann({ cx, cy, n, r = 19 }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 6} fill="rgba(239,68,68,0.08)"/>
      <circle cx={cx} cy={cy} r={r} fill={REDF} stroke={RED} strokeWidth="2.5"/>
      <text x={cx} y={cy + 6} textAnchor="middle" fill={RED} fontSize="15"
            fontWeight="900" fontFamily="sans-serif">
        {n === 1 ? '①' : '②'}
      </text>
    </g>
  )
}

/* 暗いヘッダー＋明るい本体＋暗いフッター */
function CardSVG({ header, foot1, foot2, children }) {
  return (
    <svg viewBox="0 0 260 186" width="100%" style={{ display: 'block' }}>
      {/* 明るいカード本体 */}
      <rect width="260" height="186" fill={BG}/>
      {/* 暗いヘッダーバー */}
      <rect width="260" height="28" fill={NAVY}/>
      <line x1="0" y1="28" x2="260" y2="28" stroke={GOLD} strokeWidth="1.5"/>
      <text x="130" y="19" textAnchor="middle" fill={GOLD} fontSize="10.5"
            fontWeight="700" fontFamily="sans-serif">{header}</text>
      {children}
      {/* 暗いフッターバー */}
      <rect x="0" y="154" width="260" height="32" fill={NAVY}/>
      <line x1="0" y1="154" x2="260" y2="154" stroke={RED} strokeWidth="1"/>
      <text x="130" y="167" textAnchor="middle" fill={RED} fontSize="10"
            fontWeight="700" fontFamily="sans-serif">{foot1}</text>
      <text x="130" y="181" textAnchor="middle" fill={WHT} fontSize="8.5"
            fontFamily="sans-serif">{foot2}</text>
    </svg>
  )
}

/* ═══════════════════════════════════════════════
   AIRCON
═══════════════════════════════════════════════ */
function AirconIndoor() {
  return (
    <CardSVG header="かんたん見積もり見本（室内）"
             foot1="①室内機　②エアコン用コンセント"
             foot2="2点が写るようにご撮影ください">
      {/* ceiling stripe */}
      <rect x="0" y="28" width="260" height="14" fill={W1}/>
      <line x1="0" y1="42" x2="260" y2="42" stroke={NVY2} strokeWidth="1"/>
      {/* left wall */}
      <rect x="0" y="28" width="16" height="126" fill={W1}/>
      <line x1="16" y1="42" x2="16" y2="154" stroke={NVY2} strokeWidth="1"/>
      {/* floor */}
      <line x1="0" y1="146" x2="260" y2="146" stroke={NVY2} strokeWidth="1"/>
      {/* AC unit — dark navy on light BG: clearly visible */}
      <rect x="28" y="46" width="184" height="58" rx="10" fill={NVY2} stroke={NAVY} strokeWidth="2"/>
      <rect x="38" y="55" width="28" height="9" rx="2" fill={NAVY}/>
      <circle cx="200" cy="62" r="5.5" fill={GRN}/>
      <circle cx="187" cy="62" r="4" fill={BLU} opacity="0.9"/>
      <rect x="38" y="91" width="164" height="8" rx="4" fill={NAVY} opacity="0.35"/>
      {/* outlet — gold highlight */}
      <rect x="184" y="107" width="42" height="46" rx="7" fill={GODF} stroke={GOLD} strokeWidth="2.5"/>
      <rect x="191" y="115" width="11" height="15" rx="2.5" fill={NVY2}/>
      <rect x="207" y="115" width="11" height="15" rx="2.5" fill={NVY2}/>
      <circle cx="205" cy="143" r="7" fill={NVY2}/>
      <Ann cx="120" cy="75" n={1} r={28}/>
      <Ann cx="205" cy="130" n={2} r={22}/>
    </CardSVG>
  )
}

function AirconOutdoor() {
  return (
    <CardSVG header="かんたん見積もり見本（室外）"
             foot1="①室外機　②配管穴の出口"
             foot2="2点が写るようにご撮影ください">
      {/* sky */}
      <rect x="0" y="28" width="260" height="126" fill={W1}/>
      {/* ground */}
      <rect x="0" y="134" width="260" height="20" fill={NVY2}/>
      <line x1="0" y1="134" x2="260" y2="134" stroke={NAVY} strokeWidth="1.5"/>
      {/* building wall */}
      <rect x="0" y="28" width="148" height="106" fill={NVY2}/>
      <line x1="148" y1="28" x2="148" y2="134" stroke={NAVY} strokeWidth="2.5"/>
      {/* pipe hole */}
      <circle cx="94" cy="72" r="16" fill={NAVY}/>
      <circle cx="94" cy="72" r="9" fill={BG}/>
      <rect x="88" y="72" width="8" height="64" fill={NVY2} opacity="0.8"/>
      {/* outdoor unit */}
      <rect x="14" y="94" width="118" height="50" rx="7" fill={NAVY} stroke={NVY2} strokeWidth="1.5"/>
      <circle cx="67" cy="119" r="22" fill="none" stroke={W1} strokeWidth="2"/>
      <circle cx="67" cy="119" r="13" fill="none" stroke={W1} strokeWidth="1.5"/>
      <circle cx="67" cy="119" r="5.5" fill={W1} opacity="0.7"/>
      <line x1="67" y1="97" x2="67" y2="141" stroke={W1} strokeWidth="1.5"/>
      <line x1="45" y1="119" x2="89" y2="119" stroke={W1} strokeWidth="1.5"/>
      <rect x="104" y="101" width="22" height="32" rx="3" fill={NVY2}/>
      <Ann cx="55" cy="113" n={1} r={20}/>
      <Ann cx="94" cy="72" n={2} r={21}/>
    </CardSVG>
  )
}

function AirconWall() {
  return (
    <CardSVG header="かんたん見積もり見本（設置場所）"
             foot1="①設置予定の壁面　②近くのコンセント"
             foot2="窓・コンセントも入るよう広めに撮影ください">
      {/* ceiling */}
      <rect x="0" y="28" width="260" height="14" fill={W1}/>
      <line x1="0" y1="42" x2="260" y2="42" stroke={NVY2} strokeWidth="1"/>
      {/* left wall */}
      <rect x="0" y="28" width="22" height="126" fill={W1}/>
      <line x1="22" y1="42" x2="22" y2="154" stroke={NVY2} strokeWidth="1"/>
      {/* window */}
      <rect x="28" y="44" width="86" height="98" rx="5" fill={W1} stroke={NVY2} strokeWidth="2.5"/>
      <line x1="71" y1="44" x2="71" y2="142" stroke={NVY2} strokeWidth="2"/>
      <line x1="28" y1="93" x2="114" y2="93" stroke={NVY2} strokeWidth="2"/>
      <rect x="30" y="46" width="39" height="45" rx="2" fill={W2}/>
      <rect x="73" y="46" width="39" height="45" rx="2" fill={W2}/>
      {/* install zone */}
      <rect x="120" y="42" width="130" height="60" rx="8"
            fill={GODF} stroke={GOLD} strokeWidth="2.5" strokeDasharray="10 4"/>
      <text x="185" y="76" textAnchor="middle" fill={NAVY} fontSize="11" fontWeight="700"
            fontFamily="sans-serif">設置予定エリア</text>
      {/* outlet */}
      <rect x="207" y="113" width="36" height="40" rx="6" fill={GODF} stroke={GOLD} strokeWidth="2.5"/>
      <rect x="213" y="120" width="10" height="13" rx="2.5" fill={NVY2}/>
      <rect x="227" y="120" width="10" height="13" rx="2.5" fill={NVY2}/>
      <Ann cx="136" cy="60" n={1} r={18}/>
      <Ann cx="225" cy="133" n={2} r={19}/>
    </CardSVG>
  )
}

/* ═══════════════════════════════════════════════
   BOUHAN
═══════════════════════════════════════════════ */
function BouhanMount() {
  return (
    <CardSVG header="かんたん見積もり見本（設置場所）"
             foot1="①防犯カメラの設置位置"
             foot2="真下から見上げるように広角で撮影ください">
      {/* sky looking up */}
      <rect x="0" y="28" width="260" height="126" fill={W1}/>
      {/* eave/soffit */}
      <path d="M0 28 L260 28 L260 78 L130 102 L0 78 Z" fill={NVY2}/>
      <path d="M0 28 L260 28 L260 78 L130 102 L0 78 Z" fill="none" stroke={NAVY} strokeWidth="1.5"/>
      {/* side walls */}
      <rect x="0" y="78" width="64" height="76" fill={NVY2} opacity="0.75"/>
      <line x1="64" y1="78" x2="64" y2="154" stroke={NAVY} strokeWidth="1"/>
      <rect x="196" y="78" width="64" height="76" fill={NVY2} opacity="0.75"/>
      <line x1="196" y1="78" x2="196" y2="154" stroke={NAVY} strokeWidth="1"/>
      {/* camera */}
      <rect x="104" y="58" width="52" height="30" rx="7" fill={NAVY}/>
      <circle cx="130" cy="73" r="11" fill={W2} stroke={NAVY} strokeWidth="2"/>
      <circle cx="130" cy="73" r="7" fill={NVY2}/>
      <circle cx="130" cy="73" r="3.5" fill={NAVY}/>
      <circle cx="126" cy="69" r="2" fill={W1} opacity="0.6"/>
      <circle cx="111" cy="73" r="3.5" fill={RED} opacity="0.7"/>
      <circle cx="149" cy="73" r="3.5" fill={RED} opacity="0.7"/>
      <line x1="130" y1="58" x2="130" y2="44" stroke={NAVY} strokeWidth="4" strokeLinecap="round"/>
      <Ann cx="130" cy="73" n={1} r={26}/>
    </CardSVG>
  )
}

function BouhanPower() {
  return (
    <CardSVG header="かんたん見積もり見本（電源）"
             foot1="①最寄りのコンセント　②配電盤"
             foot2="設置場所に最も近い電源を撮影ください">
      {/* wall */}
      <line x1="0" y1="42" x2="260" y2="42" stroke={NVY2} strokeWidth="1"/>
      {/* outlet */}
      <rect x="26" y="50" width="84" height="100" rx="8" fill={NVY2} stroke={NAVY} strokeWidth="2"/>
      <rect x="38" y="64" width="18" height="24" rx="3" fill={NAVY}/>
      <rect x="63" y="64" width="18" height="24" rx="3" fill={NAVY}/>
      <circle cx="77" cy="130" r="13" fill={NAVY}/>
      {/* breaker panel */}
      <rect x="152" y="38" width="90" height="116" rx="8" fill={NVY2} stroke={NAVY} strokeWidth="2"/>
      <rect x="162" y="50" width="70" height="24" rx="5" fill={GODF} stroke={GOLD} strokeWidth="2"/>
      <text x="197" y="66" textAnchor="middle" fill={NAVY} fontSize="10" fontWeight="700" fontFamily="sans-serif">主幹 40A</text>
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={162} y={80 + i * 15} width="30" height="12" rx="3"
              fill={NAVY} stroke={W2} strokeWidth="1"/>
      ))}
      {[0,1,2,3,4].map(i => (
        <rect key={`r${i}`} x={198} y={80 + i * 15} width="30" height="12" rx="3"
              fill={NAVY} stroke={W2} strokeWidth="1"/>
      ))}
      <Ann cx="68" cy="100" n={1} r={28}/>
      <Ann cx="197" cy="97" n={2} r={32}/>
    </CardSVG>
  )
}

function BouhanRouter() {
  return (
    <CardSVG header="かんたん見積もり見本（ルーター）"
             foot1="①Wi-Fiルーター本体"
             foot2="有線・無線の判断に使います。全体がわかるよう撮影ください">
      <line x1="0" y1="42" x2="260" y2="42" stroke={NVY2} strokeWidth="1"/>
      {/* shelf */}
      <rect x="18" y="112" width="224" height="12" rx="3" fill={NVY2} stroke={NAVY} strokeWidth="1.5"/>
      <rect x="38" y="124" width="10" height="28" rx="3" fill={NVY2}/>
      <rect x="212" y="124" width="10" height="28" rx="3" fill={NVY2}/>
      {/* router */}
      <rect x="76" y="70" width="108" height="42" rx="9" fill={NVY2} stroke={NAVY} strokeWidth="2"/>
      {/* antennas */}
      <line x1="93" y1="70" x2="84" y2="44" stroke={NAVY} strokeWidth="4" strokeLinecap="round"/>
      <line x1="167" y1="70" x2="176" y2="44" stroke={NAVY} strokeWidth="4" strokeLinecap="round"/>
      <circle cx="84" cy="42" r="5" fill={NAVY}/>
      <circle cx="176" cy="42" r="5" fill={NAVY}/>
      {/* LEDs */}
      {[0,1,2,3].map(i => (
        <circle key={i} cx={96 + i * 14} cy={91} r={4.5}
                fill={i === 2 ? BLU : GRN} opacity={1 - i * 0.15}/>
      ))}
      {/* cable */}
      <path d="M130 112 Q130 134 200 142" stroke={NVY2} strokeWidth="4" fill="none" strokeLinecap="round"/>
      <Ann cx="130" cy="91" n={1} r={36}/>
    </CardSVG>
  )
}

/* ═══════════════════════════════════════════════
   EV
═══════════════════════════════════════════════ */
function EVPanel() {
  return (
    <CardSVG header="かんたん見積もり見本（分電盤）"
             foot1="①分電盤（扉を開けた状態）　②空きスロット"
             foot2="扉を開けた状態で全体が写るよう撮影ください">
      <line x1="0" y1="42" x2="260" y2="42" stroke={NVY2} strokeWidth="1"/>
      {/* panel outer */}
      <rect x="44" y="34" width="172" height="120" rx="8" fill={NVY2} stroke={NAVY} strokeWidth="2"/>
      {/* panel interior */}
      <rect x="54" y="44" width="152" height="104" rx="5" fill={NAVY}/>
      {/* main breaker */}
      <rect x="64" y="52" width="132" height="26" rx="5" fill={GODF} stroke={GOLD} strokeWidth="2"/>
      <text x="130" y="69" textAnchor="middle" fill={NAVY} fontSize="10.5" fontWeight="700" fontFamily="sans-serif">主幹 40A</text>
      {/* rows */}
      {[0,1,2,3,4].map(i => (
        <rect key={`a${i}`} x={64 + i * 27} y={86} width="23" height="16" rx="4"
              fill={NVY2} stroke={W2} strokeWidth="1"/>
      ))}
      {[0,1,2,3,4].map(i => (
        <rect key={`b${i}`} x={64 + i * 27} y={108} width="23" height="16" rx="4"
              fill={NVY2} stroke={W2} strokeWidth="1"/>
      ))}
      {/* empty slot */}
      <rect x="64" y="130" width="23" height="16" rx="4"
            fill={GODF} stroke={GOLD} strokeWidth="2.5"/>
      <text x="76" y="141" textAnchor="middle" fill={NAVY} fontSize="9" fontWeight="700" fontFamily="sans-serif">空き</text>
      {[1,2,3,4].map(i => (
        <rect key={`c${i}`} x={64 + i * 27} y={130} width="23" height="16" rx="4"
              fill={NVY2} stroke={W2} strokeWidth="1"/>
      ))}
      <Ann cx="130" cy="65" n={1} r={18}/>
      <Ann cx="76" cy="138" n={2} r={16}/>
    </CardSVG>
  )
}

function EVParking() {
  return (
    <CardSVG header="かんたん見積もり見本（駐車場）"
             foot1="①駐車スペース全景　②建物外壁"
             foot2="建物と駐車場の距離感がわかるよう撮影ください">
      {/* outdoor light sky */}
      <rect x="0" y="28" width="260" height="126" fill={W2}/>
      {/* ground */}
      <rect x="0" y="136" width="260" height="18" fill={W1}/>
      <line x1="0" y1="136" x2="260" y2="136" stroke={NVY2} strokeWidth="1.5"/>
      {/* building */}
      <rect x="0" y="28" width="98" height="108" fill={NVY2}/>
      <line x1="98" y1="28" x2="98" y2="136" stroke={NAVY} strokeWidth="2"/>
      {[[8,36],[54,36],[8,76],[54,76]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="34" height="26" rx="3"
              fill={W1} stroke={NAVY} strokeWidth="1.5"/>
      ))}
      {/* parking lines */}
      <line x1="108" y1="136" x2="108" y2="154" stroke={GOLD} strokeWidth="2.5" strokeDasharray="8 4"/>
      <line x1="220" y1="136" x2="220" y2="154" stroke={GOLD} strokeWidth="2.5" strokeDasharray="8 4"/>
      {/* car top-view */}
      <rect x="120" y="106" width="88" height="46" rx="10" fill={NVY2} stroke={NAVY} strokeWidth="2"/>
      <rect x="127" y="113" width="34" height="16" rx="3" fill={NAVY}/>
      <rect x="165" y="113" width="34" height="16" rx="3" fill={NAVY}/>
      {[[120,106],[194,106],[120,142],[194,142]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="14" height="10" rx="2" fill={NAVY}/>
      ))}
      {/* EV marker */}
      <circle cx="102" cy="136" r="13" fill={GOLD}/>
      <text x="102" y="141" textAnchor="middle" fill={NAVY} fontSize="14" fontWeight="900" fontFamily="sans-serif">⚡</text>
      <Ann cx="164" cy="129" n={1} r={30}/>
      <Ann cx="49" cy="57" n={2} r={22}/>
    </CardSVG>
  )
}

function EVRoute() {
  return (
    <CardSVG header="かんたん見積もり見本（配線経路）"
             foot1="①分電盤の場所　②駐車場までの経路"
             foot2="壁・廊下・外壁など経路全体がわかるよう撮影ください">
      {/* indoor room */}
      <rect x="6" y="36" width="108" height="118" rx="5" fill={W2} stroke={NVY2} strokeWidth="2"/>
      <text x="60" y="50" textAnchor="middle" fill={TXT} fontSize="9" fontFamily="sans-serif">室内</text>
      {/* panel box */}
      <rect x="14" y="56" width="52" height="72" rx="5" fill={NVY2} stroke={NAVY} strokeWidth="2"/>
      <rect x="20" y="63" width="40" height="14" rx="3" fill={GODF} stroke={GOLD} strokeWidth="1.5"/>
      {[0,1,2,3].map(i => (
        <rect key={i} x={20} y={82 + i * 13} width="40" height="10" rx="2.5"
              fill={NAVY} stroke={W1} strokeWidth="0.5"/>
      ))}
      {/* wall divider */}
      <rect x="114" y="36" width="18" height="118" fill={NVY2} stroke={NAVY} strokeWidth="1.5"/>
      {/* outdoor */}
      <rect x="132" y="36" width="122" height="118" rx="5" fill={W1} stroke={NVY2} strokeWidth="1.5"/>
      <text x="193" y="50" textAnchor="middle" fill={TXT} fontSize="9" fontFamily="sans-serif">屋外・車庫</text>
      {/* EV charger */}
      <rect x="220" y="58" width="28" height="54" rx="5" fill={NVY2} stroke={GOLD} strokeWidth="2.5"/>
      <circle cx="234" cy="85" r="11" fill={GOLD}/>
      <text x="234" y="89" textAnchor="middle" fill={NAVY} fontSize="12" fontWeight="900" fontFamily="sans-serif">⚡</text>
      {/* car */}
      <rect x="138" y="106" width="72" height="36" rx="7" fill={NVY2} stroke={NAVY} strokeWidth="1" opacity="0.5"/>
      {/* cable route */}
      <path d="M65 92 L114 92 L132 92 L220 92"
            stroke={RED} strokeWidth="3.5" fill="none" strokeDasharray="9 4" strokeLinecap="round"/>
      <polygon points="216,87 228,92 216,97" fill={RED}/>
      <text x="170" y="86" textAnchor="middle" fill={RED} fontSize="9.5" fontWeight="700" fontFamily="sans-serif">配線ルート</text>
      <Ann cx="40" cy="92" n={1} r={18}/>
      <Ann cx="234" cy="85" n={2} r={20}/>
    </CardSVG>
  )
}

/* ═══════════════════════════════════════════════
   SMART
═══════════════════════════════════════════════ */
function SmartDevice() {
  return (
    <CardSVG header="かんたん見積もり見本（機器全体）"
             foot1="①スマート化したい機器の全体"
             foot2="機器全体と設置環境がわかるよう撮影ください">
      {/* wall above */}
      <rect x="0" y="28" width="260" height="20" fill={W1}/>
      {/* shutter frame */}
      <rect x="18" y="34" width="224" height="14" rx="3" fill={NVY2} stroke={NAVY} strokeWidth="2"/>
      <rect x="14" y="34" width="14" height="122" rx="3" fill={NVY2} stroke={NAVY} strokeWidth="1.5"/>
      <rect x="232" y="34" width="14" height="122" rx="3" fill={NVY2} stroke={NAVY} strokeWidth="1.5"/>
      {/* shutter slats — alternating NVY2 and W1 */}
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <rect key={i} x="28" y={48 + i * 11} width="204" height="10" rx="2"
              fill={i % 2 === 0 ? NVY2 : W2} stroke={NVY2} strokeWidth="0.8"/>
      ))}
      {/* bottom bar + handle */}
      <rect x="18" y="147" width="224" height="10" rx="3" fill={NVY2} stroke={NAVY} strokeWidth="1.5"/>
      <rect x="104" y="138" width="52" height="12" rx="6" fill={GOLD}/>
      <Ann cx="130" cy="96" n={1} r={30}/>
    </CardSVG>
  )
}

function SmartLabel() {
  return (
    <CardSVG header="かんたん見積もり見本（型番ラベル）"
             foot1="①型番　②メーカー名"
             foot2="型番・メーカーを鮮明に撮影ください（互換性確認に使います）">
      {/* label plate */}
      <rect x="32" y="36" width="196" height="118" rx="8" fill="#f0eee6" stroke="#b0a890" strokeWidth="2"/>
      <rect x="32" y="36" width="196" height="30" rx="8" fill="#ddd8c8"/>
      <rect x="32" y="58" width="196" height="8" fill="#ddd8c8"/>
      <text x="130" y="57" textAnchor="middle" fill="#100808" fontSize="13"
            fontWeight="900" fontFamily="sans-serif">SANWA SHUTTER</text>
      <line x1="42" y1="68" x2="218" y2="68" stroke="#aaa" strokeWidth="1.5"/>
      <text x="46" y="82" fill="#1a1a1a" fontSize="10.5" fontFamily="sans-serif">型番: SS-T200-W</text>
      <text x="46" y="97" fill="#333" fontSize="10" fontFamily="sans-serif">定格: AC100V  50/60Hz</text>
      <text x="46" y="111" fill="#333" fontSize="10" fontFamily="sans-serif">製造年: 2015年</text>
      <text x="46" y="125" fill="#555" fontSize="9.5" fontFamily="sans-serif">S/N: 20150312-001A</text>
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
        <rect key={i} x={46 + i * 10} y={132} width={i % 3 === 0 ? 4 : 7} height={14} fill="#333"/>
      ))}
      <Ann cx="130" cy="96" n={1} r={25}/>
      <Ann cx="130" cy="52" n={2} r={16}/>
    </CardSVG>
  )
}

function SmartContext() {
  return (
    <CardSVG header="かんたん見積もり見本（周囲状況）"
             foot1="①機器周辺の配線・コンセント"
             foot2="施工方法の検討に使います。周囲全体がわかるよう撮影ください">
      <line x1="0" y1="42" x2="260" y2="42" stroke={NVY2} strokeWidth="1"/>
      {/* control box */}
      <rect x="34" y="46" width="98" height="92" rx="8" fill={NVY2} stroke={NAVY} strokeWidth="2"/>
      <text x="83" y="86" textAnchor="middle" fill={WHT} fontSize="10" fontFamily="sans-serif">シャッター</text>
      <text x="83" y="100" textAnchor="middle" fill={WHT} fontSize="10" fontFamily="sans-serif">制御盤</text>
      <circle cx="51" cy="59" r="5.5" fill={GRN}/>
      <circle cx="67" cy="59" r="5.5" fill={RED} opacity="0.7"/>
      {/* wiring */}
      <line x1="132" y1="92" x2="182" y2="92" stroke={NAVY} strokeWidth="5" strokeLinecap="round"/>
      <line x1="132" y1="92" x2="132" y2="152" stroke={NAVY} strokeWidth="5" strokeLinecap="round"/>
      <rect x="128" y="118" width="10" height="36" rx="3" fill={NVY2}/>
      {/* outlet */}
      <rect x="182" y="64" width="48" height="56" rx="7" fill={NVY2} stroke={NAVY} strokeWidth="2"/>
      <rect x="190" y="73" width="14" height="18" rx="3" fill={NAVY}/>
      <rect x="210" y="73" width="14" height="18" rx="3" fill={NAVY}/>
      <circle cx="206" cy="112" r="10" fill={NAVY}/>
      <Ann cx="157" cy="92" n={1} r={24}/>
    </CardSVG>
  )
}

/* ═══════════════════════════════════════════════
   DATA MAP
═══════════════════════════════════════════════ */
const CARDS = {
  aircon: [
    { num: 1, title: '設置予定の壁面（室内）',    Illus: AirconIndoor  },
    { num: 2, title: '屋外の室外機・配管出口',    Illus: AirconOutdoor },
    { num: 3, title: '設置希望の壁面（全体）',    Illus: AirconWall    },
  ],
  bouhan: [
    { num: 1, title: '設置場所の見上げ写真',      Illus: BouhanMount  },
    { num: 2, title: '最寄りのコンセント・配電盤', Illus: BouhanPower  },
    { num: 3, title: 'Wi-Fiルーターの設置場所',   Illus: BouhanRouter },
  ],
  ev: [
    { num: 1, title: '分電盤の全体写真',           Illus: EVPanel      },
    { num: 2, title: '駐車場の全景',               Illus: EVParking    },
    { num: 3, title: '分電盤から駐車場までの経路', Illus: EVRoute      },
  ],
  smart: [
    { num: 1, title: 'スマート化したい機器の全体', Illus: SmartDevice  },
    { num: 2, title: '型番ラベルのアップ',         Illus: SmartLabel   },
    { num: 3, title: '機器周辺の配線・コンセント', Illus: SmartContext },
  ],
}

export default function PhotoGuideCards({ service }) {
  const cards = CARDS[service] || CARDS.aircon

  return (
    <section className="py-20 px-4" style={{ background: navy }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span style={{ color: yellow }} className="text-xs font-bold tracking-widest uppercase">
            Photo Guide
          </span>
          <h2 className="text-3xl font-black mt-2 text-white">写真3枚で見積もり完了</h2>
          <p style={{ color: grayL }} className="mt-3 text-sm">
            LINEでこの3枚を送るだけ。現地調査不要で即日見積もりをお届けします。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {cards.map(({ num, title, Illus }) => (
            <div key={num}
                 style={{ background: navyL, border: `1px solid ${navyM}` }}
                 className="rounded-2xl overflow-hidden">
              <Illus />
              <div className="p-4">
                <span style={{ background: 'rgba(255,215,0,0.15)', color: yellow, border: '1px solid rgba(255,215,0,0.4)' }}
                      className="text-xs font-black px-2 py-0.5 rounded">
                  写真 {num}
                </span>
                <p className="text-white font-bold text-sm mt-2">{title}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: navyL, border: '1px solid rgba(255,215,0,0.3)' }}
             className="rounded-2xl p-7 text-center">
          <p style={{ color: yellow }} className="font-black text-lg mb-2">
            この3枚をLINEで送るだけ
          </p>
          <p style={{ color: grayL }} className="text-sm mb-5">
            電話不要・現地調査不要。写真を送った当日に見積もりを返信します。
          </p>
          <a href={LINE_URL} target="_blank" rel="noreferrer"
             style={{ background: '#06C755', color: '#fff' }}
             className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-lg hover:brightness-110 transition-all">
            LINEで写真を送る
          </a>
        </div>
      </div>
    </section>
  )
}
