import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent, deleteEvents, putEvent } from "../actions";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { RaisedButton, TextField } from "material-ui";

class EventsShow extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    componentDidMount(){
      const {id} = this.props.match.params
      if(id)this.props.getEvent(id)
    }

    renderField(field){
        const {input, label, type, meta: {touched, error} } = field

        return (
          <TextField
              hintText={label}
              floatingLabelText={label}
              type={type}
              errorText={touched && error}
              {...input}
              fullWidth={true}
          />
        )
    }

    async onDeleteClick(){
      const {id} = this.props.match.params
      await this.props.deleteEvents(id)
      this.props.history.push("/")
    }

    async onSubmit(values){
        await this.props.putEvent(values)
        this.props.history.push("/")
    }

  render(){
      const {handleSubmit, pristine, submitting, invalid} = this.props
      const style = {
        margin: 12,
    }
    return(
      <React.Fragment>
       <form onSubmit={handleSubmit(this.onSubmit)}>
           <div><Field label="title" name="title" type="text" component={this.renderField} /></div>
           <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
           <div>
           <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
           <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
           <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} />
           </div>
       </form>
      </React.Fragment>
    )
  }
}

const validate = values => {
    const errors = {}

    if(!values.title) errors.title = "Enter a title, please."
    if(!values.body) errors.body = "Enter a body, please."

    return errors
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}

const mapDispatchToProps = ({deleteEvents, getEvent, putEvent});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({validate, form: "eventShowForm"})(EventsShow)
);
