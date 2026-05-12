import "./App.css";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./pages/CheckOutPage"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
         <Route index  element ={ <HomePage/>}/>
         <Route path="/checkout" element ={<CheckOutPage/>}/>
      </Routes>
  
    </>
  );
}

export default App;
