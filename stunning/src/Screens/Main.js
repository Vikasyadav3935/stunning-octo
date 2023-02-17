import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

const Main = ({navigation}) => {

useEffect(()=>{
    getBlogs()
},[])

  const getBlogs=()=>{
    firestore()
  .collection('blogs')
  .get()
  .then(querySnapshot => {
    
    let data=[];
    querySnapshot.forEach(documentSnapshot => {
      data.push(documentSnapshot.data())
      // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  })
  }


  return (
    <View style={{flex:1}}>
        <View
        style={{
            width:'100%',
            height:50,
            backgroundColor:'purple',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        }}
        >
            <Text style={{color:'#fff',marginLeft:20,fontSize:18,fontWeight:'700'}}>Blog App</Text>
            <Text style={{color:'#fff',marginRight:20,fontSize:18,fontWeight:'700'}}>Profile</Text>
        </View>
        <TouchableOpacity 
        style={{
            width:150,
            height:50,
            borderRadius:40,
            backgroundColor:'purple',
            position:'absolute',
            right:20,
            bottom:20,
           justifyContent:'center'
        }}

        onPress={()=>navigation.navigate('AddnewBlog')}
        >
     <Text style={{
        color:'white',
        alignSelf:'center',
        fontSize:17}}
        >
         Add New Blog
         </Text>
        </TouchableOpacity>
    
    </View>
  )
}

export default Main