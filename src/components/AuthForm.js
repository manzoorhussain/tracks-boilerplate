import React,{useState,useContext} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import Spacer from '../components/Spacer';


const AuthForm=({headerText,errorMessage,onSubmit,submitButtonText})=>{

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
   
    return (
        <>
        <Text h3>{headerText}</Text>
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

           {errorMessage?<Text style={styles.errorMessage}>{errorMessage}</Text>:null}
        <Button title={submitButtonText} onPress={()=>onSubmit({email,password})}/>
        <Spacer/>
        </>
        
    );

}


const styles = StyleSheet.create({

    errorMessage:{
        fontSize:16,
        color:'red',
    },
});

export default AuthForm;