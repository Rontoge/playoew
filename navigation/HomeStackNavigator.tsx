import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';



export type HomeStackParamList = {
    Home: undefined;
    ProfleDetails: undefined

}
const Stack = createNativeStackNavigator();


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Homescreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})