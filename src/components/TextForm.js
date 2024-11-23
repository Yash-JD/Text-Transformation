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

    const handleTiCLick = () => {
        let newText = text.toLowerCase()
                          .split(' ').map(word => word.charAt(0)
                          .toUpperCase() + word.slice(1))
                          .join(' ');
        setText(newText);
    }

    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleClearText = () => {
        let newText = '';
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
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-1" onClick={handleUpCLick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-1" onClick={handleLoCLick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleTiCLick}>Convert to Title Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear text</button>
        </div>
            
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
        </div>
        </>
    )
}