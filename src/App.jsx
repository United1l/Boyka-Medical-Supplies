import Header from './components/Header'
import Hero from './components/Hero'
import PopularProducts from './components/PopularProducts'
import Services from './components/Services'
import Customers from './components/Customers'
import Footer from './components/Footer'

function App() {

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <PopularProducts />
      <Services />
      <Customers />
      <Footer />
    </div>  
  )
}

export default App
