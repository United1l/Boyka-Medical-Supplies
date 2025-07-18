import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Store from './components/Store'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>  
  )
}

export default App
