import { StyleSheet, Text, View, Pressable, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Bell, MessageCircle } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Homescreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 py-3 bg-white flex-row justify between items-center border-b border-gray-200">
        <View className="flex-1">
          <Text className="text-gray-400 text-xs">Location</Text>
          <Text className=" text-lg font-semibold">Shakar, Bengaluru</Text>
        </View>
        <View className="flex-row items-center gap-4 ml-2 pt-2">
          <MessageCircle size={20} stroke="#000000" />
          <Bell size={20} stroke="#000000" />
          <Pressable>
            <Image
            className="w-8 h-8 rounded-full"
              source={{
                uri: "https://yt3.ggpht.com/yti/ANjgQV-f08FSrHuPiTks--f7yhL7dyX78mH2Hk4jowvMTRCnEpg=s88-c-k-c0x00ffffff-no-rj",
              }}
            />
          </Pressable>
        </View>
      </View>

      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        <View className="bg-[#F4F4F4] rounded-2xl mt-4 p-4 flex-row items-center justify-between">
          <View>
              <Text className="text-lg font-semibold">
                Set your Weekly Fit Goal 🔥
              </Text>
              <Text className="text-sm text-gray-500 mt-1">
                Keep Yourself Fit
              </Text>
          </View>
          <Text className="text-3xl">🏃‍♂️</Text>
        </View>
        <View>
          <Text>
            START PLAYING 
          </Text>
          <View> 
            <Text>Create Game</Text>
            <Text>No Upcoming Games In Your Calnader</Text>
          </View>
          <TouchableOpacity>
            <Text>
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
