import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar, Home, About, Footer, Project, Articles } from './components'

const App = () => {
  return (
    <Router>
      <div className='relative z-0 min-h-screen w-full bg-light'>
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/articles' element={<Articles />} />
          </Routes>
          {/* <Home /> */}
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
