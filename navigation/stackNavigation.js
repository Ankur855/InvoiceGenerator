import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from '../src/screens/HomeScreen';
import Register from '../src/screens/register';
import { Login } from '../src/screens/login';
const Stack = createStackNavigator();
export class StackNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="No Internet" component={Homescreen}/>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
          </NavigationContainer>
        );
      }
    
  }


export default StackNavigation