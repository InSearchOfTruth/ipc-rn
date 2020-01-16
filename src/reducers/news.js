export default function news(state = [], action){
    if(action.type === 'ADD_LATEST_NEWS'){
        return action.payload
    }
    return state;
  }