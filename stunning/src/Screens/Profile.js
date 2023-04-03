import {View, Text, StyleSheet,Button,Image} from 'react-native';
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {

  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
 
  useEffect(()=>{
    getValue();
  },[])


 const getValue= async()=>{
  try {
   const email= await AsyncStorage.getItem('email');
   const name=await AsyncStorage.getItem('name');
   setEmail(email);
   setName(name);
  } catch (error) {
     console.log(error)
  }
  console.log('doneget')
 }

   const removeValue = async () => {
    try {
     await AsyncStorage.removeItem('email');
    //  console.log(email)
    } catch(e) {
      console.log(e)
    }
  
    console.log('Done.');
    navigation.navigate('Login')

  }


  return (
    <View style={styles.container}>
    <View style={styles.profile}>
      <Image source={{ uri:'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.photo} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.age}>Age: 23</Text>
      <Button title="Logout" onPress={removeValue} />
    </View>
  </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  profile: {
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  age: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
});

export default Profile;
