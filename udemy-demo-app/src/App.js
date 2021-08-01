import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Noname", age: 3}
  ]
  return(
    <div>
    {/* 下記の{}はJavaScriptをHTML表示させるため */}
    {
      profiles.map((profile, index) => {
        {/* console.log(index); //profilesにあるデータ数の分表示される mapには必ずあるもので、普段は省略されている */}
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }    
    </div>
  ) 
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired //isRequiredをつけると必ず値が入れる必要がある
}


export default App;
