import { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext';

export function TodoForm() {
    const {
        addTask,
        setOpenModal
    } = useContext(TodoContext);

    const [strign, setString] = useState('')
    const toggle = (str) => {
        setOpenModal(prevState => !prevState)
    }

    const send = () => {
        if (strign.length < 4) return
        addTask(strign)
        toggle()
    }

    const onChange = (e) => {
        setString(e.target.value)
    }
    return <>
        <button onClick={toggle}>❌</button>
        <input value={strign} onChange={onChange}></input>
        <button onClick={send}>Add</button>
    </>
}