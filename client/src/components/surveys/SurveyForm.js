import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import SurveyField from './SurveyField'
import emailVarification from '../../utils/validateEmails'
import formFields from './formFields'


export class SurveyForm extends React.Component {
    renderFields(){
        return(
        _.map(formFields, field =>{
            return <Field key={field.name} component={SurveyField} type="text" label = {field.label} name = {field.name} />
        })
        )     
    }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >
        {this.renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">Submit
            <i className="material-icons right">done</i>
          </button>
            </form>
      </div>
    )
  }
}

function validate(values){
    const errors = {}

    errors.recipients = emailVarification(values.recipients || '')

    _.each(formFields, ({name, noValueErro}) =>{
        if(!values[name]){
            errors[name] = noValueErro;
        }
    })


    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm)
