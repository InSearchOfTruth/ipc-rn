import {combineReducers} from 'redux'

import loginState from './loginState'
import messages from './messages'
import projects from './projects'
import loadingState from './loadingState'
import projectSearch from './projectSearch'
import news from './news'

export default combineReducers({
    loginState,
    messages,
    loadingState,
    projects,
    projectSearch,
    news
})