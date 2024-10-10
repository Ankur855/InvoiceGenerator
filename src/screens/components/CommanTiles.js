import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'

export default function CommanTiles() {
  return (
    <Card style={{width:Dimensions.get('screen').width*.4,height:Dimensions.get('screen').width*.2,alignItems:"center",padding:8}}>
   <Text>Total Sales</Text>
   <Text style={{color:'green',fontWeight:'800',fontSize:18,paddingTop:8}}>$20000</Text>
  </Card>
  )
}