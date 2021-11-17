import { StatusBar } from 'expo-status-bar';
import React ,{Component}from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, SafeAreaView, Image,
         TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/Login';
import ViewPageScreen from './screens/ViewPage';
import RegistraionPage from './screens/Registration';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'LoginScreen'>
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{headerShown : false }}
        />
        <Stack.Screen name='ViewPageScreen' component={ViewPageScreen}
        options={{headerShown : false }} />
        <Stack.Screen name='RegistraionPage' component={RegistraionPage} 
        options={{headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App
