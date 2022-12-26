import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect} from "react";
import SignIn from "./screen/SignIn";
import SignUp from "./screen/SignUp";
import HomeScreen from "./screen/HomeScreen";
import Header from "./components/Header";
import {firebase} from "./config";
import MoodPicker from './screen/MoodPicker';

const Stack = createStackNavigator();

function App(){
  const[initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if(initializing) return null;

  if(!user){
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false, // hide the header
        cardStyle: { backgroundColor: '#121212' },
      }}>
        <Stack.Screen 
        name="SignIn"
        component={SignIn}
        />
         <Stack.Screen 
        name="SignUp"
        component={SignUp}
        />
      </Stack.Navigator>
    );
  }
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false, // hide the header
      cardStyle: { backgroundColor: '#121212' },
    }}>
       <Stack.Screen 
        name="MoodPicker"
        component={MoodPicker}
        />
      <Stack.Screen 
        name="HomeScreen"
        component={HomeScreen}
        />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}