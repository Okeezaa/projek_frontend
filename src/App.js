import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage handleLogin={handleLogin} loggedIn={loggedIn} />} />
        <Route path="/home" element={<HomePage loggedIn={loggedIn} />} />
      </Routes>
    </Router>
  );
};

export default App;
