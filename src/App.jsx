import Header from './components/Header'
import Hero from './components/Hero'
import PopularProducts from './components/Popular-products'
import Services from './components/Services'
import SupplyKnowledge from './components/Supply-knowledge'

function App() {

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <PopularProducts />
      < Services />
      <SupplyKnowledge />
    </div>  
  )
}

export default App
