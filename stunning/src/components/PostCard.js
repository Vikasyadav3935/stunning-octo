import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const PostCard = ({image,caption}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: 'https://picsum.photos/id/237/200/300' }}
          style={styles.userImage}
        />
        <Text style={styles.userName}>Vikas </Text>
      </View>
      <Image
        source={{ uri: image}}
        style={styles.postImage}
      />
      <View style={styles.caption}>
        <Text style={styles.captionText}>
          {caption}
        </Text>
      </View>
      {/* <View style={styles.likes}>
        <View >
          <TouchableOpacity>
        <Ionicons name='heart-outline' size={30} />
        </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
          <Ionicons name='chatbox-outline' size={30}/>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    elevation:4
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius:6
  },
  caption: {
    marginBottom: 10,
  },
  captionText: {
    fontSize: 16,
  },
  likes: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  likesCount: {
    fontSize: 16,
    fontWeight: 'bold',

  },
});

export default PostCard;
