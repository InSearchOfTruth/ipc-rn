
export default function loginState(state = [], action){
    if(action.type === 'LOGIN'){
        return action.payload
    }else if(action.type === 'LOADING'){
        return action.payload
    }else if(action.type === 'LOGOUT'){
        return action.payload
    }
    return state;
  }