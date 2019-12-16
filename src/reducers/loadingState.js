
export default function loadingState(state = [], action){
    if(action.type === 'LOADING'){
        return action.payload
    }
    return state;
  }