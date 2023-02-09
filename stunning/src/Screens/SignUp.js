import {View, Text,TextInput,TouchableOpacity} from 'react-native';
import React from 'react';

const SignUp = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 100}}>
        SignUp
      </Text>
      <TextInput
        placeholder="Name"
        style={{
          width: '90%',
          borderWidth: 1,
          borderRadius: 10,
          height: 50,
          marginTop: 30,
          alignSelf: 'center',
          paddingLeft: 20,
        }}
      />
      <TextInput
        placeholder="Email"
        style={{
          width: '90%',
          borderWidth: 1,
          borderRadius: 10,
          height: 50,
          marginTop: 30,
          alignSelf: 'center',
          paddingLeft: 20,
        }}
      />

      <TextInput
        placeholder="Enter Password"
        secureTextEntry={true}
        style={{
          width: '90%',
          borderWidth: 1,
          borderRadius: 10,
          height: 50,
          marginTop: 30,
          alignSelf: 'center',
          paddingLeft: 20,
        }}
      />

      <TouchableOpacity
        style={{
          width: '90%',
          backgroundColor: '#aad',
          alignSelf: 'center',
          marginTop: 30,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 20, color: 'wheat'}}>Login</Text>
      </TouchableOpacity>
      <Text
        onPress={() => navigation.goBack()}
        style={{
          textDecorationLine: 'underline',
          marginTop: 40,
          fontSize: 18,
          alignSelf: 'center',
          letterSpacing: 1,
        }}>
        {'Already have account'}
      </Text>
    </View>
  );
};

export default SignUp;
