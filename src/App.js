import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroLanding from './components/HeroLanding';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Skillset from './components/Skillset';
import Projects from './components/Projects';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <main className='max-w-[1920px] mx-auto' >
      <ToastContainer />
      <section className='page-wrapper'>
        <Navbar />
      </section>
      <div className='md:pb-[300px] pb-[50px] ovf'>
        <HeroLanding />
      </div>
      <Skillset />
      <Projects />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
