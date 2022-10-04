import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import Hero from "./components/Hero"
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    </div>
  );
}

export default App;
