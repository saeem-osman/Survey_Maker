import React, { Component } from 'react'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'
import { reduxForm } from 'redux-form'

export class SurveyNew extends Component {
    state = {
        reviewSubmit: false
    }

    renderContent(){
        if(this.state.reviewSubmit){
            return <SurveyFormReview 
            onCancel = {()=>this.setState({reviewSubmit: false})}
            />
        }
        return <SurveyForm onSurveySubmit={()=>this.setState({reviewSubmit: true})} />
    }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew)
