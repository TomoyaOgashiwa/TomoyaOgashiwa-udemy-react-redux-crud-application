import { render } from "@testing-library/react";
import React from "react";

function App() {
  return (
    <h1>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hello World!
    </h1>
  );
}

// 上記と同じ処理 上記がJSX、下記がJavaScriptで表示したもの
// function App() {
//   render();
//   return React.createElement(
//     "div",
//     null,
//     "Hello World!!!!"
//   );
// }

export default App;
