import React,{useState,useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Button,Input} from 'react-native-elements'
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen=({navigation})=>{

    const{state,signup}=useContext(AuthContext);

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    return(
        <View style={styles.container}>


        <Text h3>Sign up for Tracker</Text>
        <Spacer/>
            
        <Input  label="Email"
                value={email}
                onChangeText={newEmail=>setEmail(newEmail)}
                autoCapitalize="none"
                autoCorrect={false}
                />
        <Spacer/>


        <Input label="Password"
                secureTextEntry
               value={password}
               onChangeText={newPassword=>setPassword(newPassword)}
               autoCapitalize="none"
               autoCorrect={false}
            />
        <Spacer/>

           {state.errorMessage?<Text style={styles.errorMessage}>{state.errorMessage}</Text>:null}
        <Button title="Sign up" onPress={()=>signup({email,password})}/>
        <Spacer/>


        </View>
    );
}

SignupScreen.navigationOptions=()=>{
    header:null


};
const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:80
    },
    errorMessage:{
        fontSize:16,
        color:'red',
       

    }

});

export default SignupScreen;