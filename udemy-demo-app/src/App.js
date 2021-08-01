import React from "react";

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Noname"}
  ]
  return(
    <div>
    {/* 下記の{}はJavaScriptをHTML表示させるため */}
    {
      profiles.map((profile, index) => {
        console.log(index); //profilesにあるデータ数の分表示される mapには必ずあるもので、普段は省略されている
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }    
    </div>
  ) 
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

//データが入ってこなかった場合、以下で設定したデフォルトデータが自動で挿入される
User.defaultProps = {
  age: 1
}


export default App;
