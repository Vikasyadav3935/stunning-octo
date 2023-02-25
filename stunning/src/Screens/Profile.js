import {View, Text, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {


  removeValue = async () => {
    try {
     const email= await AsyncStorage.getItem('email');
     console.log(email)
    } catch(e) {
      console.log(e)
    }
  
    console.log('Done.');
    navigation.navigate('Login')

  }
  return (
    <View>
      <TouchableNativeFeedback>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderWidth: 0.5,
              borderRadius: 20,
            }}></View>
          <Text style={{marginLeft: 20}}>vikasyadav3935@gmail.com</Text>
        </View>
      </TouchableNativeFeedback>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginLeft: 20,
        }}>
        <Text>Vikas Yadav</Text>
      </View>

      <TouchableNativeFeedback
      onPress={removeValue}
      >
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#739',
            borderRadius: 10,
          }}>
          <Text style={{color: 'white'}}>Logout</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Profile;
