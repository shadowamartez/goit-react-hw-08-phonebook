import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../utils/api';
import { selectCurrentUser } from '../redux/selectors';

function UserMenu() {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
        <div>
        {currentUser ? (
            <div>
            <p>{currentUser.email}</p>
            <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <p>Please login or register.</p>
        )}
        </div>
    );
}

export default UserMenu;
