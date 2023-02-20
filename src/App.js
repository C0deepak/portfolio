import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import './pages/styles.css'
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
