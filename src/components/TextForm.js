import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        //console.log("On Chnage");
        setText(event.target.value);
    }


    const [text, setText] = useState('Enter the text here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to upperCase</button>
      
    </div>
  )
}
