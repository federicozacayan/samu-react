import { Navigate } from 'react-router-dom';
import { useAuth } from '../useAuth';


export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth()
    console.log(isAuthenticated);
    if (!isAuthenticated) return <Navigate to='/login' />
    return children
}