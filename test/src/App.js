import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {

  const [copyData, setCopyData] = useState("Webview용 clipboard test")

  const doCopy=() => {
    navigator.permissions.query({name:"clipboard-write"}).then((permission)=> {
      console.log(permission.state);

      permission.onchange = () => {
        console.log(permission.state);
      }
    });

      navigator.clipboard.writeText(copyData)
      .then(()=> {
        alert("클립보드에 복사되었습니다.");
      })
      .catch(()=>alert("하"))
      
  };

  

  const changeText = (text) => {
    setCopyData(text);
  }
 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={doCopy()}>버튼이요</button>
        <input type="textfield" placehoder="clipboard check" onChange={(e)=>{changeText(e.target.value)}}></input>
        <div id={'cliptext'}>copyData : {copyData}</div>
      </header>

    </div>
  );
}

export default App;
