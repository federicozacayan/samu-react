import {useContext} from 'react'
import { TodoContext } from '../TodoContext';

export function TodoImput() {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
      };
    
    return (
        <>
            <input placeholder='todo task'
            value={searchValue}
            onChange={onSearchValueChange}></input>
        </>
    )
}