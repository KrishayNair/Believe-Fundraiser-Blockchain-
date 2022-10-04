import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import Hero from "./components/Hero"
import Features from './components/Features';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Features/>
    </div>
  );
}

export default App;
