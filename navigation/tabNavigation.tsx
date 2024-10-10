import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Register from '../src/screens/register';
import HomeScreen from '../src/screens/HomeScreen';
import { Login } from '../src/screens/login';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';


const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
    const navigation = useNavigation()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerShown:false,
        headerTitle:"SK EnterPrises",
        headerStyle: {
          backgroundColor: '#3a746b',
          height:80
          // alignSelf:"center"
          
        },
        headerRight:()=>(
         <View>
          <Text style={{color:"#fff",padding:2}}>
            {moment(new Date()).format("DD/MM/YYYY")}
          </Text>
         </View>
        ),
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }
        if(route.name==='AddItem'){
            return (<TouchableOpacity
            style={styles.touchableStyle}
            onPress={()=> navigation.navigate('No Internet')}>
            <Text style={{color: '#fff', fontSize: 40, textAlign: 'center'}}>
              +
            </Text>
          </TouchableOpacity>)
        }
          return <View>
            <Text>Home</Text>
          </View>;
        },
        tabBarShowLabel:false,
        tabBarActiveTintColor: '#673ab7',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Register} />
      <Tab.Screen name ='AddItem' component={Register}/>
      <Tab.Screen name="Settings" component={Login} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    },
    touchableStyle: {
      backgroundColor: '#dd2049',
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    //   marginBottom: 100,
      height: 60,
      width: 60,  
    },
  });
