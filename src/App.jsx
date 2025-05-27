import Header from './components/Header'
import Hero from './components/Hero'
import FeauturedProducts from './components/Featured-products'

function App() {

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <FeauturedProducts />
    </div>  
  )
}

export default App
