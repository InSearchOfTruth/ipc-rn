import {combineReducers} from 'redux'

import loginState from './loginState'
import messages from './messages'

export default combineReducers({
    loginState,
    messages
})