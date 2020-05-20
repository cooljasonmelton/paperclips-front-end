import { combineReducers } from 'redux'
import login from './login'
import datePreview from './datePreview'



export default combineReducers({
    login: login,
    datePreview: datePreview
})