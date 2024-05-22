import { ADD_NOTE,DELETE_NOTE } from "../Actions/noteactions";

const intialstate={
    notes:[{text:"hi this is sreekanth",createdOn:new Date()},
    {text:"hi this is sree",createdOn:new Date()}]
}
export function noteReducers(state=intialstate,action){
  switch(action.type){
    case ADD_NOTE:
        return{
            ...state,
            notes:[...state.notes,
            {text:action.text,createdOn:new Date()}
        ]
        }
    case DELETE_NOTE:
        state.notes.splice(action.index,1);
        return{
            ...state,
            notes:[...state.notes]
        }
    default:
        return{state}
        
        
  }

}