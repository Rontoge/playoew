import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Bell, MessageCircle } from "lucide-react-native";

const Homescreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <View>
          <Text>Location</Text>
          <Text>Shakar, Bengaluru</Text>
        </View>
        <View>
           <MessageCircle size={20} stroke='#333 ' />
           <Bell size={20} stroke='#333 ' />
           <Pressable>
            <Image source={{uri :""}}/>
           </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
