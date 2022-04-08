import React from "react";

function Todo({ id, item, handleRemove }){
    const remove = () => handleRemove(id)
    return (
        <div>
            <li>{item} <button onClick={remove}>X</button></li>
        </div>
    );
}

export default Todo;