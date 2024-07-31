
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Class from '../pages/Class'
import TrainerPage from '../pages/Trainer'
import Contact from '../pages/Contact'
import DashboardPage from '../components/DashboardPage'
import DashBoard from '../pages/DashBoard'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import { AuthProvider } from '../context/AuthProvider'
import AdminPageGuard from './shared/guards/AdminPageGuard'
import AdminAuthGuard from './shared/guards/AdminAuthGuard'
import 'react-toastify/dist/ReactToastify.css';
import LegalAgreements from "../components/LegalAgreements";
import FAQs from "../components/FAQs";
import Help from "../components/Help";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='class' element={<Class />} />
        <Route path='trainers' element={<TrainerPage />} />
        <Route path='contact' element={<Contact />} />
        <Route path='signin' element={<AdminPageGuard><Signin /></AdminPageGuard>} />
        <Route path='signup' element={<AdminPageGuard><Signup /></AdminPageGuard>} />
        <Route path="legal-agreements" element={<LegalAgreements />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="help" element={<Help />} />

        <Route path='dashboard' element={<AdminAuthGuard><DashBoard /></AdminAuthGuard>}>
          <Route path='' element={<DashboardPage />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
