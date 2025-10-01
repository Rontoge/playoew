import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
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
const {setSports , sports:selected , firstName , lastName , image} = useUserOnboarding();


  return (
    <View>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
