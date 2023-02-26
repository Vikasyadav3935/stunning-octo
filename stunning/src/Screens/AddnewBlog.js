import {View, Text, TextInput, TouchableOpacity,PermissionsAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const AddnewBlog = () => {
  const [caption, setCaption] = useState('');
  const [userId,setUserId]=useState('');
  const [permit,setPermit]=useState();


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


const openCamera=async()=>{
   const result=await launchCamera({mediaType:'photo'});
   console.log(result);

}

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openCamera();

      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
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
          backgroundColor: '#aa1d',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={requestCameraPermission}>
        <Text style={{color: '#ffff'}}>Pick Image</Text>
      </TouchableOpacity>
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
        <Text style={{color: '#ffff'}}>Add Blog</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddnewBlog;
