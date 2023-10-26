import React from 'react';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>This is our main page.</p>
      <Outlet />
    </div>
  );
}

export default HomePage;
