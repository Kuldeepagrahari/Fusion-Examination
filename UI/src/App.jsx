import React from 'react'
import {Route, Routes} from "react-router-dom"
import SubmitGardes from './pages/SubmitGrades/SubmitGardes'
import VerifyGrades from './pages/VerifyGrades/VerifyGrades'
import Announcement from './pages/Announcement/Announcement'
import GenerateTranscript from './pages/GenerateTranscript/GenerateTranscript'
import SeatingPlan from "./pages/SeatingPlan/SeatingPlan"
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/submit-grades' element={<SubmitGardes/>}></Route>
        <Route path='/verify-grades' element={<VerifyGrades/>}></Route>
        <Route path='/announcement' element={<Announcement/>}></Route>
        <Route path='/generate-transcript' element={<GenerateTranscript/>}></Route>
        <Route path='/seating-plan' element={<SeatingPlan />}></Route>
      </Routes>
    </div>
  )
}

export default App
