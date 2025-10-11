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
import {
  Bell,
  Filter,
  MessageCircle,
  SlidersHorizontal,
} from "lucide-react-native";

const PlayScreen = () => {
  const route = useRoute();
  const [selectedCategory, setSelectedCategory] = useState<
    "Calendar" | "Recommended" | "My Sports" | "Other Sports" | "Past Games"
  >("My Sports");
  const [selectedSport, setSelectedSport] = useState<string>("All");
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
            <TouchableOpacity
              onPress={() =>
                setSelectedCategory(
                  item as
                    | "Calendar"
                    | "Recommended"
                    | "My Sports"
                    | "Other Sports"
                    | "Past Games"
                )
              }
              className="mr-6"
              key={index}
            >
              <Text
                className={`text-base font-bold ${selectedCategory === item ? "text-green-400" : "text-white"} `}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 px-4  "
        >
          {[
            { name: "All", icon: "🌐" },
            { name: "Cycling", icon: "🚴" },
            { name: "Badminton", icon: "🏸" },
            { name: "Cricket", icon: "🏏" },
            { name: "Running", icon: "🏃" },
            { name: "Football", icon: "⚽" },
          ].map((sport, index) => (
            <TouchableOpacity
              onPress={() => setSelectedSport(sport.name)}
              key={index}
              className={`mr-3 px-3 py-2  rounded-full  flex-row items-center ${selectedSport == sport.name ? "bg-green-500" : "bg-white border border-gray-200"} `}
            >
              <Text className="mr-2">{sport.icon}</Text>
              <Text className="text-base text-gray-900">{sport.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View className="bg-white px-4 py-3 flex-row justify-between items-center border-b border-gray-200">
        <TouchableOpacity className="bg-slate-100 px-4 py-2 rounded-xl">
          <Text className="text-base font-semibold text-gray-700">+ create game</Text>
        </TouchableOpacity>

        <View className="flex-row items-center gap-4">
          <TouchableOpacity>
            <SlidersHorizontal size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Filter size={22} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({});
