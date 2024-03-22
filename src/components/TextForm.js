import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
      // console.log("Upper case was clicked" + text);
       let newText = text.toLowerCase();
       setText(newText)
   }

    const handleOnChange = (event)=>{
        //console.log("On Chnage");
        setText(event.target.value);
    }


    const [text, setText] = useState('Enter the text here');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to upperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to lowercase</button>
    </div>
    <div className="container my-3">
      <h3>Your text summmary</h3>
      <p>{text.split(" ").length} and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length}Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
