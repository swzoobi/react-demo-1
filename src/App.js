import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() { //函数组件
  function sayHi(){
    alert('hi')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          函数组件 code：<code>function App()</code>

        </p>
        <p>
          编辑 <code>src/App.js</code> 并保存，然后重新刷新页面
        </p>
        <button onClick={sayHi} >
          打招呼
        </button>
        
      </header>
    </div>
  );
}

// class App extends React.Component{//对象组件

//   render(){
//     return (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           对象组件 code：<code>class App2 extends React.Component</code>
//         </p>
//         <p>
//           编辑 <code>src/App.js</code> 并保存，然后重新刷新页面
//         </p>
        
//       </header>
//     </div>
//     )
//   }
// }

export default App;