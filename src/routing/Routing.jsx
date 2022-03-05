
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';
function Routing() {
  return (
    <Router>
      <Slider />
      <Header />
    </Router>
  );
}

export default Routing;
