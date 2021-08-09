import React, { Component } from "react";
import { connect } from "react-redux";

import { readEvents } from "../actions";
import _ from "lodash";

class EventsIndex extends Component{

  componentDidMount(){
    this.props.readEvents();
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  //Componentの初期化時はconstructorを用いる

  // constructorはredux使用時にはreducerで定義されているので必要なし

  // reactのみの記載時に使用したhandlePlusButton及びhandleMinusButtonはactionCreator(今回はactions/index.js)で定義しているので不要

  render(){
    const props = this.props;
    console.log(props);
    return(
      <React.Fragment>
        {/* <div>{console.log(props.value)}</div> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

// mapStateToPropsはstateの情報からこのコンポーネントで必要なものを取り出して
// コンポーネント内にpropsとしてラッピングする機能をもつ
const mapStateToProps = state => ({events: state.events})

// mapDispatchToPropsはあるactionが発生した時にreducerにあるタイプに応じた
// 状態遷移を実行させるための関数がdispatchになる
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

// 今回の場合上記は下記のようにも記載可能
const mapDispatchToProps = ({readEvents});

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
