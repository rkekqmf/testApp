import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [copyData, setCopyData] = useState("Webview용 clipboard test")

  const changeText = (text) => {
    setCopyData(text);
  }
  const onCopy = () => {
    navigator.clipboard.readText().then(
    (clipText) => (document.querySelector(".cliptext").innerText = clipText)
  );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <button onClick={onCopy}>버튼이요</button>
        <input type="textfield" placehoder="clipboard check" onChange={(e)=>{changeText(e.target.value)}}></input>
        <div id={'cliptext'}>copyData : {copyData}</div>
      </header>

    </div>
  );
}

export default App;
