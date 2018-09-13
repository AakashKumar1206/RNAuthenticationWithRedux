import {Email_Changed, Password_Changed} from '../Actions/Constants'

const Initial_state ={email:''}

export const EmailChangedReducer = (state=Initial_state,action)=>{
    switch(action.type){
        case Email_Changed:
        return {...state , email:action.payload};
        
        case Password_Changed :
        return {...state,password:action.payload}
        
        default:
        return state;
    }
}