import { navy, navyL, navyM, yellow, gray, grayL, LINE_URL } from '../theme'

/* ── shared SVG helpers ───────────────────────── */
const BG   = '#0D1E35'
const WALL = '#1E3550'
const LN   = '#2A4A6A'
const RED  = '#ef4444'
const GOLD = '#FFD700'
const TXT  = '#B8CADA'

function Ann({ cx, cy, n, r = 18 }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="rgba(239,68,68,0.18)" stroke={RED} strokeWidth="2.5"/>
      <text x={cx} y={cy + 5} textAnchor="middle" fill={RED} fontSize="14"
            fontWeight="900" fontFamily="sans-serif">
        {n === 1 ? '①' : '②'}
      </text>
    </g>
  )
}

function CardSVG({ header, foot1, foot2, children }) {
  return (
    <svg viewBox="0 0 260 185" width="100%" style={{ display: 'block' }}>
      <rect width="260" height="185" fill={BG}/>
      <rect width="260" height="20" fill="rgba(255,215,0,0.1)"/>
      <text x="130" y="14" textAnchor="middle" fill={GOLD} fontSize="9.5"
            fontWeight="700" fontFamily="sans-serif">{header}</text>
      {children}
      <text x="130" y="168" textAnchor="middle" fill={RED} fontSize="9"
            fontWeight="700" fontFamily="sans-serif">{foot1}</text>
      <text x="130" y="181" textAnchor="middle" fill={TXT} fontSize="8"
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
      <rect x="0" y="20" width="260" height="15" fill="#0A1628"/>
      <line x1="0" y1="35" x2="260" y2="35" stroke={LN} strokeWidth="1.5"/>
      <rect x="0" y="35" width="260" height="130" fill={BG}/>
      {/* AC indoor unit */}
      <rect x="50" y="48" width="155" height="42" rx="8" fill={WALL} stroke={LN} strokeWidth="1.5"/>
      <rect x="56" y="54" width="18" height="5" rx="1" fill="#0A1628"/>
      <circle cx="196" cy="60" r="3.5" fill="#22c55e" opacity="0.8"/>
      <rect x="56" y="83" width="143" height="5" rx="2" fill={LN} opacity="0.6"/>
      {/* Outlet */}
      <rect x="184" y="116" width="28" height="32" rx="3" fill={WALL} stroke={LN} strokeWidth="1.5"/>
      <rect x="188" y="122" width="7" height="9" rx="1" fill="#0A1628"/>
      <rect x="199" y="122" width="7" height="9" rx="1" fill="#0A1628"/>
      <circle cx="197" cy="138" r="3.5" fill="#0A1628"/>
      <Ann cx="88" cy="69" n={1}/>
      <Ann cx="198" cy="132" n={2}/>
    </CardSVG>
  )
}

function AirconOutdoor() {
  return (
    <CardSVG header="かんたん見積もり見本（室外）"
             foot1="①室外機　②穴の出口（カバー付き）"
             foot2="2点が写るようにご撮影ください">
      <rect x="0" y="20" width="260" height="115" fill="#0A1420"/>
      <rect x="0" y="135" width="260" height="30" fill="#091218"/>
      <line x1="0" y1="135" x2="260" y2="135" stroke={LN} strokeWidth="1.5"/>
      {/* Building wall */}
      <rect x="0" y="20" width="135" height="115" fill="#0D1E35"/>
      <line x1="135" y1="20" x2="135" y2="135" stroke={LN} strokeWidth="1.5"/>
      {/* Pipe hole */}
      <circle cx="85" cy="63" r="11" fill="#050C18" stroke={LN} strokeWidth="1.5"/>
      <rect x="82" y="63" width="6" height="77" fill={LN}/>
      {/* Outdoor unit */}
      <rect x="15" y="96" width="105" height="50" rx="6" fill={WALL} stroke={LN} strokeWidth="1.5"/>
      <circle cx="60" cy="120" r="21" fill="none" stroke={LN} strokeWidth="1.5"/>
      <circle cx="60" cy="120" r="13" fill="none" stroke={LN} strokeWidth="1"/>
      <circle cx="60" cy="120" r="5" fill={LN}/>
      <line x1="60" y1="99" x2="60" y2="141" stroke={LN} strokeWidth="1"/>
      <line x1="39" y1="120" x2="81" y2="120" stroke={LN} strokeWidth="1"/>
      <rect x="96" y="103" width="18" height="28" rx="3" fill="#0A1628"/>
      {/* Neighbor */}
      <rect x="155" y="38" width="100" height="97" fill="#0A1628" opacity="0.3"/>
      <rect x="165" y="48" width="45" height="40" rx="3" fill="#0A1628" stroke={LN} strokeWidth="1"/>
      <Ann cx="38" cy="104" n={1}/>
      <Ann cx="85" cy="63" n={2} r={17}/>
    </CardSVG>
  )
}

