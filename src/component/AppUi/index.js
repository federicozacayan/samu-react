import { NavBar } from '../NavBar';
import { Route, Routes } from 'react-router-dom';
// import { Home } from '../../pages/Home';
import { Todo } from '../../pages/Todo';
import { Pepe } from '../../pages/Pepe';
import { NotFound } from '../../pages/NotFound';
import { Account } from '../Account';
import { AuthProvider } from '../useAuth';
import { ProtectedRoute } from './ProtectedRoute';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../../pages/Home'))

export function AppUI() {
    return (
        <AuthProvider>
            <Suspense fallback={<div>loading...</div>}>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Todo />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/account' element={<Account />}></Route>
                    <Route path='/pepe' element={<ProtectedRoute><Pepe /></ProtectedRoute>}></Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </AuthProvider>
    )
}