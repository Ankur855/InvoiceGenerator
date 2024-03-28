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
      if(userid.toLowerCase()=="kartikey@gmail.com"&&password=="12345678"){
        await AsyncStorage.setItem("email-id", userid);
        await AsyncStorage.setItem("password", password);
        props.navigation.replace("No Internet")
      }
      else {
        alert("Enter User Id & Password")
      }
      } catch (error) {
        console.log(error);
      }
      // const savedUser = await AsyncStorage.getItem("user");
      // const currentUser = JSON.parse(savedUser);
      // console.log(currentUser);
      
    } 

  return (
    <SafeAreaView style={{alignItems:"center",flex:1,backgroundColor:"#fff"}}>
      <Image source={require('../../assets/logoInvoice.jpg')} style={{alignItems:"flex-end",backgroundColor:"red",marginTop:30}} ></Image>
      <View style={{alignItems:"center",height:220,width:"90%",justifyContent:"flex-start",marginTop:22,flex:1}}>
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
      </View>

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
