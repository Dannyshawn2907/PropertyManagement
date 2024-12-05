import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import Properties from './pages/properties/Properties';
import PropertyDeails from './pages/propertyDeatils/PropertyDeails';
import ServicesPage from './pages/servicesPage/ServicesPage';
import Contact from './pages/contact/Contact';




const App = () => {
  return (
    <div>
      <BrowserRouter > 
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/propertyDeails" element={<PropertyDeails />} />
        <Route path="/servicespage" element={<ServicesPage/>}/>
        <Route path='contact' element={<Contact />} />
       
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;

