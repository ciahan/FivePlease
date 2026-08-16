import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Subjects from './pages/Subjects.jsx'
import Mission from './pages/Mission.jsx'
import Team from './pages/Team.jsx'
import './App.css'

// to-do:
// 1. make subunits
// 2. fix scrolling issue between pages
// 3. make the plateform a category pill thing that provides additional information when you hover over it
// 4. NoteStyle?

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subjects/:subjectSlug" element={<Subjects />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App