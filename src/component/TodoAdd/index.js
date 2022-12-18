import {useContext} from 'react'
import { TodoContext } from '../TodoContext';

export function TodoAdd() {
    const { setOpenModal } = useContext(TodoContext);
    const toggle = (str) => {
        setOpenModal(prevState => !prevState)
    }
    return <button className="add-modal" onClick={toggle}>Add task</button>
}