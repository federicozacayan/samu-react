export function TodoAdd({ setOpenModal }) {
    const toggle = (str) => {
        setOpenModal(prevState => !prevState)
    }
    return <button className="add-modal" onClick={toggle}>Add task</button>
}