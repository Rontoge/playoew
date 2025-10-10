import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import moment from "moment";
import { Bell, MessageCircle } from "lucide-react-native";

const PlayScreen = () => {
  const route = useRoute();
  const [selectedCategory, setSelectedCategory] = useState<
    "Calendar" | "Recommended" | "My Sports" | "Other Sports" | "Past Games"
  >("My Sports");
  const [selectedSport, setSelectedSport] = useState("All");
  //  const [games , setGames] = useState<Game[]>([])

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="bg-[#1f2937] pb-3">
        <View className="px-4 pt-3 flex-row justify-center items-center">
          <View className="flex-1">
            <Text className="text-gray-300 text-sm">
              {moment().format("h:mm A")}
            </Text>
            <Text className="text-white text-lg font-semibold">
              Sahakr Nagaar, Bengaluru{" "}
            </Text>
          </View>
          <View className="flex-row items-center gap-3">
            <MessageCircle color="white" size={22} />
            <Bell color="white" size={22} className="" />
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/1486366?v=4",
              }}
              className="w-8 h-8 rounded-full "
            />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 px-4  "
        >
          {[
            "Calendar",
            "Recommended",
            "My Sports",
            "Other Sports",
            "Past Games",
          ].map((item, index) => (
            <TouchableOpacity onPress={()=>setSelectedCategory(item as "Calendar" | "Recommended" | "My Sports" | "Other Sports" | "Past Games")} className="mr-6" key={index}>
              <Text
                className={`text-base font-bold ${selectedCategory === item ? "text-green-400" : "text-white"} `}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({});
