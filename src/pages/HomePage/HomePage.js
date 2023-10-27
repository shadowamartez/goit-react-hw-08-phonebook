import React from 'react';
import { Outlet } from 'react-router-dom';
import {StyledHomePage} from './HomePage.styled'
import { StyledHeading } from './HomePage.styled';
import { StyledParagraph } from './HomePage.styled';

function HomePage() {
  return (
    <StyledHomePage>
      <StyledHeading>Welcome!</StyledHeading>
      <StyledParagraph>This is our main page.</StyledParagraph>
      <Outlet />
    </StyledHomePage>
  );
}

export default HomePage;
