import { NavBar } from '../NavBar';
import { Modal } from '../Modal';
import { TodoAdd } from '../TodoAdd';
import { TodoImput } from '../TodoImput';
import { Loading, TodoList } from '../TodoList';
import { useContext } from "react";
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';

export function AppUI() {
    const {
        openModal,
        loading
    } = useContext(TodoContext);
    return <>
        <NavBar />
        <TodoImput />
        {loading?<Loading/>:<TodoList />}
        <TodoAdd />
        {
            openModal &&
            <Modal>
                <TodoForm />
            </Modal>
        }
    </>
}