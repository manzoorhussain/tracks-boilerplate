import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screen/AccountScreen';
import SigninScreen from './src/screen/SigninScreen';
import SignupScreen from './src/screen/SignupScreen';
import TrackCreateScreen from './src/screen/TrackCreateScreen';
import TrackDetailScreen from './src/screen/TrackDetailScreen';
import TrackListScreen from './src/screen/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import ResolveAuthScreen from './src/screen/ResolveAuthScreen';
const switchNavigator=createStackNavigator({

    ResolveAuth:ResolveAuthScreen,
   loginFlow:createStackNavigator({
     SignUp:SignupScreen,
     SignIn:SigninScreen,
   }),
    mainFlow:createBottomTabNavigator({

        trackListFlow:createStackNavigator({
            TrackList:TrackListScreen,
            TrackDetail:TrackDetailScreen
        }),

        CreateTrack:TrackCreateScreen,
        Account:AccountScreen,
    }),


});

const App= createAppContainer(switchNavigator);

export default()=>{

    return (
        <AuthProvider>
            <App 
            ref={(navigator)=>{setNavigator(navigator)}}
                
            />
        </AuthProvider>
    );

}