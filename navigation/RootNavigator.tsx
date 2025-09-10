import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import StartScreen from '../screens/StartScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NameScreen from '../screens/NameScreen';
import SelectImage from '../screens/SelectImage';
import GameSelection from '../screens/GameSelection';


const RootNavigator = () => {
      const isSignedIn = false; // Replace with your actual sign-in logic
      const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isSignedIn ? (
            <Stack.Screen name="Home" component={AppNavigator} />
      ) : (
          <Stack.Group> 
            <Stack.Screen name ="Start" component={StartScreen}   />
            <Stack.Screen name ="SignIn" component={SignInScreen}   />
            <Stack.Screen name ="SignUp" component={SignUpScreen}   />
            <Stack.Screen name ="Name" component={NameScreen}   />
            <Stack.Screen name ="Image" component={SelectImage}   />
            <Stack.Screen name ="GameSelection" component={GameSelection}   />

          </Stack.Group>
      )}   
    </Stack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})