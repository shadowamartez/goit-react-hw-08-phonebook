import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../utils/api'; 
import  UserMenu  from './UserMenu'; 
import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter as Router }  from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from '../utils/privateRoute';
import Home from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';
import {Route, Routes} from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <h1>Phonebook</h1>
        <UserMenu /> 
        <Routes>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/contacts" element={<PrivateRoute />}>
            <ContactsPage />
          </Route>
          <Route path="/" component={Home} />
        </Routes>
        <GlobalStyles />
      </div>
    </Router>
  );
}

export default App;
