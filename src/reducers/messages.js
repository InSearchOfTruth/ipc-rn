export default function messages (state =[], action){
 if(action.type === 'NEW_MESSAGE'){
     return [
         ...state,
         action.payload
     ]
 }
 return state
}