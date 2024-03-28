import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect } from 'react';
import Header from './components/Header';
import moment from 'moment';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Register = ({navigation}) => {
  const renderData = [
    {
      id: 1,
      name: 'hsdgh',
      Date: moment(new Date()).format('DD/MM/YYYY'),
      Amount: '2000',
      ModeOfPayment: 'online',
    },
    {
      id: 2,
      name: 'hsdgh',
      Date: moment(new Date()).format('DD/MM/YYYY'),
      Amount: '2000',
      ModeOfPayment: 'online',
    },
    {
      id: 3,
      name: 'hsdgh',
      Date: moment(new Date()).format('DD/MM/YYYY'),
      Amount: '2000',
      ModeOfPayment: 'online',
    },
    {
      id: 4,
      name: 'hsdgh',
      Date: moment(new Date()).format('DD/MM/YYYY'),
      Amount: '2000',
      ModeOfPayment: 'online',
    },
  ];
  return (
    <View style={styles.container}>
      {/* <View style={{width:"100%",paddingVertical:18}}>
        <FlatList data={renderData} horizontal    renderItem={({item, index}) =>( <>
          
            <Card style={{backgroundColor:"#fff", padding:8,
    marginVertical: 8,
    marginHorizontal: 16,width:220}} elevation={1}>
  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={{fontWeight:"bold",fontSize:18,color:"#3a746b"}}>{item.name}</Text>
      <Text style={{fontWeight:"bold",fontSize:12,color:"#3a746b"}}>{item.Date}</Text>
      </View>
            <Text >{item.Amount}</Text>
            <Text>{item.ModeOfPayment}</Text>
            <Text>{item.name}</Text>
            </Card>
            
        </>)} />
      </View> */}
      {/* <Header></Header> */}
      {/* <Text>register</Text> */}
      <View style={{alignItems:"flex-end",flex:1,justifyContent:"flex-end",padding:8}}>
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={() => {
          navigation.navigate('Login');
          console.log('j');
        }}>
        <Text style={{color: '#fff', fontSize: 40, textAlign: 'center'}}>
          +
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchableStyle: {
    backgroundColor: '#dd2049',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    height: 60,
    width: 60,  
  },
});
