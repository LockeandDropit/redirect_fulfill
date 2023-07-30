import { useState } from 'react'
import { Route, Routes} from "react-router-dom"

import './App.css'
import RedirectOnboarding from './pages/RedirectOnboarding'
import RedirectPayment from './pages/RedirectPayment'

function App() {



  return (
    <Routes>
    <Route path="/onboarding" element={<RedirectOnboarding />} />
    <Route path="/payment" element={<RedirectPayment/>}/>

   </Routes>
  )
}

export default App
