import { combineReducers } from 'redux'
import login from './login'
import datePreview from './datePreview'
import awards from './awards'



export default combineReducers({
    login: login,
    datePreview: datePreview,
    awards: awards
})