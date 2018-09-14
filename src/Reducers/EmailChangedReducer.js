import {Email_Changed, Password_Changed, Login_Success} from '../Actions/Constants'

const Initial_state ={
    email:'',
    password:'',
    user:''
}

export const EmailChangedReducer = (state=Initial_state,action)=>{
    switch(action.type){
        case Email_Changed:
        return {...state , email:action.payload};
        
        case Password_Changed :
        return {...state, password:action.payload}
        
        case Login_Success :
        return {...state,user:action.payload}
        
        default:
        return state;
    }
}