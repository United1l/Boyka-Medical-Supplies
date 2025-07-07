import Header from './Header'
import Hero from './Hero'
import PopularProducts from './PopularProducts'
import Services from './Services'
import Customers from './Customers'
import Footer from './Footer'

const Home = () => {
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

export default Home
