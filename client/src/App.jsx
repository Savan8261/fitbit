import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Class from '../pages/Class'
import TrainerPage from '../pages/Trainer'
import Contact from '../pages/Contact'
import DashboardPage from '../components/DashboardPage'
import DashBoard from '../pages/DashBoard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='class' element={<Class />} />
        <Route path='trainers' element={<TrainerPage />} />
        <Route path='contact' element={<Contact />} />
        <Route path='dashboard' element={<DashBoard />}>
          <Route path='' element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
