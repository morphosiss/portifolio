import './App.css'
import Equipa from './components/Equipa'
import FocoSection from './components/Foco'
import Footer from './components/Footer'
import Header from './components/Header'
import Services from './components/Services'

function App() {
  return (
    <>
    <Header />
    <main>
      <FocoSection />
      <Services />
      <Equipa />
    </main>
    <Footer />
    </>
  )
}

export default App
