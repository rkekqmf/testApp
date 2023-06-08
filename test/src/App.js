import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {
  const [copyData, setCopyData] = useState("Webview용 clipboard test")
  

  const doCopy=() => {
    var copyText = document.getElementById("myInput");
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
        <input type="textfield" placehoder="clipboard check" onChange={(e)=>{changeText(e.target.value)}}></input>
        <div id={"myInput"}>copyData : {copyData}</div>
      </header>

    </div>
  );
}

export default App;
