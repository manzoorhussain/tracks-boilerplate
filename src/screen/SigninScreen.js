/**
 * Created by manzoor.hussain on 10/28/2020.
 */
/**
 * Created by manzoor.hussain on 10/28/2020.
 */
import React,{useContext} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';


const SigninScreen=()=>{

    const{state,signin,clearErrorMessage}=useContext(AuthContext);
    
    return(
        <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage}/>
        <AuthForm
            headerText="Sign in to Your Account"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitButtonText="Sign in"
        />
        <NavLink text="Donot have an account? Sign up instead" routeName="SignUp"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:80
    },
});

SigninScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

export default SigninScreen;