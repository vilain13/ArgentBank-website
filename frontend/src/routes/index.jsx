import React from 'react';
import { Provider } from 'react-redux';
import store  from '../store/store';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Header from '../components/header';
import Footer from '../components/footer';
import Signin from '../pages/signin';
import Profile from '../pages/profile';




function Routage() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/profile" element={<Profile />} />
          </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default Routage;