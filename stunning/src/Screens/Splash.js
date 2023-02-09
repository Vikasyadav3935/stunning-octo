import { View, Text } from 'react-native';
import React from 'react';
import { useEffect } from 'react';

const Splash = ({navigation}) => {

  useEffect(() => {
    
   setTimeout(() => {
     navigation.navigate('Login');
   }, 3000);
   
  }, [])
  

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20,fontWeight:'800'}}>Splash</Text>
    </View>
  )
}

export default Splash;