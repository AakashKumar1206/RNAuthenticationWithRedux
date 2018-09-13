import {Email_Changed, Password_Changed} from './Constants'

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