function AirconWall() {
  return (
    <CardSVG header="かんたん見積もり見本（設置場所）"
             foot1="①設置予定の壁面　②近くのコンセント"
             foot2="窓・コンセントも入るよう広めに撮影ください">
      <rect x="0" y="20" width="260" height="15" fill="#0A1628"/>
      <line x1="0" y1="35" x2="260" y2="35" stroke={LN} strokeWidth="1.5"/>
      <rect x="0" y="35" width="15" height="130" fill="#0A1628"/>
      <line x1="15" y1="35" x2="15" y2="165" stroke={LN} strokeWidth="1.5"/>
      {/* Window */}
      <rect x="28" y="45" width="75" height="82" rx="3" fill="#0A1420" stroke={LN} strokeWidth="1.5"/>
      <line x1="65" y1="45" x2="65" y2="127" stroke={LN} strokeWidth="1"/>
      <line x1="28" y1="86" x2="103" y2="86" stroke={LN} strokeWidth="1"/>
      {/* Dashed install zone */}
      <rect x="118" y="43" width="122" height="47" rx="6"
            fill="rgba(255,215,0,0.06)" stroke={GOLD} strokeWidth="1.5" strokeDasharray="7 3"/>
      <text x="179" y="71" textAnchor="middle" fill={GOLD} fontSize="9" fontWeight="700"
            fontFamily="sans-serif">設置予定エリア</text>
      {/* Outlet */}
      <rect x="208" y="115" width="24" height="28" rx="3" fill={WALL} stroke={LN} strokeWidth="1.5"/>
      <rect x="212" y="120" width="6" height="8" rx="1" fill="#0A1628"/>
      <rect x="221" y="120" width="6" height="8" rx="1" fill="#0A1628"/>
      <Ann cx="131" cy="55" n={1} r={14}/>
      <Ann cx="220" cy="129" n={2} r={14}/>
    </CardSVG>
  )
}

/* ═══════════════════════════════════════════════
   BOUHAN (防犯カメラ)
═══════════════════════════════════════════════ */
function BouhanMount() {
  return (
    <CardSVG header="かんたん見積もり見本（設置場所）"
             foot1="①設置したい壁・軒下"
             foot2="真下から見上げるように広角で撮影ください">
      <rect x="0" y="20" width="260" height="145" fill="#0A1420"/>
      {/* Eave/soffit */}
      <path d="M0 20 L260 20 L260 65 L130 85 L0 65 Z" fill="#0D1E35" stroke={LN} strokeWidth="1.5"/>
      {/* Left wall */}
      <rect x="0" y="65" width="65" height="100" fill="#0D1E35" stroke={LN} strokeWidth="1"/>
      {/* Right wall */}
      <rect x="195" y="65" width="65" height="100" fill="#0D1E35" stroke={LN} strokeWidth="1"/>
      {/* Camera on soffit */}
      <rect x="108" y="52" width="44" height="24" rx="4" fill={WALL} stroke={LN} strokeWidth="1.5"/>
      <circle cx="130" cy="64" r="8" fill="#050C18" stroke={LN} strokeWidth="1.5"/>
      <circle cx="130" cy="64" r="4.5" fill="#081220"/>
      <circle cx="130" cy="64" r="2" fill="#0A1628"/>
      <rect x="110" y="55" width="8" height="4" rx="1" fill="#0A1628" opacity="0.5"/>
      <circle cx="113" cy="64" r="2" fill={RED} opacity="0.4"/>
      <circle cx="147" cy="64" r="2" fill={RED} opacity="0.4"/>
      <Ann cx="130" cy="64" n={1} r={22}/>
    </CardSVG>
  )
}

