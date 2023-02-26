import { View, Text } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {

  useEffect(() => {
    
   setTimeout(() => {
    checkLogin()
    // navigation.navigate('Login');
    
   }, 3000);
   
   
  }, [])

  
  const checkLogin=async()=>{
     const email=await AsyncStorage.getItem('email');
    
     if( email !== null ){
      console.log(email,'!null')
      navigation.navigate('Main');
     }else{
      console.log(email,'1null')
      navigation.navigate('Login');
     }
  }
  

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20,fontWeight:'800'}}>Blog App</Text>
    </View>
  )
}

export default Splash;