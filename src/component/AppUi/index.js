import { Header } from '../Header';
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
        setOpenModal,
        loading
    } = useContext(TodoContext);
    return <>
        <Header />
        <TodoImput />
        {loading?<Loading/>:<TodoList />}
        <TodoAdd setOpenModal={setOpenModal} />
        {
            openModal &&
            <Modal>
                <TodoForm />
            </Modal>
        }
    </>
}