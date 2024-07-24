import React , {useState} from 'react';

export const Todoform = ({addTodo}) => {
        const [value, setvalue] = useState("")

        const handleSumbit = (e) => {
            e.preventDefault();
            if (value) {
            addTodo(value);
            setvalue('');
        }
    };
    return(
        <form onSubmit={handleSumbit} className="TodoForm">
             <input type="text" value={value} onChange={(e) => setvalue(e.target.value)} className="todo-input" placeholder='Hurry up Lazy Bones' />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}