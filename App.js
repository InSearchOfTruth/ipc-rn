import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import FirstPage from './src/components/firstPage'
import reducer from './src/reducers'
import thunk from 'redux-thunk'

// function login(state = [], action){
//   if(action.type === 'LOGIN'){
//     return action.payload
//   }
//   return state;
// }


const store = createStore(reducer,applyMiddleware(thunk))

// store.dispatch({type: 'LOGIN', payload: {login:'login', name: 'name', password: 'password'}})


class App extends React.Component{
  render(){
    
    return(
      <Provider store={store}>
        <FirstPage/>
      </Provider>
    )
  } 
}
export default App