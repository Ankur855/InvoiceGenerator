import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper';

interface Props {
  
}

export const Login = ({navigation}) => {
const [email,setemail]=useState('')
const [name,setName]=useState('')
const [mobile,setMobile]=useState('')
const [item,setItem]=useState('')
const [gst,setGst]=useState('')
//   const CommonTextInput=(secureTextEntry,)=>{
//     return(
//       <View style={{}}>
//   <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, marginBottom: 5}}>{props.placeholder}</Text>
//   <TextInput
//     mode="outlined"
//     ref={textInput}
//     label={props.label || 'Email'}
//     secureTextEntry={secureTextEntry}
//     onChangeText={(text) => setText(text)}
//     returnKeyType={returnKeyType}
//     onSubmitEditing={onSubmitEditing}
//     multiline={multiline}
//     keyboardType={keyboardType}
//     value={text || value}
//     style={[
//       styles.inputStyle,
//       inputStyle,
//     ]}
//   />
// </View>
//     )
//   }

  return (
   <View>
    <TextInput
    label="Email"
    value={email}
    onChangeText={(text)=>setemail(text)}
    style={styles.commonTextInputSyle}
  />
    <TextInput
    label="Full Name"
    value={name}
    onChangeText={(text)=>setName(text)}
    style={styles.commonTextInputSyle}
  />
    <TextInput
    label="Mobile"
    value={mobile}
    onChangeText={(text)=>setMobile(text)}
    style={styles.commonTextInputSyle}
  />
    <TextInput
    label="Item Name"
    value={item}
    onChangeText={(text)=>setItem(text)}
    style={styles.commonTextInputSyle}
  />
    <TextInput
    label="Gst "
    value={gst}
    onChangeText={(text)=>setGst(text)}
    style={styles.commonTextInputSyle}
  />
<TouchableOpacity onPress={()=>{navigation.navigate("PDF")}}><Text>sfahjh</Text></TouchableOpacity>
   </View>
  )
}
const styles = StyleSheet.create({
commonTextInputSyle:{marginVertical:8},
  touchableStyle:{backgroundColor:"#6495ed",padding:8,borderRadius:8,}
})
