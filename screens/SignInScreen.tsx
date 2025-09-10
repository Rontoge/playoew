import { StyleSheet, Text, View, Image, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

const SignInScreen = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Image
        resizeMode="contain"
        className="w-24 h-24 mb-4"
        source={{
          uri: "https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png",
        }}
      />
      <Text className="text-2xl font-bold text-gray-800 mb-1">
        Welcome Back
      </Text>
      <Text className="text-base mb-6 font-bold text-gray-500">
        Sign in to continue
      </Text>
      <TextInput
        value={emailAddress}
        onChangeText={setEmailAddress}
        placeholder="Email or Phone"
        placeholderTextColor={"#aaa"}
        className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4 text-base"
        style={{
          width: "100%",
          padding: 12,
          marginVertical: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 24,
        }}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Enter Password"
        placeholderTextColor={"#aaa"}
        className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4 text-base"
        style={{
          width: "100%",
          padding: 12,
          marginVertical: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 24,
        }}
      />
      {error&&<Text className="text-red-500 font-medium">{error}</Text>}

      <Pressable>
        
      </Pressable>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
