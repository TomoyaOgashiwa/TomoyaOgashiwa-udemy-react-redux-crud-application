import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

class App extends Component{
  //Componentの初期化時はconstructorを用いる

  // constructorはredux使用時にはreducerで定義されているので必要なし

  // reactのみの記載時に使用したhandlePlusButton及びhandleMinusButtonはactionCreator(今回はactions/index.js)で定義しているので不要

  render(){
    const props = this.props;
    console.log(props);
    return(
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

// mapStateToPropsはstateの情報からこのコンポーネントで必要なものを取り出して
// コンポーネント内にpropsとしてラッピングする機能をもつ
const mapStateToProps = state => (
  {value: state.count.value}
)

// mapDispatchToPropsはあるactionが発生した時にreducerにあるタイプに応じた
// 状態遷移を実行させるための関数がdispatchになる
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

// 今回の場合上記は下記のようにも記載可能
const mapDispatchToProps = ({increment, decrement});

export default connect(mapStateToProps, mapDispatchToProps)(App);
