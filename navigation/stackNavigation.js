import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from '../src/screens/HomeScreen';
import Register from '../src/screens/register';
import { Login } from '../src/screens/login';
import HomeScreen from '../src/screens/HomeScreen';
import Pdf from '../src/screens/components/Pdf';
import Pdf1 from '../src/screens/components/Pdf';
const Stack = createStackNavigator();
export class StackNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='No Internet' >
            <Stack.Screen name="No Internet" component={Register} 
            
               options={{
                headerShown:false,
                // headerTitle: (props) => <LogoTitle {...props} />,
                headerLeft: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#fff"
                  />
                ),
              }}
            
            />
            <Stack.Screen name="Register" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="PDF" component={Pdf1} />
          </Stack.Navigator>
          </NavigationContainer>
        );
      }
    
  }


export default StackNavigation