import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import { createAppContainer , createSwicthNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import RegisterScreen from './screens/RegisterScreen';
 
const Stack = createStackNavigator();
function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name="Loading" component={LoadingScreen} />
        </Stack.Navigator>
      <AppStack />
      <AuthStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 

