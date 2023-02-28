import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Main from './Screens/Main';
import AddnewBlog from './Screens/AddnewBlog';
import Profile from './Screens/Profile';


const Stack=createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen  name='Splash' component={Splash} options={{headerShown:false}}   />
            <Stack.Screen  name='Login' component={Login} options={{headerShown:false}}   />
            <Stack.Screen  name='SignUp' component={SignUp} options={{headerShown:false}}   />
            <Stack.Screen  name='Main' component={Main} options={{headerShown:false}}   />
            <Stack.Screen  name='AddnewBlog' component={AddnewBlog} options={{headerShown:true}}   />
            <Stack.Screen  name='Profile' component={Profile} options={{headerShown:true}}   />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator