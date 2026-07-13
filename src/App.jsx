import Header from './components/Header'
import Banner from './components/Banner'
import Products from './components/Products'
import Delights from './components/Delights'
import Satisfaction from './components/Satisfaction'
import Tradition from './components/Tradition'
import Serve from './components/Serve'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="wrapper min-h-screen">
      <Header />
      <main className="main">
        <Banner />
        <Products />
        <Delights />
        <Satisfaction />
        <Tradition />
        <Serve />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
