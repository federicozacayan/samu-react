import { NavBar } from '../NavBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Todo } from '../../pages/Todo';
import { Pepe } from '../../pages/Pepe';
import { NotFound } from '../../pages/NotFound';




export function AppUI() {

    return <>
        <NavBar />
        <Routes>
            <Route path='/' element={<Todo />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/pepe' element={<Pepe />}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>

    </>
}