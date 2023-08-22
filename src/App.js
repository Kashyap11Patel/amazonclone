import React, { useEffect } from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{}, dispatch] = useStateValue();
  console.log(process.env);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path='/checkout'
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path='/login'
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
