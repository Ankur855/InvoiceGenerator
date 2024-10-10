import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const InvoiceDetails=()=>{
   
    const renderItem=()=>{
        return(
        <View style={{flexDirection:"row",padding:5,}}>
<Text style={{fontSize:40}}>*</Text>
<View style={{flexDirection:'column',flex:.98,paddingHorizontal:18}}>
    <Text>NewLetter Template</Text>
    <Text>1 x  $120</Text>
</View>
<Text>$2000</Text>
        </View>
        )
    }
    const RenderTotalSummary=({title,value}:{title:string,value:string})=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:12}}>
        <Text style={{fontSize:16,textAlign:'center'}}>{title}</Text>
        <Text style={{textAlign:'center',alignSelf:"center"}}>{value}</Text>
       </View>
    )
    }
return(
    <View style={{flex:1,padding:16}}>
<Text style={{fontWeight:"600",fontSize:16}}>INVOICE DETALIS</Text>
<TouchableOpacity style={{flexDirection:'row',paddingVertical:12}} >
<View style={{height:50,width:50,borderRadius:30,alignItems:"center",justifyContent:"center",backgroundColor:'grey'}}>
<Text style={{fontSize:24,fontWeight:"bold",color:'#fff'}}>TJ</Text>
</View>
<View style={{flexDirection:'column',padding:8,flex:1}}>
<Text numberOfLines={1} style={{fontSize:16,fontWeight:"600",}}>TELSA JOHNSON</Text>
<Text>testemail@gmail.com</Text>
</View>
</TouchableOpacity>
<View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center",paddingVertical:28}}>
    <View>
        <Text style={{fontSize:16,fontWeight:'600'}}>
            Invoice Date 
        </Text>
        <Text style={{fontSize:16,paddingVertical:6}}>
            24, April,2024
        </Text>
    </View>
    <View>
        <Text style={{fontSize:16,fontWeight:'600'}}>
            Due Date 
        </Text>
        <Text style={{fontSize:16,paddingVertical:6}}>
            24, April,2024
        </Text>
    </View>
</View>
<Text style={{fontSize:16,fontWeight:'600'}}>ITEM DETAILS</Text>
<FlatList
        contentContainerStyle={{}}
        style={{flex:.5,marginBottom:20}}
        data={[{id:1},{id:2},{id:3},{id:4},{id:2},{id:3}]}
        renderItem={({item}:{item:any})=>renderItem(item)}
        />
<Text style={{fontSize:16,fontWeight:'600'}}>TOTAL SUMMARY </Text>
<View style={{flex:1}}>
  <RenderTotalSummary value="6588" title="NewsLetter "/>
  <RenderTotalSummary value="6588" title="jeee"/>
  <RenderTotalSummary value="6588" title="jeee"/>
  </View>
    </View>
)
}
export default InvoiceDetails ;