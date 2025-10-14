import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Entypo,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { TextIcon } from "lucide-react-native";

const CreateActivityScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sport, setSport] = useState("");
  const [date, setDate] = useState("");
  const [timeInterval, setTimeInterval] = useState("");
  const [selected, setSelected] = useState("public");
  const [noOfPlayers, setNoOfPlayers] = useState(null);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="px-4
        "
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text className="text-2xl font-bold mt-2 ">Create Activity</Text>
        <Pressable className="flex-row items-center gap-4 mt-6">
          <MaterialCommunityIcons name="whistle" size={24} color="gray" />
          <View className="flex-1">
            <Text className="text-lg font-medium ">Sport</Text>
            <TextInput
              value={sport}
              onChangeText={setSport}
              placeholder="Eg: Football, Cricket , tennis etc"
              placeholderTextColor={"gray"}
              className="mt-1 text-base"
            />
          </View>
          <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>

        <View className="border-b border-gray-300 my-4" />


        <Pressable className="flex-row items-center gap-4 ">
          <Entypo name="location" size={24} color="gray" />
          <View className="flex-1">
            <Text className="text-lg font-medium ">Area</Text>
            <TextInput
              value={sport}
              onChangeText={setSport}
              placeholder="Venue Name"
              placeholderTextColor={"gray"}
              className="mt-1 text-base text-black"
            />
          </View>
          <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
                <View className="border-b border-gray-300 my-4" />





      </ScrollView>



    </SafeAreaView>
  );
};

export default CreateActivityScreen;

const styles = StyleSheet.create({});
