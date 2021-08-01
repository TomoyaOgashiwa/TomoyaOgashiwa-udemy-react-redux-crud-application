import React from "react";

// function App() {
//   const greeting = "Hi Tom!";
//   const dom = <h1 className="foo">{greeting}</h1>
//   return dom;
// }

function App() {
  return(
    <div>
        <input type="text" onClick={() => {console.log("Click!")}} />
        <label htmlFor="bar" ht="true">bar</label>
        <input type="text" onChange={() => {console.log("Change!")}} />
    </div>   
  )
}

export default App;
