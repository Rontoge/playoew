import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Book,
  Calendar,
  Edit,
  Gift,
  HelpCircle,
  LogOut,
  Settings,
  Share,
  Share2,
  Users,
  Wallet,
} from "lucide-react-native";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView>
        <View className="bg-[#294461] p-4 pb-8">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Image
                className="w-16 h-16 rounded-2xl mr-4"
                source={{
                  uri: "https://yt3.ggpht.com/yti/ANjgQV-f08FSrHuPiTks--f7yhL7dyX78mH2Hk4jowvMTRCnEpg=s88-c-k-c0x00ffffff-no-rj",
                }}
              />
              <View>
                <Text className="text-white font-semibold text-xl">
                  John Doe
                </Text>
                <Text className="text-white text-sm"> 150 Larma points</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Edit color={"white"} size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-4 mt-4">
          <View className="bg-white rounded-xl p-4 shadow-sm">
            <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-12 h-12 rounded-full bg-gray-500/20 items-center justify-center mr-4">
                <Calendar color={"green"} size={24} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-700 text-base font-semibold ">
                  My Bookings
                </Text>
                <Text className="text-gray-500 text-sm">
                  View Transactions & Reciepts
                </Text>
              </View>
            </TouchableOpacity>
            <View className="h-px bg-gray-200 my-2" />

            <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-12 h-12 rounded-full bg-gray-500/20 items-center justify-center mr-4">
                <Users color={"green"} size={24} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-700 text-base font-semibold ">
                  Play Pals
                </Text>
                <Text className="text-gray-500 text-sm">
                  View & Manage players
                </Text>
              </View>
            </TouchableOpacity>
            <View className="h-px bg-gray-200 my-2" />

            <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-12 h-12 rounded-full bg-gray-500/20 items-center justify-center mr-4">
                <Wallet color={"green"} size={24} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-700 text-base font-semibold ">
                  PassBook{" "}
                </Text>
                <Text className="text-gray-500 text-sm">
                  Manage Karma ,Playo Credits{" "}
                </Text>
              </View>
            </TouchableOpacity>
            <View className="h-px bg-gray-200 my-2" />

            <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-12 h-12 rounded-full bg-gray-500/20 items-center justify-center mr-4">
                <Settings color={"green"} size={24} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-700 text-base font-semibold ">
                  Preference and Privacy
                </Text>
                <Text className="text-gray-500 text-sm">
                  Manage Your Settings
                </Text>
              </View>
            </TouchableOpacity>
            <View className="h-px bg-gray-200 my-2" />
          </View>
        </View>

        <View className="px-4 mt-4 mb-6">
          <View className="bg-white rounded-xl p-4 shadow-sm">
            <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-12 h-12 rounded-full bg-gray-500/20 items-center justify-center mr-4">
                <Gift color={"green"} size={24} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-700 text-base font-semibold ">
                  Offers
                </Text>
                <Text className="text-gray-500 text-sm">
                  View Available Discounts
                </Text>
              </View>
            </TouchableOpacity>
            <View className="h-px bg-gray-200 my-2" />

            <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-12 h-12 rounded-full bg-gray-500/20 items-center justify-center mr-4">
                <Book color={"green"} size={24} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-700 text-base font-semibold ">
                  Blog
                </Text>
                <Text className="text-gray-500 text-sm">
                  Read Latest Articles
                </Text>
              </View>
            </TouchableOpacity>
            <View className="h-px bg-gray-200 my-2" />

            <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-12 h-12 rounded-full bg-gray-500/20 items-center justify-center mr-4">
                <Share2 color={"green"} size={24} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-700 text-base font-semibold ">
                  Invite And Earn{" "}
                </Text>
                <Text className="text-gray-500 text-sm">
                  Manage Karma ,Playo Credits{" "}
                </Text>
              </View>
            </TouchableOpacity>
            <View className="h-px bg-gray-200 my-2" />

            <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-12 h-12 rounded-full bg-gray-500/20 items-center justify-center mr-4">
                <HelpCircle color={"green"} size={24} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-700 text-base font-semibold ">
                  Help & Support{" "}
                </Text>
                <Text className="text-gray-500 text-sm">Get Assistance</Text>
              </View>
            </TouchableOpacity>
            <View className="h-px bg-gray-200 my-2" />

             <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-12 h-12 rounded-full bg-gray-500/20 items-center justify-center mr-4">
                <LogOut color={"red"} size={24} />
              </View>
              <View className="flex-1">
                <Text className="text-red-700 text-base font-semibold ">
                  Logout
                </Text>
                <Text className="text-gray-500 text-sm">Sign Out You Account</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
