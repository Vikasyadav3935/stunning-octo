import {View, Text,TextInput,TouchableOpacity,alert,Alert, ScrollView} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import { v4 as uuidv4, v4 } from 'uuid';

const SignUp = ({navigation}) => {

 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const [name,setName]=useState('')
  
 const signUp=()=>{
  const user=Math.floor((Math.random() * 100000) + 1);
  const userId= user.toString();
  firestore()
  .collection('Users')
  .doc(userId)
  .set({
    name: name,
    email:email,
    password:password,
    userId:userId
  })
  .then(() => {
    console.log('User added!');
  });


 }


  return (
    <ScrollView>
      <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 60}}>
        SignUp
      </Text>
      <TextInput
       onChangeText={setName}
       value={name}
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
      onChangeText={setEmail}
      value={email}
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
        onChangeText={setPassword}
       value={password}
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
        }}
        onPress={()=>{
          if(name!=='' && password !=='' && email !=''){
            signUp();
          }else{
            Alert.alert('Fill all details');
          }
        }}
        
        >
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
    </ScrollView>
  );
};

export default SignUp;
