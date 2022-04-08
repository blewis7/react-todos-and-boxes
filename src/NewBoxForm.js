import React, {useState} from "react";
import {v4 as uuid} from 'uuid';

function NewBoxForm({ createBox }) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const gatherInput = (e) => {
        e.preventDefault();
        createBox({
            height: formData.height || 5, 
            width: formData.width || 5, 
            backgroundColor: formData.backgroundColor || "purple", 
            id: uuid()
        });
        setFormData({height: "", width: "", backgroundColor: ""});
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="height"
                        placeholder="Height"
                        value={formData.height}
                        id="height"
                        // required
                    />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="width"
                        placeholder="Width"
                        value={formData.width}
                        id="width"
                        // required
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="backgroundColor"
                        placeholder="backgroundColor"
                        value={formData.backgroundColor}
                        id="backgroundColor"
                        // required
                    />
                </div>
                <button id="newBoxButton">Create Box!</button>
            </form>
        </div>
    );
}

export default NewBoxForm;