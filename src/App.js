import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
function App() {
  return (
    <Router>
      <Slider />
      <Header />
    </Router>
  );
}

export default App;
