import { Modal } from '../Modal';
import { TodoAdd } from '../TodoAdd';
import { TodoImput } from '../TodoImput';
import { Loading, TodoList } from '../TodoList';
import { TodoForm } from '../TodoForm';
import { useContext } from "react";
import { TodoContext } from '../TodoContext';

export const Todo = () => {
    const {
        openModal,
        loading
    } = useContext(TodoContext);
    return <>
        <TodoImput />
        {loading ? <Loading /> : <TodoList />}
        <TodoAdd />
        {
            openModal &&
            <Modal>
                <TodoForm />
            </Modal>
        }
    </>
}