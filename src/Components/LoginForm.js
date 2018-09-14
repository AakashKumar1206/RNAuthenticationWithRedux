import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { connect } from 'react-redux';
import Input from  './Input';
import CardSection from './CardSection'
import Button from './Button';
import Spinner from './Spinner'
import {emailChanged,passwordChanged,loginUser} from '../Actions'


class LoginForm extends Component{

    
    emailInput(text){
        this.props.emailChanged(text)
    }

    passwordInput(text){
        this.props.passwordChanged(text)
    
    }


    loginUserInput(){
        const {email,password} =this.props;

        this.props.loginUser({email,password})
    }

    showError(){
       
            <View>
                <Text style={{color:"red"}}>{this.props.error}</Text>
            </View>
        
    }

    renderButton(){
        if(this.props.loading===true){
            return <Spinner size="large" />
        }

        else {
            return (
                <Button onPress={this.loginUserInput.bind(this)}>Login</Button>
            )
        }
    }

    render(){
        return(
            <View style= {styles.InputField}>
            
            <CardSection>
                <Input label="Email"
                        placeholder="abc@xyz.com"
                        onChangeText = {this.emailInput.bind(this)}
                />
            </CardSection>

            <CardSection>
                <Input label="Password"
                        placeholder="*****"
                        secureTextEntry
                        onChangeText={this.passwordInput.bind(this)}
                />
            </CardSection>

            {this.showError()}
            
            <CardSection>
            {this.renderButton()}
            </CardSection>
               
            </View>
        )
    }
}

const styles = {
InputField:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
}
}

const mapStateToProps = state => {
  return { email:state.auth.email, 
            password:state.auth.password, 
            user:state.auth.user,
            error:state.auth.error,
            loading:state.auth.loading
        }
};
export default connect(mapStateToProps,{emailChanged, passwordChanged ,loginUser})(LoginForm)