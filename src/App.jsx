import "./App.css";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./pages/checkOut/CheckOutPage";
import Tracking from "./pages/Tracking";
import Orders from "./pages/Orders";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/orders" element={<Orders />} /> 
    </Routes>
  );
}

export default App;
