import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';

const AddnewBlog = () => {
  const [caption, setCaption] = useState('');
  const [userId, setUserId] = useState('');
  const [permit, setPermit] = useState();
  const [data, setdata] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userId = await AsyncStorage.getItem('userId');
    setUserId(userId);
  };

  const saveData = (url) => {
    // const user=Math.floor((Math.random() * 100000) + 1);
    // const userId= user.toString();

    firestore()
      .collection('blogs')
      .add({
        caption: caption,

        userId: userId,
        image:url
      })
      .then(() => {
        console.log('Post  added!');
      });
  };

  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    console.log(result);
    if (result.didCancel) {
    } else {
      setdata(result);
    }
  };


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

  const uploadImage = async () => {
    const reference = storage().ref(data.assets[0].fileName);

    const pathToFile =data.assets[0].uri;
    // uploads file
    await reference.putFile(pathToFile);
    const url = await storage().ref(data.assets[0].fileName).getDownloadURL();
    console.log(url);
    saveData(url);

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
      <View style={{height:200,width:'92%',alignSelf:'center',marginTop:20}}>
     {  data!==null ?<Image source={{uri:data.assets[0].uri}} style={{width:'100%',height:'100%'}}  />:''}
      </View>
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

        onPress={() => uploadImage()}>

        <Text style={{color: '#ffff'}}>Add Blog</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddnewBlog;
