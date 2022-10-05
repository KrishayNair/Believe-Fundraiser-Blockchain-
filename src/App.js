import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './components/Home';
import Organizations from './components/Organizations';
import Gallery from "./components/Gallery"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App(){
  return (
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path= "about" element={ <Organizations />} />
     <Route path= "organizations" element ={<Organizations />} />
     <Route path= "Funds" element ={<Organizations />} />
     <Route path= "Gallery" element ={<Gallery />} />
     <Route path= "ContactUs" element ={<Organizations />} />
     </Routes>
  </BrowserRouter>
  );
}

export default App;
