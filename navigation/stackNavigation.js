import { Alert, Button, StatusBar, Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from '../src/screens/HomeScreen';
import Register from '../src/screens/register';
import { Login } from '../src/screens/login';
import HomeScreen from '../src/screens/HomeScreen';
import Pdf from '../src/screens/components/Pdf';
import Pdf1 from '../src/screens/components/Pdf';
import { StaticLogin } from '../src/screens/StaticLogin';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Expiry from '../src/screens/components/Expiry';
const Stack = createStackNavigator();

const StackNavigation =({})=> {
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const [initaialRoutes,setInitialRoutes]=useState('')
  const [expired,setExpired]=useState(false)
    useEffect(()=>{
      getData()
    },[])
    const getData=async ()=>{
      const email = await AsyncStorage.getItem("email-id");
      const password = await AsyncStorage.getItem("password");
    
     if(email&&password){
        setInitialRoutes("No Internet")
      }
      else{
        setInitialRoutes("LoginPage")
      }
      console.log(password,email,"emaill")
    }
    return (
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator initialRouteName= {initaialRoutes} >
          {/* <Stack.Navigator initialRouteName= {password&&email?'No Internet':'LoginPage'} > */}
            <Stack.Screen name="No Internet" component={Register} 
            
               options={{
                // headerShown:false,
                // headerStyle: {
                //   backgroundColor: '#4c00b0',
                //   height: 120,
                // }
                // headerTitleAlign:"center",
                headerTitle:"SK EnterPrises",
                headerStyle: {
                  backgroundColor: '#3a746b',
                  height:80
                  // alignSelf:"center"
                  
                },
                headerRight:()=>(
                 <View>
                  <Text style={{color:"#fff",padding:12}}>
                    {moment(new Date()).format("DD/MM/YYYY")}
                  </Text>
                 </View>
                ),
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                // headerTitle: (props) => <LogoTitle {...props} />,
                // headerLeft: () => (
                //   <Feather
                //     onPress={() => alert('This is a button!')}
                //     name={'arrow-left'}
                //     size={25}
                //     color="black"
                //   />
                // ),
              }}
            
            />
            <Stack.Screen name="Register" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login}  options={{
                // headerShown:false,
                // headerStyle: {
                //   backgroundColor: '#4c00b0',
                //   height: 120,
                // }
                // headerTitleAlign:"center",
                headerTitle:"Generate Bill",
                headerStyle: {
                  backgroundColor: '#3a746b',
                  height:80
                  // alignSelf:"center"
                  
                },
                headerRight:()=>(
                 <View>
                  <Text style={{color:"#fff",padding:12}}>
                    {moment(new Date()).format("DD/MM/YYYY")}
                  </Text>
                 </View>
                ),
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                // headerTitle: (props) => <LogoTitle {...props} />,
                // headerLeft: () => (
                //   <Feather
                //     onPress={() => alert('This is a button!')}
                //     name={'arrow-left'}
                //     size={25}
                //     color="black"
                //   />
                // ),
              }}/>
            <Stack.Screen name="PDF" component={Pdf1} />
            <Stack.Screen name="LoginPage" component={StaticLogin} options={{headerShown:false}} />
            <Stack.Screen name="Expiry" component={Expiry} />
          </Stack.Navigator>
          </NavigationContainer>
        );
      }


export default StackNavigation