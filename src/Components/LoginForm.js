import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Input from  './Input';
import CardSection from './CardSection'
import Button from './Button';
import {emailChanged,passwordChanged} from '../Actions'


class LoginForm extends Component{

    
    emailInput(text){
        this.props.emailChanged(text)
    }

    passwordInput(text){
        this.props.passwordChanged(text)
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

            <CardSection>
                <Button>Login</Button>
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
  return { email:state.auth.email, password:state.auth.password}
};
export default connect(mapStateToProps,{emailChanged, passwordChanged})(LoginForm)