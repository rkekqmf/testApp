import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {
  const [copyData, setCopyData] = useState("Webview용 clipboard test")
  

  const doCopy=() => {
    var copyText = document.getElementById("myInput");
    copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard
      .writeText(copyText.value)
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

  

  const changeText = (text) => {
    setCopyData(text);
  }
 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>{doCopy()}}>버튼이요</button>
        <input id={"myInput"} type="textfield" placehoder="clipboard check" value={"zzzzzz"}></input>
        <div > </div>
      </header>

    </div>
  );
}

export default App;
