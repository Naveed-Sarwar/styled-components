import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Header from './components/header/Header';
import SignIn from './pages/signin/SignIn';
import Routing from './routing/Routing';
function App() {
  return (
    <div>
      {/* <Routing /> */}
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Routing />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
