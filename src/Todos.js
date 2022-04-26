import { useStoreState } from "easy-peasy";
function Todos(){
    const todos=useStoreState((state)=>state.todos);
    const names=useStoreState((state)=>state.names);
    return(
        <div className="App">
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>Fruit : {todo}</li>
            ))}
        </ul>
        <ol>
            {names.map((name,i)=>(
                <li key={i}>Name :  {name}</li>
            ))}
        </ol>
        </div>
    );
}
export default Todos;