/**
 * Created by manzoor.hussain on 10/28/2020.
 */
import React,{useEffect,useContext} from 'react';
import {View,StyleSheet,Text,ActivityIndicator} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import MapView ,{Polyline}from 'react-native-maps';

const Map=()=>{
    let points=[];

    for(let i=0;i<20;i++){
        if(i%2===0){
            points.push({
                latitude:37.3323+i*0.001,
                longitude:-122.03121+i*0.001
    
            });

        }else{
            points.push({
                latitude:37.3323-i*0.002,
                longitude:-122.03121-i*0.001
    
            });
        }
        
    }
    return(
        <MapView style={styles.map}
         initialRegion={{
             latitude:37.3323,
             longitude:-122.03121,
             latitudeDelta:0.01,
             longitudeDelta:0.01
              }}

         >
             <Polyline coordinates={points}/>
         </MapView>

    );
}

const styles = StyleSheet.create({

    map:{
        height:300,
        width:420
    }

});

export default Map;