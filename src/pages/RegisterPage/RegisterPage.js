import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../utils/api';
import { Outlet } from 'react-router-dom';
import { StyledPageContainer } from './RegisterPage.styled';
import { Title } from './RegisterPage.styled';

function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    dispatch(registerUser({ name, email, password }));
  }

  return (
    <StyledPageContainer>
      <Title>Register</Title>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handleRegister}>Register</button>
      <Outlet />
    </StyledPageContainer>
  );
}

export default RegisterPage;
