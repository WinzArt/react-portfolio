import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './components'
import { Home, About, Project, Articles } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/articles' element={<Articles />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
