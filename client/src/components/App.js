import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import Landing from './Landing'
import * as actions from '../actions'
import SurveyNew from './surveys/SurveyNew'
import Dashboard from './Dashboard'

class App extends React.Component {
  componentDidMount(){
    this.props.fetchUser()
    
  }
 render(){
  return (
    <div className="container">
        
        
      <BrowserRouter>
      <div className="container">
      <Header />
      <Route path="/" exact component={Landing} />
        <Route path="/surveys" exact component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </div>
      </BrowserRouter>
    </div>
  )
 }
}
export default connect(null,actions)(App)