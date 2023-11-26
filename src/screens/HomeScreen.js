import { View, Text, Pressable, Alert, } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    console.log(navigation)

  }, [])
  const Onpress = () => {
    // navigation.navigate("Register")
    Alert.alert("notWorking")
    console.log(navigation)
  }
  return (
  <>
  <TouchableOpacity onPress={Onpress()}>
  </TouchableOpacity>
  </>
  )
}

export default HomeScreen