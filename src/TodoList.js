import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems(items => [...items, item]);
    };

    const remove = id => {
        setItems(items => items.filter(item => item.id !== id));
    };

    return (
        <div>
            <NewTodoForm createTodo={addItem} />
            <ul>
                {items.map(item => <Todo key={item.id} id={item.id} item={item.item} handleRemove={remove} />)}
            </ul>
        </div>
    )
}

export default TodoList