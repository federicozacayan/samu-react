import { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = createContext()


function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading
    } = useLocalStorage('TODOS_V1', [
        {text:'fade', completed:false},
        {text:'fede', completed:false},
        {text:'fide', completed:false},
        {text:'fode', completed:false},
        {text:'fude', completed:false},
        {text:'fedo', completed:false},
    ]);

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const addTask = (text) =>{
        const index = todos.findIndex(item => item.text === text)
        if (index>-1) return
        const newList = [...todos]
        newList.push({text, completed:false})
        saveTodos(newList);
    }

    const onComplete = (text) => {
        const index = todos.findIndex(item => item.text === text)
        const newList = [...todos]
        newList[index].completed = true
        saveTodos(newList);
    }

    const onDelete = (text) => {
        const index = todos.findIndex(item => item.text === text)
        const newList = [...todos]
        newList.splice(index, 1);
        saveTodos(newList);
    }

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }
    

    const value = {
        onComplete,
        onDelete,
        completedTodos,
        totalTodos,
        searchedTodos,
        searchValue,
        setSearchValue,
        openModal, 
        setOpenModal,
        addTask,
        loading
    }

    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    )
}
export { TodoContext, TodoProvider };