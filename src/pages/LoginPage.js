import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../utils/api';
import { Outlet } from 'react-router-dom';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <b> </b>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <b> </b>
      <button onClick={handleLogin}>Login</button>
      <Outlet />
    </div>
  );
}

export default LoginPage;
