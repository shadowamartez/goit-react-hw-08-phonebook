import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../utils/api';
import UserMenu from './UserMenu';
import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from '../utils/privateRoute';
import ContactsPage from '../pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <UserMenu />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<PrivateRoute />}>
            <Route index element={<ContactsPage />} />
          </Route>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <GlobalStyles />
      </div>
    </Router>
  );
}

export default App;

