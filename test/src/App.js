import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import {CopyToClipboard } from 'react-copy-to-clipboard'
function App() {

  const [copyData, setCopyData] = useState("Webview용 clipboard test")

  // const doCopy = text => {
  //     if (!document.queryCommandSupported("copy")) {
  //       return alert("복사하기가 지원되지 않는 브라우저입니다.");
  //     }

  //     // 흐름 3.
  //     const textarea = document.createElement("textarea");
  //     textarea.value = copyData;
  //     textarea.style.top = 0;
  //     textarea.style.left = 0;
  //     textarea.style.position = "fixed";

  //     // 흐름 4.
  //     document.body.appendChild(textarea);
  //     // focus() -> 사파리 브라우저 서포팅
  //     textarea.focus();
  //     // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
  //     textarea.select();
  //     // 흐름 5.
  //     document.execCommand("copy");
  //     // 흐름 6.
  //     document.body.removeChild(textarea);
  //     alert("클립보드에 복사되었습니다.");
  // };

  

  const changeText = (text) => {
    setCopyData(text);
  }
 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <CopyToClipboard text={copyData} onCopy={()=>{alert("복사완료")}}><text><div id={'cliptext'}>copyData : {copyData}</div></text></CopyToClipboard>
        <button onClick={doCopy}>버튼이요</button>
        <input type="textfield" placehoder="clipboard check" onChange={(e)=>{changeText(e.target.value)}}></input>
        
      </header>

    </div>
  );
}

export default App;
