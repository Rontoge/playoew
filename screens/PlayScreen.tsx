import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const PlayScreen = () => {
  const route = useRoute();
  const [selectedCategory, setSelectedCategory] = useState<
    "Calendar" | "Recommended" | "My Sports" | "Other Sports" | "Past Games"
  >("My Sports");
 const [selectedSport , setSelectedSport] = useState('All');
//  const [games , setGames] = useState<Game[]>([]);

const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Text>PlayScreen</Text>
    </SafeAreaView>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({});
