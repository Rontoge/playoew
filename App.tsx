import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import RootNavigator from "./navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Clerk, ClerkProvider } from "@clerk/clerk-expo";
import * as SecureStore from 'expo-secure-store';


const tokenCache= {
  async getToken(key: string) {
    try{
        return  await SecureStore.getItemAsync(key);
    }catch(err){
      return null;
    }
  },

  async saveToken(key: string, value: string) {
    try{
        return await SecureStore.setItemAsync(key, value);
    }catch(err){
      return ;
    }
  }

}

export default function App() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey="pk_test_dG91Y2hlZC1kaW5nby03Ni5jbGVyay5hY2NvdW50cy5kZXYk">
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
