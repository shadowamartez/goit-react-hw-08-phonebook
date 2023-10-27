import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { logoutUser } from 'utils/api';

function Navigation() {
  const isAuthenticated = useSelector(selectToken);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <button onClick={handleLogout}>logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;