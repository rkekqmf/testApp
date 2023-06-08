import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {

  const [copyData, setCopyData] = useState("Webview용 clipboard test")

  const doCopy = text => {

      // 흐름 3.
      const textarea = document.createElement("textarea");
      textarea.value = copyData;
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = "fixed";

      // 흐름 4.
      document.body.appendChild(textarea);
      // focus() -> 사파리 브라우저 서포팅
      textarea.focus();
      // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
      textarea.select();
      // 흐름 5.
      document.execCommand("copy");
      // 흐름 6.
      document.body.removeChild(textarea);
      alert("클립보드에 복사되었습니다.");
  };

  

  const changeText = (text) => {
    setCopyData(text);
  }
 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>doCopy(copyData)}>버튼이요</button>
        <input type="textfield" placehoder="clipboard check" onChange={(e)=>{changeText(e.target.value)}}></input>
        <div id={'cliptext'}>copyData : {copyData}</div>
      </header>

    </div>
  );
}

export default App;
