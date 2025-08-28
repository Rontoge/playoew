import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import PlayStackNavigator from "./PlayStackNavigator";
import BookStackNavigator from "./BookStackNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import { RouteProp } from "@react-navigation/native";

type TabParamList = {
  Home: undefined;
  Play: undefined;
  Book: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={({ 
      route,
       }:{
        route: RouteProp<TabParamList, keyof TabParamList>;
        }) => ({

        })}
        >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Play"
        component={PlayStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Book"
        component={BookStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="More"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
