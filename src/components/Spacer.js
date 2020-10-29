/**
 * Created by manzoor.hussain on 10/28/2020.
 */
import React from 'react';
import {View,StyleSheet} from 'react-native';


const Spacer=({children})=>{
    return(
        <View style={styles.spacer}>
        </View>
    )

}

const styles = StyleSheet.create({

    spacer:{
        margin:15
    }
});

export default Spacer;