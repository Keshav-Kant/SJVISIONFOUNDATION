import './App.css';
import DetailBar from './Components/DetailBar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import SecondSection from './Components/SecondSection';
import ThirdPage from './Components/ThirdPage';
import Navbar from './Pages/Navbar';
const whatsappIcon = require('./Images/whatsapp.png')
function App() {
  return (
    <div style={{overflow:'hidden'}}>
    <DetailBar />
    <div style={{display:'flex', flexDirection:'row', gap:12,position: 'fixed',bottom: 50,zIndex:2,paddingRight:15,right: 0}}>
    <a href="https://api.whatsapp.com/send/?phone=%2B917992424088&text&type=phone_number&app_absent=0" target='_blank' rel="noreferrer">
    <img src={whatsappIcon} alt="" style={{}}/>
    </a>
    <a href="https://www.google.com/maps/dir//Rd+Number+2,+near+Eye+Hospital,+Juran+Chapra,+Brahmapura,+Muzaffarpur,+Bihar+842001/@26.1298644,85.2932449,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39ed11e9002d4c4d:0x3e74f21ee54cfdc0!2m2!1d85.3756464!2d26.1298878?entry=ttu" target='_blank' rel="noreferrer">
    <img src={require('./Images/google-map.png')} alt="" style={{}}/>
    </a>
    </div>
     <Navbar />
     <HomePage />
     <SecondSection />
     <ThirdPage />
     <Footer />
    </div>
  );
}

export default App;
