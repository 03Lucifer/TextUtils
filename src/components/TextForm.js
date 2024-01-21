import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase", "Success")
    }

    const handleLoClick = () => {
        // console.log("Button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase", "Success")
    }

    const handleCaClick = () => {
        let words = text.split(" ");
        let joinedWords = [];
        let capWord;

        words.forEach(function (element) {
            if (element[0] !== undefined) {
                capWord = element[0].toUpperCase() + element.slice(1).toLowerCase();
                joinedWords += capWord + ' ';
            }
        })
        setText(joinedWords);
        props.showAlert("Text converted to Camelcase", "Success")
    }

    // const toggleSwitch = () => {
        
    // }

    const handleOnChange = (event) => {
        // console.log("Something is changing");
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    // text = "new text" // Wrong way to change text
    // setText("new text") // Correct way to change text
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea value={text} onChange={handleOnChange} className="form-control" style={{backgroundColor: props.mode === 'dark'?'#58266f':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} disabled={text.length==0} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
                <button onClick={handleLoClick} disabled={text.length==0} className="btn btn-primary mx-2 my-2">Convert to Lowercase</button>
                {/* <div class="form-check form-switch">
                    <input onClick={handle} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                </div> */}
                <button onClick={handleCaClick} disabled={text.length==0} className="btn btn-primary mx-2 my-2">Convert to Camelcase</button>
            </div>
            <div className='container my-5' style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>Your Text Summary:</h1>
                <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").filter((element)=> {return element.length!==0}).length} minutes read</p>
                <p>{0.008 * text.split("").length} vowels</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something to preview here"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: "Enter your text here"
}