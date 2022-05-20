import { BrowserRouter ,Routes, Route, } from "react-router-dom";
import { Home } from './components';
import { About } from './components';
import { Navbar } from './components';
import { Footer } from './components';
import { Gallery } from './components';
import { Service } from './components';
//import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/service" element={<Service />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
