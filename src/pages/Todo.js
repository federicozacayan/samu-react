import { Modal } from '../component/Modal';
import { TodoAdd } from '../component/TodoAdd';
import { TodoImput } from '../component/TodoImput';
import { Loading, TodoList } from '../component/TodoList';
import { TodoForm } from '../component/TodoForm';
import { useContext } from "react";
import { TodoContext } from '../component/TodoContext';

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