function BouhanPower() {
  return (
    <CardSVG header="かんたん見積もり見本（電源）"
             foot1="①最寄りのコンセント　②配電盤"
             foot2="設置場所に最も近い電源を撮影ください">
      <rect x="0" y="20" width="260" height="15" fill="#0A1628"/>
      <line x1="0" y1="35" x2="260" y2="35" stroke={LN} strokeWidth="1.5"/>
      {/* Outlet */}
      <rect x="42" y="68" width="62" height="70" rx="5" fill={WALL} stroke={LN} strokeWidth="2"/>
      <rect x="56" y="80" width="12" height="16" rx="2" fill="#0A1628"/>
      <rect x="76" y="80" width="12" height="16" rx="2" fill="#0A1628"/>
      <circle cx="73" cy="112" r="8" fill="#0A1628"/>
      {/* Breaker panel */}
      <rect x="163" y="53" width="72" height="92" rx="5" fill={WALL} stroke={LN} strokeWidth="2"/>
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="168" y={63 + i * 14} width="29" height="10" rx="2" fill="#0A1628"/>
      ))}
      <rect x="168" y="133" width="62" height="8" rx="2" fill="#0A1628"/>
      <text x="199" y="139" textAnchor="middle" fill={TXT} fontSize="7" fontFamily="sans-serif">主幹</text>
      <Ann cx="73" cy="103" n={1} r={22}/>
      <Ann cx="199" cy="99" n={2} r={24}/>
    </CardSVG>
  )
}

function BouhanRouter() {
  return (
    <CardSVG header="かんたん見積もり見本（ルーター）"
             foot1="①Wi-Fiルーター本体"
             foot2="有線・無線の判断に使います。全体がわかるよう撮影ください">
      <rect x="0" y="20" width="260" height="15" fill="#0A1628"/>
      <line x1="0" y1="35" x2="260" y2="35" stroke={LN} strokeWidth="1.5"/>
      {/* Shelf */}
      <rect x="28" y="95" width="204" height="8" rx="2" fill={WALL} stroke={LN} strokeWidth="1.5"/>
      <rect x="48" y="95" width="8" height="30" rx="2" fill={LN}/>
      <rect x="204" y="95" width="8" height="30" rx="2" fill={LN}/>
      {/* Router body */}
      <rect x="88" y="67" width="84" height="28" rx="5" fill={WALL} stroke={LN} strokeWidth="1.5"/>
      {/* Antennas */}
      <line x1="100" y1="67" x2="96" y2="47" stroke={LN} strokeWidth="3" strokeLinecap="round"/>
      <line x1="160" y1="67" x2="164" y2="47" stroke={LN} strokeWidth="3" strokeLinecap="round"/>
      {/* LEDs */}
      <circle cx="101" cy="78" r="3" fill="#22c55e" opacity="0.9"/>
      <circle cx="112" cy="78" r="3" fill="#22c55e" opacity="0.7"/>
      <circle cx="123" cy="78" r="3" fill="#3b82f6" opacity="0.9"/>
      <circle cx="134" cy="78" r="3" fill="#22c55e" opacity="0.6"/>
      {/* Cable */}
      <path d="M130 95 Q130 115 185 120" stroke={LN} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <Ann cx="130" cy="81" n={1} r={25}/>
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
      <rect x="0" y="20" width="260" height="15" fill="#0A1628"/>
      <line x1="0" y1="35" x2="260" y2="35" stroke={LN} strokeWidth="1.5"/>
      {/* Panel box */}
      <rect x="58" y="40" width="144" height="118" rx="6" fill={WALL} stroke={LN} strokeWidth="2"/>
      <rect x="67" y="50" width="126" height="100" rx="3" fill="#0A1628"/>
      {/* Main breaker */}
      <rect x="75" y="57" width="112" height="18" rx="3" fill="#1E3550" stroke={LN} strokeWidth="1"/>
      <text x="131" y="70" textAnchor="middle" fill={TXT} fontSize="8" fontFamily="sans-serif">主幹 40A</text>
      {/* Branch breakers row 1 */}
      {[0,1,2,3,4].map(i => (
        <rect key={`a${i}`} x={75 + i * 22} y={81} width="18" height="13" rx="2" fill="#1E3550" stroke={LN} strokeWidth="1"/>
      ))}
      {/* Row 2 */}
      {[0,1,2,3,4].map(i => (
        <rect key={`b${i}`} x={75 + i * 22} y={100} width="18" height="13" rx="2" fill="#1E3550" stroke={LN} strokeWidth="1"/>
      ))}
      {/* Empty slot highlighted */}
      <rect x="75" y="119" width="18" height="13" rx="2"
            fill="rgba(255,215,0,0.15)" stroke={GOLD} strokeWidth="1.5"/>
      <text x="84" y="129" textAnchor="middle" fill={GOLD} fontSize="7" fontWeight="700" fontFamily="sans-serif">空き</text>
      {[1,2,3,4].map(i => (
        <rect key={`c${i}`} x={75 + i * 22} y={119} width="18" height="13" rx="2" fill="#1E3550" stroke={LN} strokeWidth="1"/>
      ))}
      <Ann cx="90" cy="62" n={1} r={14}/>
      <Ann cx="84" cy="125" n={2} r={14}/>
    </CardSVG>
  )
}

