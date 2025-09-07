import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import StartScreen from '../screens/StartScreen';


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
          </Stack.Group>
      )}
    </Stack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})