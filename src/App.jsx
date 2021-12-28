import Navbar from './Components/Navbar/Navbar';
import Body, { Background } from './AppStyles';
import Home from './Components/Home/Home';
import TermsOfService from './Components/TOF/TermsOfService';
import Faqs from './Components/Faqs/Faqs';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import ArtWork from './Components/Portfolio/ArtWork';
import { artwork, vtuber, emotes } from './Portfolio'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  const [offsetY, setOffsetY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <Router>
      <Body className="App">
        <Background src='./Images/Background.png' style={{
          
          transform: `translateY(${offsetY * 0.6}px)`,
          }}>
            <img src='./Images/Background.png' alt="" />
          </Background>
          <Navbar />
        <div style={{flex: "1"}}>
          <Routes>
            <Route path='/Emikukis' element={<Home />} />
            <Route path='/Emikukis/tos' element={<TermsOfService />} />
            <Route path='/Emikukis/faqs' element={<Faqs />} />
            <Route path='/Emikukis/services' element={<Services />} />
            <Route path='/Emikukis/artwork' element={
              <ArtWork gallery={artwork}>
                <h1>Client Work</h1>
              </ArtWork>
            }/>
            <Route path='/Emikukis/vtuber' element={
              <ArtWork gallery={vtuber}>
                <h1>Client Work</h1>
              </ArtWork>
            }/>
             <Route path='/Emikukis/emotes' element={
              <ArtWork gallery={emotes}>
                <h1>Client Work</h1>
              </ArtWork>
            }/>
          </Routes>
          {window.location.pathname === '/Emikukis' ? null :
            <Footer />
          }
        </div>
      </Body>
    </Router>
  );
}

export default App;
