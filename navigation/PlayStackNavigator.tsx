import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlayScreen from "../screens/PlayScreen";
import CreateActivityScreen from "../screens/CreateActivityScreen";

export type PlayStackParamList = {
  PlayHome: undefined;
  CreateActivity: undefined;
};

const Stack = createNativeStackNavigator();

const PlayStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PlayHome" component={PlayScreen} />
      <Stack.Screen name="Create" component={CreateActivityScreen} />

    </Stack.Navigator>
  );
};

export default PlayStackNavigator;

const styles = StyleSheet.create({});
