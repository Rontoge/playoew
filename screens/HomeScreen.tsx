import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Bell, MessageCircle } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Homescreen = () => {
  const navigation = useNavigation();
  const spotlightData = [
    {
      id: "10",
      image:
        "https://playov2.gumlet.io/v3_homescreen/marketing_journey/Tennis%20Spotlight.png",
      text: "Learn Tennis",
      description: "Know more",
    },
    {
      id: "11",
      image:
        "https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_08.png",
      text: "Up Your Game",
      description: "Find a coach",
    },
    {
      id: "12",
      image:
        "https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_03.png",
      text: "Hacks to win",
      description: "Yes, Please!",
    },
    {
      id: "13",
      image:
        "https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_02.png",
      text: "Spotify Playlist",
      description: "Show more",
    },
  ];

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
        <View className=" bg-white border border-gray-300 rounded-2xl p-4 mt-4 shadow-slate-800 shadow-md relative">
          <Text className="text-sm text-gray-500 font-semibold">
            START PLAYING
          </Text>
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-xl font-semibold mt-2">Create Game</Text>
              <Text className="text-base text-gray-500 mt-1">
                No Upcoming Games In Your Calnader
              </Text>
            </View>
            <TouchableOpacity className="bg-white px-4 py-1.5 border border-gray-300 rounded-full">
              <Text className=" text-base font-semibold text-amber-950">
                Create
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="mt-3 self-center">
            <Text className="text-[#222] font-bold underline text-base">
              View my calendar
            </Text>
          </TouchableOpacity>
        </View>

        <View className=" bg-[#F9FAFB] mt-5 rounded-2xl p-4 space-y-4">
          <TouchableOpacity className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className=" bg-green-100 p-2 rounded-full">
                <Text className="text-xl">👥</Text>
              </View>

              <View>
                <Text className=" font-semibold text-lg text-gray-300">
                  Groups
                </Text>
                <Text className="text-sm text-gray-500">
                  Connect ,Compete and Discuss{" "}
                </Text>
              </View>
            </View>
            <Text className="text-xl text-gray-400">≻</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between mt-6">
            <View className="flex-row items-center gap-3">
              <View className=" bg-yellow-100 p-2 rounded-full">
                <Text className="text-xl">💡</Text>
              </View>

              <View>
                <Text className=" font-semibold text-lg text-gray-300">
                  GameTime Activities
                </Text>
                <Text className="text-sm text-gray-500">
                  410 Playo Hosted Games
                </Text>
              </View>
            </View>
            <Text className="text-xl text-gray-400">≻</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between mt-5">
          <TouchableOpacity className="w-[48%] bg-white  border border-gray-200 rounded-2xl p-4">
            <Text className="font-semibold text-base text-black  ">
              Bookings
            </Text>
            <Text className=" text-sm text-gray-500">Games History</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[48%] bg-white  border border-gray-200 rounded-2xl p-4">
            <Text className="font-semibold  text-base text-black">
              Playpals
            </Text>
            <Text className="text-sm text-gray-500">Manage Players</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-xl font-bold mt-6 mb-2">SpotLight</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {spotlightData.map((item, index) => (
            <TouchableOpacity className="mr-4 bg-white rounded-xl w-48 overflow-hidden shadow-sm" key={item.id}>
              <Image
                resizeMode="cover"
                className="w-full h-56"
                source={{ uri: item.image }}
              />

              <View className="p-3 ">
                <Text className="font-bold text-gray-800 text-base">{item?.text}</Text>
                <Text className="text-sm text-gray-600">{item?.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View className="items-center mt-5 mb-6">
          <Text className="text-sm text-gray-500">Follow Us On</Text>
          <View className="flex-row gap-6 mt-3">
            <Text  className="text-lg">📷</Text>
            <Text  className="text-lg">💼</Text> 
            <Text  className="text-lg">🦜</Text> 
           
          </View>
        </View>

        <View className="bg-[#F9FAFB] rounded-2xl p-4 mb-6 flex-row items-center">

          <View className="bg-gray-300 p-3 rounded-full mr-4">
            <Text className="text-lg">🎁</Text>
          </View>
          <View className="flex-1">
            <Text className="font-semibold text-base">Refer A Sports Ethusiast</Text>
            <Text className="text-sm text-gray-600">Earn Rewards <Text className="text-blue-700">50 karma Points</Text> by refering your friends</Text>
          </View>
        </View>

        <View className="items-center mb-10 mt-4">
          <Text className="text-2xl text-[#14b8a6]"> PLAYO</Text>
          <Text className="text-sm text-gray-500 mt-1"> Your Sports Community App</Text>


          <View className="flex-row items-center gap-1 mt-3">
            <TouchableOpacity>
              <Text  className="text-sm text-blue-500">Privacy Policy </Text>
            </TouchableOpacity>
            <Text className="text-gray-400">.</Text>
            <TouchableOpacity>
              <Text className="text-sm text-blue-500">Terms of Service</Text>
            </TouchableOpacity>
                        <TouchableOpacity>
              <Text className="text-sm text-blue-500">FAQs</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
