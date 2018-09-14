import {Email_Changed, Password_Changed, Login_Success, Login_Failed, SpinnerChange} from '../Actions/Constants'

const Initial_state ={
    email:'',
    password:'',
    user:'',
    error:'',
    loading:false
}

export const EmailChangedReducer = (state=Initial_state,action)=>{
    switch(action.type){
        case Email_Changed:
        return {...state , email:action.payload};
        
        case Password_Changed :
        return {...state, password:action.payload}
        
        case Login_Success :
        return {...state,user:action.payload ,email:'', password:''}
         
        case SpinnerChange :
        return {...state, loading:true}
        
        case  Login_Failed:
        return {...state, error:'Authentication Failed', email:'', password:''}

        
        default:
        return state;
    }
}