import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked ");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('convert to uppercase');
    }
    const handleClearClick = () =>{
      let newText = '';
      setText(newText);
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked ");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('convert to lowercase');
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const[text , setText] = useState('Enter text user');
  return (
    <>
    <div className='container'  style={{color:props.mode ==='dark'?'white':'#042743'}} >
        <h1 style={{color:props.mode === 'light'?'black':'white'}}>{props.heading} </h1>
      <div class="mb-3">
  
      <textarea class="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'?'white':'grey' ,
       color:props.mode ==='dark'?'white':'#042743'}}></textarea>
      </div>
      <div className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to Uppercase</div>
      <div className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to Lowercase</div>
      <div className="btn btn-primary mx-2 my-2" onClick={handleClearClick} >Clear Button</div>
    </div>
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} character </p>
        <p> {0.008 * text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text to preview here"}</p>
         
    </div>
    </>
  )
}
