import React from 'react';
import { useAuth } from '../context/auth-context';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRouterAdmin = () => {
    const { auth, loading, user } = useAuth();
    if (loading) {
        return <div className="w-full h-full flex justify-center items-center">
             <p>Cargando...</p>
        </div>
    }

    if (!auth || user.role !== 'Admin') {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRouterAdmin;