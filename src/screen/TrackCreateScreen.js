import '../_markLocation';
import React,{useEffect,useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {requestPermissionAsync} from 'expo-location';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';

const TrackCreateScreen=()=>{
    const[err,setErr]=useState(null);
    
    const startWatching=async()=>{
        
        
        
        try{
            await requestPermissionAsync();
        }catch(e){
            setErr(e);
        }

    };

    useEffect(()=>{
        startWatching();
    },[])

    return(

        <SafeAreaView forceInset={{top:'always'}}>
        <Text h3>Create a Track</Text>
        <Map/>
        {err?<Text>Please enable location services</Text>:null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default TrackCreateScreen;