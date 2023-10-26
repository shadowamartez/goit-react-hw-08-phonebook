import React, { Suspense } from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
    return (
        <div>
        <Header />
        <div>
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            </Suspense>
        </div>
        </div>
    );
};