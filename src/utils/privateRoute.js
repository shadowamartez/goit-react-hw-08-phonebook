import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/selectors';
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ path, ...props }) {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  return (
    <Route
      path={path}
      element={currentUser ? props.children : navigate('/login')}
    />
  );
}

export default PrivateRoute;
