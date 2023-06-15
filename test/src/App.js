import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {
  const [copyData, setCopyData] = useState("Webview용 clipboard test")
  

  const doCopy=() => {
    // (window as any).Android.copyToClipboard(text);
    window.TestInterface = {
      testWorld: () => {
        navigator.clipboard
        .writeText(copyData)
        .then(() => {
          alert("successfully copied");
        })
        .catch(() => {
          alert("something went wrong");
        })
      }
    }
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



// function copy(text) {
//   return new Promise((resolve, reject) => {
//       if (typeof navigator !== "undefined" && typeof navigator.clipboard !== "undefined" && navigator.permissions !== "undefined") {
//           const type = "text/plain";
//           const blob = new Blob([text], { type });
//           const data = [new ClipboardItem({ [type]: blob })];
//           navigator.permissions.query({name: "clipboard-write"}).then((permission) => {
//               if (permission.state === "granted" || permission.state === "prompt") {
//                   navigator.clipboard.write(data).then(resolve, reject).catch(reject);
//               }
//               else {
//                   reject(new Error("Permission not granted!"));
//               }
//           });
//       }
//       else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
//           var textarea = document.createElement("textarea");
//           textarea.textContent = text;
//           textarea.style.position = "fixed";
//           textarea.style.width = '2em';
//           textarea.style.height = '2em';
//           textarea.style.padding = 0;
//           textarea.style.border = 'none';
//           textarea.style.outline = 'none';
//           textarea.style.boxShadow = 'none';
//           textarea.style.background = 'transparent';
//           document.body.appendChild(textarea);
//           textarea.focus();
//           textarea.select();
//           try {
//               document.execCommand("copy");
//               document.body.removeChild(textarea);
//               resolve();
//           }
//           catch (e) {
//               document.body.removeChild(textarea);
//               reject(e);
//           }
//       }
//       else {
//           reject(new Error("None of copying methods are supported by this browser!"));
//       }
//   });
  
// }






// export default function ClipboardCopy() {
//   const doCopy = text => {
//     // 흐음 1.
//     if (navigator.clipboard) {
//       // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
//       navigator.clipboard
//         .writeText(text)
//         .then(() => {
//           alert("클립보드에 복사되었습니다.");
//         })
//         .catch(() => {
//           alert("복사를 다시 시도해주세요.");
//         });
//     } else {
//       // 흐름 2.
//       if (!document.queryCommandSupported("copy")) {
//         return alert("복사하기가 지원되지 않는 브라우저입니다.");
//       }

//       // 흐름 3.
//       const textarea = document.createElement("textarea");
//       textarea.value = text;
//       textarea.style.top = 0;
//       textarea.style.left = 0;
//       textarea.style.position = "fixed";

//       // 흐름 4.
//       document.body.appendChild(textarea);
//       // focus() -> 사파리 브라우저 서포팅
//       textarea.focus();
//       // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
//       textarea.select();
//       // 흐름 5.
//       document.execCommand("copy");
//       // 흐름 6.
//       document.body.removeChild(textarea);
//       alert("클립보드에 복사되었습니다.");
//     }
//   };

//   return (
//     <button onClick={() => doCopy("복사할텍스트입니다!")}>복사하기</button>
//   );
// }
