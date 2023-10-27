import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../utils/api';
import { selectCurrentUser } from '../../redux/selectors';
import { Layout } from './UserMenu.styled';
import { Email } from './UserMenu.styled';

function UserMenu() {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
        <div>
        {currentUser ? (
            <Layout>
            <Email>{currentUser.email}</Email>
            <button onClick={handleLogout}>Logout</button>
            </Layout>
        ) : (
            <p>Please login or register.</p>
        )}
        </div>
    );
}

export default UserMenu;