function EVParking() {
  return (
    <CardSVG header="かんたん見積もり見本（駐車場）"
             foot1="①駐車スペース全景　②建物外壁との位置関係"
             foot2="建物と駐車場の距離感がわかるよう撮影ください">
      <rect x="0" y="20" width="260" height="115" fill="#0A1420"/>
      <rect x="0" y="135" width="260" height="30" fill="#091218"/>
      <line x1="0" y1="135" x2="260" y2="135" stroke={LN} strokeWidth="1.5"/>
      {/* Building */}
      <rect x="0" y="20" width="85" height="115" fill={BG} stroke={LN} strokeWidth="1.5"/>
      <rect x="8" y="30" width="30" height="28" rx="2" fill="#0A1420" stroke={LN} strokeWidth="1"/>
      <rect x="44" y="30" width="30" height="28" rx="2" fill="#0A1420" stroke={LN} strokeWidth="1"/>
      {/* Parking lines */}
      <line x1="95" y1="135" x2="95" y2="163" stroke="rgba(255,215,0,0.4)" strokeWidth="2" strokeDasharray="7 4"/>
      <line x1="200" y1="135" x2="200" y2="163" stroke="rgba(255,215,0,0.4)" strokeWidth="2" strokeDasharray="7 4"/>
      {/* Car (top view) */}
      <rect x="107" y="105" width="80" height="46" rx="8" fill={WALL} stroke={LN} strokeWidth="1.5"/>
      <rect x="114" y="112" width="30" height="14" rx="3" fill="#0A1628"/>
      <rect x="148" y="112" width="30" height="14" rx="3" fill="#0A1628"/>
      <rect x="109" y="105" width="12" height="10" rx="2" fill="#050C18"/>
      <rect x="163" y="105" width="12" height="10" rx="2" fill="#050C18"/>
      <rect x="109" y="141" width="12" height="10" rx="2" fill="#050C18"/>
      <rect x="163" y="141" width="12" height="10" rx="2" fill="#050C18"/>
      {/* EV marker */}
      <circle cx="89" cy="135" r="9" fill={GOLD} opacity="0.8"/>
      <text x="89" y="139" textAnchor="middle" fill={BG} fontSize="10" fontWeight="900" fontFamily="sans-serif">⚡</text>
      <Ann cx="147" cy="128" n={1} r={26}/>
      <Ann cx="43" cy="52" n={2} r={18}/>
    </CardSVG>
  )
}

