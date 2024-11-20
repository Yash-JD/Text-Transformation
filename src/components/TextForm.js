import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpCLick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)  // this will enable to add or change within existing text
    }

    const [text, setText] = useState('Default Text');    // use of hook
    // text = "new Text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpCLick}>Convert to Uppecase</button>
        </div>
    )
}