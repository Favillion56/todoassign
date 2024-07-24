import React, {useState} from "react";
import { Todo } from "./Todo";
import { Todoform } from "./Todoform";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./Edittodform";


export const Todowrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todos => {setTodos([...todos, {id: uuidv4(), task: todos, compeleted: false, isEditing: false }])}
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    const toggleComplete = (id) => {
        setTodos(
        todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

    const editTodo = (id) => {
        setTodos(
        todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
        setTodos(
        todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

    return (
            <div className='Todowrapper'>
                <h1>Time to try to be useful</h1>
                <Todoform addTodo={addTodo} />
                {todos.map((todos) => todos.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todos} />
         ) : (
            <Todo
            key={todos.id}
            task={todos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
