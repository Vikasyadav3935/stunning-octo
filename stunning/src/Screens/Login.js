import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../components/Context';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {state,setState}=useContext(AuthContext);

  useEffect(()=>{
   setState(false);
  },[])

  const signin = () => {
    firestore()
      .collection('Users')

      .where('email', '==', email)

      .get()
      .then(querySnapshot => {
        if (querySnapshot._docs.length == 0) {
          Alert.alert('User not found');
        } else {
          if (querySnapshot._docs[0]._data.password === password) {
            saveData(
              querySnapshot._docs[0]._data.name,
              querySnapshot._docs[0]._data.userId,
            );
          } else {
            Alert.alert('Password incorrect');
          }

          console.log(querySnapshot._docs[0]._data);
        }
      });
  };

  const saveData = async (name, userId) => {
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('userId', userId);
    navigation.navigate('Main');
  };


  


  return (
    <View  style={{flex:1}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize: 20, alignSelf: 'center', }}>
        Login
      </Text>
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
          backgroundColor: '#355666',
          alignSelf: 'center',
          marginTop: 30,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
        onPress={() => {
          if (email !== '' && password !== '') {
            signin();
          } else {
            Alert.alert('Please enter all details');
          }
        }}>
        <Text style={{fontSize: 20, color: 'wheat'}}>Login</Text>
      </TouchableOpacity>

      <Text
        onPress={() => navigation.navigate('SignUp')}
        style={{
          textDecorationLine: 'underline',
          marginTop: 60,
          fontSize: 18,
          alignSelf: 'center',
          letterSpacing: 1,
        }}>
        {'Create new account'}
      </Text>
      </View>
    </View>
  );
};

export default Login;
