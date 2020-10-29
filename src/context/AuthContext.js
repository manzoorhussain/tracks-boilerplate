import {AsyncStorage} from 'react-native';
import createDataContext from '../context/createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';
const authReducer=(state,action)=>{


    switch (action.type){
         case 'add_error':
             return {...state,errorMessage:action.payload};
          case 'signup':
            return {errorMessage:'',token:action.payload};   

        default:
            return state;
    }
};





const signup=(dispatch)=>{
  
    return async({email,password})=>{
        try{

            const response=await trackerApi.post('/signup',{email,password});
            
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signup',payload:response.data.token});
            navigate('TrackList')
            
          }catch(err){
            dispatch({type:'add_error',payload:'Some thing wrong with  sign up'})
            

        }
        

    };

};

const signin=(dispatch)=>{
  
    return({email,password})=>{
        

    };

};


const signout=(dispatch)=>{
  
    return()=>{
        

    };

};


//authReducer this is reducer function
//second arg is the action you want to performed
//intial state or intial value
export const {Provider,Context}=createDataContext(
    authReducer,
    {signin,signout,signup},
    {token:null,errorMessage:''}
    );