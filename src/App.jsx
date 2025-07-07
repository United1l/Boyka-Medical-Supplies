import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Shop from './components/Shop'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>  
  )
}

export default App
