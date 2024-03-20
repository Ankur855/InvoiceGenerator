import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {Image, ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Card, Modal, TextInput} from 'react-native-paper';
interface Props {}

export const StaticLogin = (props: Props) => {
  const [userid,setUserId]=useState('')
  const [password,setPassword]=useState('')
  const handleLogin =async ()=>{
    try {
      try {
        await AsyncStorage.setItem("Email-id", userid);
        await AsyncStorage.setItem("Password", password);
      } catch (error) {
        console.log(error);
      }
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      console.log(currentUser);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={{alignItems:"center",justifyContent:"center",flex:1}}>
      <Card elevation={1} style={{ backgroundColor:"#fff",height:220,width:"90%",justifyContent:"center",padding:12}}>
      <TextInput
            label="User-Id"
            value={userid}
            keyboardType="default"
            onChangeText={text => setUserId(text)}
            style={{...styles.commonTextInputSyle}}
          />
      {/* <Card> */}
      <TextInput
            label="Password"
            value={password}
            keyboardType="numeric"
            onChangeText={text => setPassword(text)}
            style={{...styles.commonTextInputSyle}}
          />

          <Button style={{backgroundColor:"#df5b3e",marginTop:12}}onPress={()=> handleLogin()} textColor="#fff">Login</Button>
      </Card>

        {/* <ImageBackground source={require("../../assets/logoInvoice.jpg")}> */}
      
    
        {/* <Image source={require("../../assets/logoInvoice.jpg")} resizeMode="center" style={{height:200,width:"100%"}}></Image> */}
    
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  commonTextInputSyle: {marginVertical: 8, backgroundColor: '#fff'},
  touchableStyle: {backgroundColor:"#2596be", padding: 8, borderRadius: 8},
});
