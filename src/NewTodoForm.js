import React, {useState} from "react";
import {v4 as uuid} from 'uuid';

function NewTodoForm({ createTodo }){
    const [todo, setTodo] = useState("");

    const handleChange = e => {
        setTodo(todo => e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        createTodo({ item: todo, id: uuid() });
        setTodo("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="todo">New To-Do Item: </label>
                    <input 
                        name="todo"
                        placeholder="To-Do Item"
                        value={todo}
                        type="text"
                        id="todo"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button>Add To-Do Item</button>
            </form>
        </div>
    )
}

export default NewTodoForm;