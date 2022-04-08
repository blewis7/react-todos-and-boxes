import React from "react";

function Box({id, handleRemove, height, width, backgroundColor }){
    const remove = () => handleRemove(id);
    return (
        <div>
            <div
              style={{
                height: `${height}em`,
                width: `${width}em`,
                backgroundColor: `${backgroundColor}`
              }}
            />
            <button onClick={remove}>X</button>
        </div>
    );
}

export default Box;