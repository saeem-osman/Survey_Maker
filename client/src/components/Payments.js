import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux' 
import * as actions from '../actions'

export class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
        amount = {500}
        token = {token =>this.props.handleToken(token)}
        stripeKey = {process.env.REACT_APP_STRIPE_KEY}
        name = {'Survey Maker'}
        description = {'Get 5 credits for $5'}
        >
        <button className="btn primary">
        Add Credit
        </button>
        </StripeCheckout>
      </div>
    )
  }
}

export default connect(null,actions)(Payments)
