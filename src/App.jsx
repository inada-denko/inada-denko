import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home      from './pages/Home'
import LP_Bouhan from './pages/LP_Bouhan'
import LP_EV     from './pages/LP_EV'
import LP_Aircon from './pages/LP_Aircon'
import LP_Smart  from './pages/LP_Smart'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/bouhan" element={<LP_Bouhan />} />
        <Route path="/ev"     element={<LP_EV />} />
        <Route path="/aircon" element={<LP_Aircon />} />
        <Route path="/smart"  element={<LP_Smart />} />
      </Routes>
    </BrowserRouter>
  )
}
