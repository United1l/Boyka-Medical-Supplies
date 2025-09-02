import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Store from './components/Store'
import About from './components/About'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>  
  )
}

export default App
