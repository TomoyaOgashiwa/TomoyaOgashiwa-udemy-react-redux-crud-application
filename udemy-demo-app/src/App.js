import React from "react";

// ファンクショナルコンポーネント
// function App() {
//   return(
//     <div>
//         <input type="text" onClick={() => {console.log("Click!")}} />
//         <label htmlFor="bar" ht="true">bar</label>
//         <input type="text" onChange={() => {console.log("Change!")}} />
//     </div>   
//   )
// }

// 以下は関数コンポーネントの練習
const App = () => {
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  ) 
}

const Cat = () => {
  return <div>Meow!</div>
}



export default App;
