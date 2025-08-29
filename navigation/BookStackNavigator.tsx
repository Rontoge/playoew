import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookScreen from "../screens/BookScreen";

export type BookStackParamList = {
  BookHome: undefined;
  VenueInfo: {
    name: string;
    timings: string;
    location: string;
    rating: number;
    sportsAvailable: Array<{ name: string; icon: string }>;
    bookings: any[];
  };
  Slot: {
    plpace: string;
    sports: any[];
    bookings: any[];
  };
  create: { area: string };
};

const Stack = createNativeStackNavigator();

const BookStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookHome" component={BookScreen} />
    </Stack.Navigator>
  );
};

export default BookStackNavigator;

const styles = StyleSheet.create({});
