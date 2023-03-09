import {View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState,useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import { AuthContext } from '../components/Context';

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
          // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());ls
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
      <View style={{marginBottom:55}}>
        <FlatList
          data={blogdata}
          renderItem={({item}) => (
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                borderWidth: 0.5,
                borderRadius: 5,
                marginTop: 20,
                elevation:6,
                backgroundColor:'#ffffff'
              }}>
              <View
                style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    borderWidth: 0.5,
                  }}>
                  <Image
                    source={{
                      uri: 'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433__480.png',
                    }}
                    style={{width: 39, height: 39, borderRadius: 20,padding:10}}
                  />
                </View>
                <Text style={{marginLeft: 10}}>Vikas </Text>
              </View>

              <Text style={{margin: 5,color:'#2aa'}}>{item.caption}</Text>
              
             <Image
                source={{uri: item.image}}
                style={{
                  width: '95%',
                  height: 400,
                  alignSelf: 'center',
                  marginVertical: 7,
                  borderRadius: 5,
                }}
              />
            
              <View style={{borderTopWidth:.5,width:'100%',height:50}}>
              
              </View>
            </View>
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
