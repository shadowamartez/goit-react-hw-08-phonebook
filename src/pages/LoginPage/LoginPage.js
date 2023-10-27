import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../utils/api';
import { Outlet } from 'react-router-dom';
import { Title } from './LoginPage.styled';
import { StyledPageContainer } from './LoginPage.styled';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  }

  return (
    <StyledPageContainer>
      <Title>Login</Title>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <Outlet />
    </StyledPageContainer>
  );
}

export default LoginPage;
