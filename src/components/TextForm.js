import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpCLick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoCLick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)  // this will enable to add or change within existing text
    }

    const [text, setText] = useState('');    // use of hook
    // text = "new Text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-2" onClick={handleUpCLick}>Convert to Uppecase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoCLick}>Convert to Lowercase</button>
        </div>
            
        <div className="container my-3">
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
        </div>
        </>
    )
}