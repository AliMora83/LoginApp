import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import SignUpScreen from "./screens/SignUp";
import firebase from "firebase/app";
import "firebase/auth";

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const firebaseConfig = {
    apiKey:
      "AIzaSyDqw2SYZJIDadrsiVCEXZfj8TmF6ttCVe8",
    authDomain: "edutech-f4ece.firebaseapp.com",
    databaseURL:
      "https://edutech-f4ece-default-rtdb.firebaseio.com",
    projectId: "edutech-f4ece",
    storageBucket: "edutech-f4ece.appspot.com",
    messagingSenderId: "450823695942",
    appId:
      "1:450823695942:web:92480f6beeec66cf826447",
    measurementId: "G-LKQRT84P1Q",
  };

  // const app = initializeApp(firebaseConfig);

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
