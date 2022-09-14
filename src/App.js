import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './views/cart';
import OutOfIndia from './views/outOfIndia';
import ContactForm from './views/contactForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Cart />} />
      <Route path='out-of-india' element={<OutOfIndia />} />
      <Route path='contact-form' element={<ContactForm/>}/>
    </Routes>
  );
}

export default App;
