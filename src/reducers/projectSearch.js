const initialState = ""
export default function projectSearch(state = initialState, action){
    if(action.type === 'PROJECT_SEARCH'){
        // console.log(action)
        return action.payload
        
    }
    
    return state;
  }