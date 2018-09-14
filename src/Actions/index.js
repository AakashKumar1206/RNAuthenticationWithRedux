import {Email_Changed, Password_Changed, Login_Success} from './Constants'

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
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user =>{
            dispatch ({type:Login_Success,payload:user})
        })
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user=>{
                dispatch({type:Login_Success,payload:user})
            })
        })
    }
    
}