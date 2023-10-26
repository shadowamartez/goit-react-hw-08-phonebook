import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../utils/api';
import { selectIsLoggedIn } from '../redux/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </div>
      {isLoggedIn ? (
        <div>
          <button onClick={() => {dispatch(logoutUser());}}>Log out</button>
        </div>
      ) : (
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Sign In</Link>
        </div>
      )}
    </header>
  );
};