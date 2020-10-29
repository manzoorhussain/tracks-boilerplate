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


const switchNavigator=createStackNavigator({

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

export default createAppContainer(switchNavigator);