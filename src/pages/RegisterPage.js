import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../utils/api';
import { Outlet } from 'react-router-dom';

function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    dispatch(registerUser({ name, email, password }));
  }

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <b> </b>
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
      <button onClick={handleRegister}>Register</button>
      <Outlet />
    </div>
  );
}

export default RegisterPage;
