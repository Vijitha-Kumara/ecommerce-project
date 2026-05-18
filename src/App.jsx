import "./App.css";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./pages/CheckOutPage"
import Tracking from "./pages/Tracking"
import Orders from "./pages/Orders"

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
         <Route index  element ={ <HomePage/>}/>
         <Route path="/checkout" element ={<CheckOutPage/>}/>
         <Route path="/Tracking" element ={ <Tracking/>}/>
         <Route path="/Orders" element ={ <Orders/>}/>
      </Routes>
  
    </>
  );
}

export default App;
