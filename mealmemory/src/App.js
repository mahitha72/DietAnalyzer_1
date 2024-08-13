
import './App.css';
import BackgroundVideo from './Components/BackgroundVideo';
import Footer from './Components/Footer';
import ImageGallery from './Components/ImageGallery';
// import Medium from './Components/Medium';
import Nav from './Components/Nav';

function App() {
  return (
    <>
   <div>
  <BackgroundVideo/>
  {/* <Medium/> */}
   <Nav/>
   <ImageGallery/>
   <Footer/>
   </div>
   </>
  );
}

export default App;
