import {Email_Changed, Password_Changed, Login_Success,Login_Failed,SpinnerChange} from './Constants'
import firebase from 'firebase'

export const emailChanged = (text) =>{
    return {
        type:Email_Changed,
        payload:text
    }
}

export const passwordChanged = (text) => {
    return{
        type:Password_Changed,
        payload:text
    }
}


export const loginUser = ({email,password}) => {
    return (dispatch) =>{
        dispatch({type:SpinnerChange})
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user =>login_User_Success(dispatch,user))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user=>login_User_Success(dispatch,user))
            .catch(()=>login_User_Fail(dispatch));
        })
    }
    
}

const login_User_Fail =(dispatch)=>{
    dispatch({type:Login_Failed})
}


const login_User_Success = (dispatch, user)=>{
    dispatch({type:Login_Success,payload:user})
}