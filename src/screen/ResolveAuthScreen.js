/**
 * Created by manzoor.hussain on 10/28/2020.
 */
import React,{useEffect,useContext} from 'react';
import {View,StyleSheet,Text,ActivityIndicator} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveAuthScreen=()=>{
    const{tryLocalSignin}=useContext(AuthContext);

    useEffect(()=>{
        tryLocalSignin();  
    },[]);

    return(
    <View style={[styles.container, styles.horizontal]}>
    
    <ActivityIndicator size="large" />
    
    
  </View>

    );
}

const styles = StyleSheet.create({

    ontainer: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }

});

export default ResolveAuthScreen;