function EVRoute() {
  return (
    <CardSVG header="かんたん見積もり見本（配線経路）"
             foot1="①分電盤のある部屋　②駐車場までの経路"
             foot2="壁・廊下・外壁など経路全体がわかるよう撮影ください">
      <rect x="0" y="20" width="260" height="145" fill={BG}/>
      <rect x="0" y="20" width="260" height="15" fill="#0A1628"/>
      <line x1="0" y1="35" x2="260" y2="35" stroke={LN} strokeWidth="1.5"/>
      {/* Indoor room */}
      <rect x="10" y="45" width="90" height="105" rx="3" fill="#0A1628" stroke={LN} strokeWidth="1.5"/>
      {/* Panel inside */}
      <rect x="20" y="60" width="38" height="55" rx="3" fill={WALL} stroke={LN} strokeWidth="1.5"/>
      {[0,1,2,3].map(i => (
        <rect key={i} x={24} y={68 + i * 11} width="30" height="8" rx="1" fill="#0A1628"/>
      ))}
      {/* Wall */}
      <rect x="100" y="45" width="15" height="105" fill="#0A1628" stroke={LN} strokeWidth="1.5"/>
      {/* Garage/outside */}
      <rect x="115" y="45" width="130" height="105" rx="3" fill="#091520" stroke={LN} strokeWidth="1.5"/>
      {/* EV charger */}
      <rect x="218" y="65" width="22" height="38" rx="3" fill={WALL} stroke={GOLD} strokeWidth="1.5"/>
      <circle cx="229" cy="84" r="7" fill={GOLD} opacity="0.8"/>
      <text x="229" y="88" textAnchor="middle" fill={BG} fontSize="10" fontWeight="900" fontFamily="sans-serif">⚡</text>
      {/* Car */}
      <rect x="126" y="95" width="75" height="40" rx="6" fill={WALL} stroke={LN} strokeWidth="1" opacity="0.5"/>
      {/* Cable route dashed line */}
      <path d="M58 87 L100 87 L115 87 L205 87"
            stroke={RED} strokeWidth="2.5" fill="none" strokeDasharray="8 4" strokeLinecap="round"/>
      <polygon points="205,83 215,87 205,91" fill={RED}/>
      <text x="158" y="82" textAnchor="middle" fill={RED} fontSize="8" fontWeight="700" fontFamily="sans-serif">配線ルート</text>
      <Ann cx="39" cy="87" n={1} r={18}/>
      <Ann cx="218" cy="84" n={2} r={17}/>
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
      <rect x="0" y="20" width="260" height="145" fill={BG}/>
      <rect x="0" y="20" width="260" height="15" fill="#0A1628"/>
      <line x1="0" y1="35" x2="260" y2="35" stroke={LN} strokeWidth="1.5"/>
      {/* Header beam */}
      <rect x="28" y="35" width="204" height="18" fill={WALL} stroke={LN} strokeWidth="1.5"/>
      {/* Side rails */}
      <rect x="23" y="35" width="10" height="120" rx="2" fill={LN} opacity="0.7"/>
      <rect x="227" y="35" width="10" height="120" rx="2" fill={LN} opacity="0.7"/>
      {/* Shutter slats */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x="33" y={53 + i * 11} width="194" height="10" rx="0"
              fill={i % 2 === 0 ? WALL : '#16304A'} stroke={LN} strokeWidth="0.5"/>
      ))}
      {/* Bottom bar */}
      <rect x="28" y="141" width="204" height="7" rx="2" fill={LN}/>
      {/* Handle */}
      <rect x="113" y="132" width="34" height="8" rx="3" fill={LN}/>
      <Ann cx="130" cy="90" n={1} r={24}/>
    </CardSVG>
  )
}

function SmartLabel() {
  return (
    <CardSVG header="かんたん見積もり見本（型番ラベル）"
             foot1="①型番　②メーカー名"
             foot2="型番・メーカーを鮮明に撮影ください（互換性確認に使います）">
      <rect x="0" y="20" width="260" height="145" fill={BG}/>
      <rect x="0" y="20" width="260" height="15" fill="#0A1628"/>
      <line x1="0" y1="35" x2="260" y2="35" stroke={LN} strokeWidth="1.5"/>
      {/* Label plate */}
      <rect x="45" y="46" width="170" height="105" rx="6" fill="#f0ece0" opacity="0.95"/>
      <rect x="45" y="46" width="170" height="22" rx="6" fill="#e0dcd0"/>
      <text x="130" y="62" textAnchor="middle" fill="#1a1a1a" fontSize="12"
            fontWeight="900" fontFamily="sans-serif">SANWA SHUTTER</text>
      <line x1="55" y1="72" x2="205" y2="72" stroke="#bbb" strokeWidth="1.5"/>
      <text x="58" y="86" fill="#1a1a1a" fontSize="9.5" fontFamily="sans-serif">型番: SS-T200-W</text>
      <text x="58" y="100" fill="#1a1a1a" fontSize="9" fontFamily="sans-serif">定格: AC100V 50/60Hz</text>
      <text x="58" y="113" fill="#1a1a1a" fontSize="9" fontFamily="sans-serif">製造年: 2015年</text>
      <text x="58" y="126" fill="#1a1a1a" fontSize="8.5" fontFamily="sans-serif">S/N: 20150312-001A</text>
      {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
        <rect key={i} x={58 + i * 9} y={133} width={i % 3 === 0 ? 4 : 6} height={9} fill="#333"/>
      ))}
      <Ann cx="120" cy="100" n={1} r={22}/>
      <Ann cx="130" cy="60" n={2} r={14}/>
    </CardSVG>
  )
}

