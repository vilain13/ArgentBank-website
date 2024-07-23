import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Header from '../components/header';
import Footer from '../components/footer';
import Signin from '../pages/signin';
import Profile from '../pages/profile';




function Routage() {
  return (
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/profile" element={<Profile />} />
          </Routes>
        <Footer />
      </Router>
  );
}

export default Routage;