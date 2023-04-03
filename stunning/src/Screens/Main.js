import {View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState,useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import { AuthContext } from '../components/Context';
import PostCard from '../components/PostCard';

const Main = ({navigation}) => {
  const [blogdata, setBlogdata] = useState([]);
  const isfocused = useIsFocused();

 const {state,setState}=useContext(AuthContext);

  useEffect(() => {
    getBlogs();
    setState(false);
  }, [isfocused]);

  const getBlogs = () => {
    firestore()
      .collection('blogs')
      .get()
      .then(querySnapshot => {
        let data = [];
        querySnapshot.forEach(documentSnapshot => {
          data.push(documentSnapshot.data());
        });
        setBlogdata(data);

      });
  };

  //  console.log(blogdata);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'purple',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              marginLeft: 20,
              fontSize: 18,
              fontWeight: '700',
            }}>
            Blog App
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text
            style={{
              color: '#fff',
              marginRight: 20,
              fontSize: 18,
              fontWeight: '700',
            }}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom:55,}}>
        <FlatList
          data={blogdata}
          ListEmptyComponent={<ActivityIndicator size="large" color="#00ff" />}
          renderItem={({item}) => (
           <PostCard  image={item.image} caption={item.caption} />

           
          )}
          keyExtractor={el => Math.random()}
        />
      </View>
      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          borderRadius: 40,
          backgroundColor: 'purple',
          position: 'absolute',
          right: 20,
          bottom: 20,
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('AddnewBlog')}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            fontSize: 17,
          }}>
          Add New Blog
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
