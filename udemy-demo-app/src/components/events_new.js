import React, { Component } from "react";
import { connect } from "react-redux";
import { postEvents } from "../actions";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { RaisedButton, TextField } from "material-ui";

class EventsNew extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
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

    async onSubmit(values){
        await this.props.postEvents(values)
        this.props.history.push("/")
    }

  render(){
      const style = {
          margin: 12,
      }
      const {handleSubmit, pristine, submitting, invalid} = this.props
    return(
      <React.Fragment>
       <form onSubmit={handleSubmit(this.onSubmit)}>
           <div><Field label="title" name="title" type="text" component={this.renderField} /></div>
           <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
           <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
           <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
       </form>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = ({postEvents});

const validate = values => {
    const errors = {}

    if(!values.title) errors.title = "Enter a title, please."
    if(!values.body) errors.body = "Enter a body, please."

    return errors
}

export default connect(null, mapDispatchToProps)(
    reduxForm({validate, form: "eventNewForm"})(EventsNew)
);
