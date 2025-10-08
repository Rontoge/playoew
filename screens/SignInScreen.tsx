import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useSignIn } from "@clerk/clerk-expo";
import { set } from "mongoose";
import { G } from "react-native-svg";
import GoogleSignIn from "../components/GoogleSignIn";

const SignInScreen = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {signIn , setActive, isLoaded} = useSignIn();
  const onSignInPress = async () => {
      if(!isLoaded || loading) return;
      setLoading(true);
      setError("");

      try {
        const signInAttempt = await signIn.create({
          identifier: emailAddress,
          password,
        });

        if (signInAttempt.status === "complete") {
          await setActive({ session: signInAttempt.createdSessionId });
        }else{
          console.error("Sign in not complete");
        }
        
      } catch (err :any) {
        console.error("SIGN iN ERROR", error);
        setError(err?.errors?.[0]?.message );
      }finally{
        setLoading(false);
      }
  }

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
      {error && <Text className="text-red-500 font-medium">{error}</Text>}

      <Pressable onPress={onSignInPress} className="w-full bg-green-600 py-3 rounded-xl flex-row justify-center items-center">
        {loading ? (
          <ActivityIndicator
            size={"small"}
            color={"#ffffff"}
            className="mr-2"
          />
        ) : (
          <Text className="text-white text-center font-semibold text-md">Sign In</Text>
        )}
      </Pressable>

      <View  className="flex-row items-center w-full my-3" >
        <View className="flex-1 h-[1px] bg-gray-300"/>
        <Text className="mx-2 text-gray-200">OR</Text>
        <View  className="flex-1 h-[1px] bg-gray-300"/>
      </View>

      <GoogleSignIn />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
