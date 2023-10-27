import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { StyledLink } from './Navigation.styled';
import { StyledNavigationContainer } from './Navigation.styled';
import UserMenu from 'components/UserMenu/UserMenu';

function Navigation() {
  const isAuthenticated = useSelector(selectToken);

  return (
    <nav>
      <ul>
        {isAuthenticated ? (
          <UserMenu/>
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
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;