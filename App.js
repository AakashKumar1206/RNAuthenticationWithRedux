import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import {Reducers} from './src/Reducers'
import firebase from 'firebase';
//import devToolsEnhancer from 'remote-redux-devtools-sp';
import LoginForm from './src/Components/LoginForm';
import ReduxThunk from 'redux-thunk'
import Header from './src/Components/Header';


class App extends Component{
  componentWillMount()  {
    const config = {
        apiKey: "AIzaSyB3E487f-FpSsMVXwxeyzwRlxHLAz2P9P4",
        authDomain: "rnauthentication-with-redux.firebaseapp.com",
        databaseURL: "https://rnauthentication-with-redux.firebaseio.com",
        projectId: "rnauthentication-with-redux",
        storageBucket: "rnauthentication-with-redux.appspot.com",
        messagingSenderId: "640757069537"
      };
      firebase.initializeApp(config);
}
  render(){
    return(
      <Provider store = {createStore(Reducers,{},applyMiddleware(ReduxThunk))} >
        <View style={styles.container}>
          <Header title= 'ReduxAuthentication'/>
          <LoginForm />
        </View>
      </Provider>
    )
  }
}

const styles = {
  container:{
    flex:1,
    
  }
}
export default App;