import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { logoutUser } from 'utils/api';
import { StyledLink } from './Navigation.styled';
import { StyledNavigationContainer } from './Navigation.styled';

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
            <StyledNavigationContainer>
              <li>
                <StyledLink to="/login">Login</StyledLink>
              </li>
              <li>
                <StyledLink to="/register">Register</StyledLink>
              </li>
          </StyledNavigationContainer>
          <p>Please login or register.</p>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;