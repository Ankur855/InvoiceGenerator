import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import moment from 'moment';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommanTiles from './components/CommanTiles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { onValue, ref } from 'firebase/database';
import { db } from '../../firebase-config';
import { RootStackParamList } from '../../navigation/stackNavigation';
const Register = () => {
  const  [data,setData]=useState([])
  const navigation=useNavigation<NavigationProp<RootStackParamList>>()
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

  useEffect(()=>{
    onValue(ref(db, '/billDetails'), querySnapShot => {
      let data = querySnapShot.val() || {};
      let todoItems = {...data};
      // console.log(Object.values(todoItems))
    let finalData : unknown[]= Object.values(todoItems)
console.log(finalData,"finalData")
      setData(finalData)
    });
  },[])
 const renderItem=({item}:{item:any})=>{
  console.log(item,"item")
  return(
<TouchableOpacity style={{flexDirection:'row',flex:1,borderBottomWidth:.5,padding:8,paddingHorizontal:8}} onPress={()=>navigation.navigate('InvoiceScreen')}>
<View style={{height:50,width:50,borderColor:'grey',borderWidth:1,borderRadius:12,alignItems:"center",justifyContent:"center",backgroundColor:'#3a746b'}}>
<Text style={{fontSize:24,fontWeight:"bold",color:'#fff'}}>TJ</Text>
</View>
<View style={{flexDirection:'column',padding:8,flex:1}}>
<Text numberOfLines={1} style={{fontSize:16,fontWeight:"600",}}>{item.name}</Text>
<Text>24 April 2024</Text>
</View>
<Text style={{textAlign:"right",alignSelf:"center"}}> RS {item.itemDetails[0].Price}</Text>
</TouchableOpacity>
  )
  }
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:40,paddingHorizontal:16}}>
         <CommanTiles/>
      <CommanTiles/>
      </View>
      <View style={{padding:12,flex:1}}>
        <Text style={{fontSize:16,fontWeight:"bold"}}>INVOICE</Text>
        <View style={{flex:1}}>
        <FlatList
        contentContainerStyle={{}}
        data={data}
        renderItem={(item)=>renderItem(item)}
        />
        </View>
      </View>
     
      <View style={{alignItems:"flex-end",flex:1,justifyContent:"flex-end",padding:8}}>
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={()=>navigation.navigate('Login')}>
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
