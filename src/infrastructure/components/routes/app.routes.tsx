import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('../../../features/home/page/home.page'));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="" element={<Home></Home>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
