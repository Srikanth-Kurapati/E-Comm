import logo from './logo.svg';
import './App.css';
import { products } from './Warehouse';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Mobiles from './Links/Mobiles';
import HomeAppliances from './Links/HomeAppliances';
import Vouchers from './Links/Vouchers';
import Gifts from './Links/Gifts';
import Cart from './Components/Cart';
import { useState } from 'react';
import { FaToggleOn } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';



function App() {

  const [mode,setMode] = useState(false)

  function handleClick(){
    setMode(prev => !prev)
    console.log(mode);
  }

  return (
      <div className={`App bg-${mode?'secondary':'white'} text-${mode?'white':'cdhcvh'} position-relative`}>

        <h1 className={`text-${mode?'warning':'success'} h1'`}> e- Comm </h1>

        <button onClick={handleClick} className={`position-absolute top-0 end-0 my-1 px-2 h4 bg-${mode?'success':'white'}` }data-tooltip-content='change theme' data-tooltip-id='theme' > 
          <FaToggleOn/> 
        </button>  <ReactTooltip id='theme' />

        <Router>
          <Navbar/>
        <Routes>

          <Route path='/' element= {<Home/>} />
          <Route path='/about' element= {<About/>} />

          <Route path='mobiles' element={<Mobiles/>} />
          <Route path='/home Appliances' element={<HomeAppliances/>} />
          <Route path='/vouchers' element={<Vouchers/>} />
          <Route path='/gifts' element={<Gifts/>} />
          <Route path='/myCart' element={<Cart/>} />
          
      </Routes>
      
      </Router>
      </div>
  
  );
}

export default App;
