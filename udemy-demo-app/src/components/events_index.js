import React, { Component } from "react";
import { connect } from "react-redux";

import { readEvents } from "../actions";
import _ from "lodash";
import { Link } from "react-router-dom";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHeaderColumn, 
  TableRow, 
  TableRowColumn 
} from "material-ui";
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class EventsIndex extends Component{

  componentDidMount(){
    this.props.readEvents();
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  //Componentの初期化時はconstructorを用いる

  // constructorはredux使用時にはreducerで定義されているので必要なし

  // reactのみの記載時に使用したhandlePlusButton及びhandleMinusButtonはactionCreator(今回はactions/index.js)で定義しているので不要

  render(){
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12,
    }
    const props = this.props;
    console.log(props);
    return(
      <React.Fragment>
      <FloatingActionButton style={style} containerElement={<Link to = "/events/new" />}>
        <ContentAdd />
      </FloatingActionButton>
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={false} >
            {this.renderEvents()}
          </TableBody>
        </Table>

        
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
