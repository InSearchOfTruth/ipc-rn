export default function projects(state = [], action){
    if(action.type === 'LOAD_PROJECTS_LIST'){
        return action.payload
    }
    return state;
  }