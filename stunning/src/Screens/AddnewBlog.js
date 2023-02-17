import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddnewBlog = () => {
  const [caption, setCaption] = useState('');
  const [userId,setUserId]=useState('');

  useEffect(() => {
    getData();
  }, []);
 
    const getData = async () => {
      const userId = await AsyncStorage.getItem('userId');
      setUserId(userId);
    };
  

  const saveData = () => {
    // const user=Math.floor((Math.random() * 100000) + 1);
    // const userId= user.toString();
   
    firestore()
      .collection('blogs')
      .add({
        caption: caption,

        userId: userId,
      })
      .then(() => {
        console.log('Post  added!');
      });
  };

  return (
    <View>
      <TextInput
        onChangeText={setCaption}
        value={caption}
        placeholder="Caption"
        style={{
          width: '90%',
          height: 50,
          alignSelf: 'center',
          borderWidth: 1,
          marginTop: 30,
          borderRadius: 10,
        }}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          alignSelf: 'center',
          borderWidth: 1,
          marginTop: 30,
          borderRadius: 10,
          backgroundColor: 'purple',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => saveData()}>
        <Text style={{color: '#ffff'}}>Add Caption</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddnewBlog;
