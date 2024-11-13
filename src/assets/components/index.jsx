import './index.css';
import React, { useState } from "react";

const UseTo_do = () => {
    const [value, setValue] = useState('');
    const [arr, setArr] = useState([]);

    const handleChange = (evt) => {
        setValue(evt.target.value);
    }

    const handleClick = () => {
        if (value) {
            const newValue = { id: arr.length + 1, lists: value };
            setArr([...arr, newValue]);
            setValue('');
        }
    }

    const removeItem = (id) => {
        const newItems = arr.filter((item) => item.id !== id);
        setArr(newItems);
    }

    return (
        <div className="c">
            <input 
                value={value} 
                onChange={handleChange} 
                className="box" 
                type="text" 
                placeholder="Add a new task" 
            />
            <button onClick={handleClick} className="btn1">Submit</button>
            <div className="item-list">
                {arr.map((item) => (
                    <div key={item.id} className="item">
                        <h1>{item.lists}</h1>
                        <button onClick={() => removeItem(item.id)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UseTo_do;
