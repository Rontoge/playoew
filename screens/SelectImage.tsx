import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MotiView } from "moti";
import { cssInterop } from "nativewind";

const StyledYourComponent = cssInterop(TextInput, {
  className: "style",
});
interface imageItem {
  id: String;
  image: string;
}
const SelectImage = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState("");
  const [focused, setFocused] = useState(false);

  const images: imageItem[] = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/16683/16683469.png",
    },
    {
      id: "1",
      image: "https://cdn-icons-png.flaticon.com/128/16683/16683439.png",
    },
    {
      id: "2",
      image: "https://cdn-icons-png.flaticon.com/128/4202/4202835.png",
    },
    {
      id: "3",
      image: "https://cdn-icons-png.flaticon.com/128/3079/3079652.png",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-6">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="">
        <View className="items-center mt-10">
          <Text className="text-2xl font-bold text-green-600">
            Choose your Avatar
          </Text>
          <Text className="text-base text-gray-600 mt-2">
            Pick One or upload your own
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-between mt-10">
          {images.map((avatar, index) => (
            <Pressable
              key={index}
              onPress={() => setImage(avatar.image)}
              className={`w-20 h-20 rounded-full overflow-hidden border-2 ${
                image === avatar.image ? "border-green-600" : "border-gray-300"
              }`}
            >
              <Image className="w-full h-full" source={{ uri: avatar.image }} />
            </Pressable>
          ))}
        </View>

        <View className="mt-10 items-center  ">
          <MotiView
            from={{
              scale: 1,
              borderColor: "#d1d5db", // gray-300
              shadowOpacity: 0,
              shadowRadius: 0,
            }}
            animate={{
              scale: focused ? 1.05 : 1,
              borderColor: focused ? "#16a34a" : "#d1d5db", // green-600
              shadowOpacity: focused ? 0.5 : 0,
              shadowRadius: focused ? 6 : 0,
              shadowColor: "#16a34a", // glow color
            }}
            transition={{ type: "timing", duration: 250 }}
            className=" w-96 border rounded-xl mb-3"
          >
            <StyledYourComponent
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="w-full h-12 border border-gray-300 rounded-xl px-4 text-base bg-white "
              placeholder="Enter Image URL(optional)"
              autoCapitalize="none"
              value={image}
              onChangeText={setImage}
            />
          </MotiView>

          <Text className="text-xs text-gray-500 text-center">
            Acceptance ratae is 2.5x higher for users with profile image
          </Text>
        </View>


        <View className="absolute bottom-6 w-full items-center">
          <Pressable 
          onPress ={() => navigation.navigate("GameSelection" as never)}
          className={`w-4/5 h-12 rounded-xl items-center justify-center ${
            image ? "bg-green-600" : "bg-green-300"
          }
            `}>
              <Text className="text-white text-lg font-semibold">
                Next
              </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectImage;

const styles = StyleSheet.create({});
