import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useSignUp } from "@clerk/clerk-expo";
import { useUserOnboarding } from "../contexts/UserOnboardingContext";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    setSports,
    sports: selected,
    firstName,
    lastName,
    image,
  } = useUserOnboarding();

  console.log("Selected sports on load:", selected);

  const onSignUpPress = async () => {
    if (!isLoaded || loading) return;
    setLoading(true);
    setError("");
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err: any) {
      console.log("Error during sign up: ", err);
      setError(err?.errors?.[0].message);
    } finally {
      setLoading(false);
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded || loading) return;
    setLoading(true);

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (signUpAttempt.status === "complete") {
        try {
          const payload = {
            clerkId: signUpAttempt.createdUserId,
            email: signUpAttempt?.emailAddress,
            firstName,
            lastName,
            image,
            sports: selected, // i was here you need to fix logic before you continue OK
          };

          const res = await axios.post(
            "http://192.168.100.120:3001/api/users/create-or-update",
            payload
          );
          if (res.data.success) {
            await setActive({ session: signUpAttempt.createdSessionId });
            console.log("Session set, isSignedIn should be true");
           
          }
        } catch (err: any) {
          console.log("Error during verification: ", err);
        }
      }
    } catch (err: any) {
      console.log("Error during verification: ", err);
      setError(err?.errors?.[0]?.message);
    } finally {
      setLoading(false);
    }
  };

  if (pendingVerification) {
    return (
      <View className="flex-1 justify-center px-6 bg-white">
        <Text className="text-center mb-2 text-xl">
          {" "}
          A Verification code has been sent to{" "}
          <Text className="text-blue-600">{emailAddress}</Text>
        </Text>
        <Text className="text-center mt-2 text-base">verify You Email</Text>

        <TextInput
          placeholder="Enter Verification Code"
          value={code}
          onChangeText={setCode}
          style={{
            width: "100%",
            padding: 12,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
          }}
          keyboardType="number-pad"
          autoCapitalize="none"
        />

        {error ? (
          <Text className="text-sm text-red-400 mb-4">{error}</Text>
        ) : null}

        <TouchableOpacity
          onPress={onVerifyPress}
          disabled={loading}
          className="bg-black py-4 rounded-xl flex-row justify-center items-center"
        >
          {loading && (
            <ActivityIndicator size="small" color="#00ff00" className="mr-2" />
          )}
          <Text className="text-white text-center font-bold">Verify</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center px-4 bg-white">
      <View className="items-center mb-6">
        <Image
          resizeMode="contain"
          className="w-24 h-24 mb-4"
          source={{
            uri: "https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png",
          }}
        />

        <Text className="text-lg font-semibold text-gray-800 ">
          Welcome to playo
        </Text>
        <Text className="text-sm text-gray-500">
          {" "}
          Create An Account To Get Started
        </Text>
      </View>

      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter Email"
          style={{
            width: "100%",
            padding: 12,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          value={emailAddress}
          onChangeText={setEmailAddress}
        />
      </View>

      <View>
        <Text>Password</Text>
        <TextInput
          placeholder="Enter Password"
          style={{
            width: "100%",
            padding: 12,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
          }}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {error ? (
        <Text className="text-sm text-red-400 mb-4">{error}</Text>
      ) : null}

      <TouchableOpacity
        onPress={onSignUpPress}
        className="w-full bg-green-600 rounded-xl p-4 flex-row justify-center items-center"
      >
        {loading && (
          <ActivityIndicator size="small" color="#00ff00" className="mr-2" />
        )}
        <Text className="text-white text-pretty text-center font-bold text-base">
          Continue ...
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4">
        <Text className="text-center test-sm text-gray-500">
          Already have an account?{" "}
          <Text className="font-semibold text-black">Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
