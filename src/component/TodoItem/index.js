export function TodoItem({children, onComplete, onDelete}){
    return <li className="item">
            <button onClick={()=>onComplete(children.text)}>✅</button>
           {children.text} - {children.completed?"Done!":"Pending"}
            <button onClick={()=>onDelete(children.text)}>❌</button>
        </li>
}