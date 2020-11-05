import React,{useState,useContext,useEffect} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {Text,Button,Input} from 'react-native-elements'
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen=({navigation})=>{

    const{state,signup,clearErrorMessage,tryLocalSignin}=useContext(AuthContext);
   
    useEffect(()=>{
        tryLocalSignin();  
    },[]);
 

    return(
        <View style={styles.container}>
    <NavigationEvents onWillBlur={clearErrorMessage}/>
        <AuthForm 
        headerText="Sign up For Tracker" 
        errorMessage={state.errorMessage}  
        submitButtonText="Sign up" 
        onSubmit={signup}

        />
        
        <NavLink text="Alreday have an account ? Sign in instead" routeName="SignIn"/>
        

        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };
const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:80
    },
   
    

});

export default SignupScreen;