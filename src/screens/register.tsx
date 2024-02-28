import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './components/Header'
const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Header></Header> */}
      {/* <Text>register</Text> */}
      <TouchableOpacity style={styles.touchableStyle} onPress={()=>{navigation.navigate('Login')
    console.log("j")}}><Text style={{color:"#fff"}}>Create Bill</Text></TouchableOpacity>
    </View>
  )
}

export default Register
const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent:"center",
   alignItems:"center"
  },
  touchableStyle:{backgroundColor:"#6495ed",padding:8,borderRadius:8,}
})