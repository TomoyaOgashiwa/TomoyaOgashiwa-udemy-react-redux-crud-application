import React, { Component } from "react";

const App = () => (<Counter></Counter>)

class Counter extends Component{
  //Componentの初期化時はconstructorを用いる
  constructor(props){
    super(props);
    console.log(this.state);
    this.state = {count: 0};
  }

  handlePlusButton = () => {
    console.log(this.state.count);
    // const count = this.state.count;
    // this.setState({count: count + 1})

    // setStateでrenderメソッドが呼び出されて、ここで状態を変更したい処理を記載する
    this.setState({count: this.state.count + 1}) //上2行分がこの1行に集約
  }

  handleMinusButton = () => {
    console.log(this.state.count)
    this.setState({count: this.state.count - 1}) 
  }

  render(){
    console.log("render")
    return(
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
