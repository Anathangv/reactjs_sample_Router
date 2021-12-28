import {Navbar} from './components/Navbar'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {About} from './pages/About/index'
import {ContactUs} from './pages/ContactUs/index'
import {Products} from './pages/Products/index'
import {NotFoundPage} from './pages/Error/index'
import {Home} from './pages/Home/index'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<NotFoundPage />} />
          {/***in case of not found and redirect to another page**
           <Route path="*" element={<Navigate to="/"/>} />*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