function SmartContext() {
  return (
    <CardSVG header="かんたん見積もり見本（周囲状況）"
             foot1="①機器周辺の配線・コンセント"
             foot2="施工方法の検討に使います。周囲全体がわかるよう撮影ください">
      <rect x="0" y="20" width="260" height="145" fill={BG}/>
      <rect x="0" y="20" width="260" height="15" fill="#0A1628"/>
      <line x1="0" y1="35" x2="260" y2="35" stroke={LN} strokeWidth="1.5"/>
      {/* Control box */}
      <rect x="48" y="55" width="82" height="68" rx="5" fill={WALL} stroke={LN} strokeWidth="2"/>
      <text x="89" y="82" textAnchor="middle" fill={TXT} fontSize="8" fontFamily="sans-serif">シャッター</text>
      <text x="89" y="94" textAnchor="middle" fill={TXT} fontSize="8" fontFamily="sans-serif">制御盤</text>
      {/* Wiring */}
      <line x1="130" y1="89" x2="178" y2="89" stroke={LN} strokeWidth="3" strokeLinecap="round"/>
      <line x1="130" y1="89" x2="130" y2="140" stroke={LN} strokeWidth="3" strokeLinecap="round"/>
      {/* Outlet */}
      <rect x="178" y="73" width="36" height="40" rx="4" fill={WALL} stroke={LN} strokeWidth="1.5"/>
      <rect x="184" y="80" width="10" height="13" rx="2" fill="#0A1628"/>
      <rect x="198" y="80" width="10" height="13" rx="2" fill="#0A1628"/>
      <circle cx="196" cy="105" r="6" fill="#0A1628"/>
      {/* Conduit */}
      <rect x="126" y="118" width="8" height="30" rx="2" fill={LN} opacity="0.7"/>
      <Ann cx="130" cy="89" n={1} r={21}/>
    </CardSVG>
  )
}

/* ═══════════════════════════════════════════════
   DATA MAP
═══════════════════════════════════════════════ */
const CARDS = {
  aircon: [
    { num: 1, title: '設置予定の壁面（室内）',  Illus: AirconIndoor  },
    { num: 2, title: '屋外の室外機・配管出口', Illus: AirconOutdoor },
    { num: 3, title: '設置希望の壁面（全体）', Illus: AirconWall    },
  ],
  bouhan: [
    { num: 1, title: '設置場所の見上げ写真',    Illus: BouhanMount  },
    { num: 2, title: '最寄りのコンセント・配電盤', Illus: BouhanPower  },
    { num: 3, title: 'Wi-Fiルーターの設置場所', Illus: BouhanRouter },
  ],
  ev: [
    { num: 1, title: '分電盤の全体写真',         Illus: EVPanel      },
    { num: 2, title: '駐車場の全景',              Illus: EVParking    },
    { num: 3, title: '分電盤から駐車場までの経路', Illus: EVRoute      },
  ],
  smart: [
    { num: 1, title: 'スマート化したい機器の全体', Illus: SmartDevice  },
    { num: 2, title: '型番ラベルのアップ',         Illus: SmartLabel   },
    { num: 3, title: '機器周辺の配線・コンセント', Illus: SmartContext },
  ],
}

/* ═══════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════ */
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
