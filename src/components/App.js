import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../utils/api';
import UserMenu from './UserMenu';
import { GlobalStyles } from './GlobalStyles';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ContactsPage from '../pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { selectToken } from '../redux/selectors';
import Navigation from './Navigation';
import { PrivateRoute } from './PrivatRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { SharedLayout } from './SharedLayout';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <UserMenu />
      <Navigation />
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
