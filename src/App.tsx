import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Navbar, WhatsAppButton } from './components/Layout'
import Home from './pages/Home'
import { AboutPage, ContactPage, LegalPage, NotFound, PortfolioPage, ServicesPage } from './pages/Pages'

function App(){const location=useLocation();const reduced=useReducedMotion();return <div className="min-h-screen overflow-x-clip"><Navbar/><AnimatePresence mode="wait"><motion.div key={location.pathname} initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={reduced?{}:{opacity:0,y:-8}} transition={{duration:.2}}><Routes location={location}><Route path="/" element={<Home/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/portfolio" element={<PortfolioPage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/privacy" element={<LegalPage/>}/><Route path="/terms" element={<LegalPage terms/>}/><Route path="*" element={<NotFound/>}/></Routes></motion.div></AnimatePresence><Footer/><WhatsAppButton/></div>}
export default App
