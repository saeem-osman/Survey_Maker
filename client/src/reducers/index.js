import {combineReducers} from 'redux'
import auth from './authReducer'
import { reducer as reduxForm } from 'redux-form'
import surveysReducer from './surveysReducer'

export default combineReducers({
    auth: auth,
    form: reduxForm,
    surveys: surveysReducer
})