import React, {useState} from 'react';
import {
  Alert,
  Animated,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Modal, TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ref,
  onValue,
  push,
  update,
  remove
} from 'firebase/database';
import { db } from '../../firebase-config';
interface Props {}

export const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [item, setItem] = useState('');
  const [visible, setVisible] = useState(false);
  const [gst, setGst] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));
  const [data, setData] = useState([]);
  const [paymentMode, setPaymentMode] = useState('');
  const [hsnCode, setHsnCode] = useState('');
  const [address, setAddress] = useState('');
  const[paidAmount,setPaidAmount]=useState('')

  const containerStyle = {
    backgroundColor: 'white',
    padding: 10,
    paddingVertical: 18,
    borderRadius: 8,
  };
  var itemData = {
    id: 1,
    Name: '',
    Price: '',
    Quantity: '',
  };
  var arrData: {id: number; Name: string; Price: string; Quantity: string,hsnCode:string}[] =
    [];
  const numberofitemInput = (number: number) => {
    for (let i = 1; i <= number; i++) {
      // console.log(itemData.id, 'hgf', i);
      arrData.push({
        id: i,
        Name: '',
        Price: '',
        Quantity: '',
        hsnCode:''
      });
    }
    if (arrData.length > 0) {
      setVisible(true);
      setData(arrData);
      console.log(arrData);
    }
  };
  const validationOfForm = () => {
    var errorData = data.filter((item, index) => {
      if (item.Name == '' || item.Price == '' || item.Quantity == ''||item.hsnCode=='') {
        item.error = `Item Information of item ${index + 1}  Is Empty`;
        return item;
      }
    });
    console.log(errorData, 'errorData');
    setVisible(false);
    console.log(data, 'gttt');
    if (errorData.length > 0) {
      Alert.alert(errorData[0].error);
    }
  };

  // const rendertextInput=(item,index)=>{
  //   console.log(item,"jjhfghgdghg")
  //   return(

  //   )
  // }
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
  React.useEffect(() => {
    return Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 8,
        height: '100%',
        //paddingBottom: 20,
      }}>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 8,
          height: '100%',
          // paddingBottom: 20,
        }}>
        <TextInput
          label="Full Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.commonTextInputSyle}
        />
        <TextInput
          label="Mobile"
          value={mobile}
          keyboardType='numeric'
          onChangeText={text => setMobile(text)}
          style={styles.commonTextInputSyle}
        />
        <TextInput
          label="Address"
          value={address}
          onChangeText={text => setAddress(text)}
          style={styles.commonTextInputSyle}
        />
        <TextInput
          label="Email address"
          value={email}
          onChangeText={text => setemail(text)}
          style={styles.commonTextInputSyle}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            label="Number of Item"
            value={item}
            keyboardType="numeric"
            onChangeText={text => setItem(text)}
            style={{...styles.commonTextInputSyle, width: '70%'}}
          />

          <TouchableOpacity
            onPress={() => {
              numberofitemInput(item);
            }}
            style={styles.touchableStyle}>
            <Text style={{color:"#fff"}}>Add Items</Text>
          </TouchableOpacity>
        </View>
        <RNPickerSelect
          style={{
            inputIOS: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 4,
              color: 'black',
              paddingRight: 30, // to ensure the text is never behind the icon
              backgroundColor: 'white',
              marginBottom: 8,
            },
            inputAndroid: {
              fontSize: 16,
              paddingHorizontal: 10,
              marginBottom: 14,
              paddingVertical: 8,
              borderWidth: 0.5,
              borderColor: 'gray',
              borderRadius: 8,
              color: 'black',
              paddingRight: 30, // to ensure the text is never behind the icon
              backgroundColor: 'white',
            },
          }}
          placeholder={{
            label: 'Gst',
            value: null,
          }}
          // textInputProps={{placeholderTextColor:"black",placeholder:"red"}}
          items={[
            {label: '18%', value: '18%'},
            {label: '15%', value: '15%'},
            {label: '28%', value: '28%'},
            {label: '12%', value: '12%'},
          ]}
          onValueChange={value => setGst(value)}
          value={gst}
        />
        <RNPickerSelect
          placeholder={{
            label: 'Type of payment',
            value: null,
          }}
          style={{
            inputIOS: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 4,
              color: 'black',
              paddingRight: 30, // to ensure the text is never behind the icon
              backgroundColor: 'white',
            },
            inputAndroid: {
              fontSize: 16,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 0.5,
              borderColor: 'gray',
              borderRadius: 8,
              color: 'black',
              paddingRight: 30, // to ensure the text is never behind the icon
              backgroundColor: 'white',
            },
          }}
          items={[
            {label: 'Cash', value: 'Cash'},
            {label: 'online', value: 'online'},
          ]}
          onValueChange={value => setPaymentMode(value)}
          value={paymentMode}
        />

        <TextInput
          label="Amount Paid"
          value={paidAmount}
          keyboardType='numeric'
          onChangeText={text => setPaidAmount(text)}
          style={styles.commonTextInputSyle}
        />
      

        <TouchableOpacity
          onPress={async () => {
            try {
              await AsyncStorage.setItem('user', JSON.stringify(data));
            } catch (error) {
              console.log(error);
            }
            // const [email, setemail] = useState('');
            // const [name, setName] = useState('');
            // const [mobile, setMobile] = useState('');
            // const [item, setItem] = useState('');
            // const [visible, setVisible] = useState(false);
            // const [gst, setGst] = useState('');
            // const [fadeAnim] = useState(new Animated.Value(0));
            // const [data, setData] = useState([]);
            // const [paymentMode, setPaymentMode] = useState('');
            // const [hsnCode, setHsnCode] = useState('');
            // const [address, setAddress] = useState('');
            if (!name || !email ||! mobile || !gst || !paymentMode || !address) {
              Alert.alert("Please Enter Details")
              return false;
            } 
            else if(!data){
              Alert.alert("Please Enter item Details")
              return false;
            }
            else {
              push(ref(db, 'billDetails'), {
                itemDetails:data,
                name: name,
                  email: email,
                  mobile: mobile,
                  gst: gst,
                  paymentMode: paymentMode,
                  address: address,
              });
              navigation.navigate('PDF', {
                itemValue: data,
                saleDetails: {
                  name: name,
                  email: email,
                  mobile: mobile,
                  gst: gst,
                  paymentMode: paymentMode,
                  address: address,
                },
              });
            }
            
          }}
          style={{
            ...styles.touchableStyle,
            // backgroundColor: '#2596be',
            padding: 12,
            marginTop: 12,
          }}>
          <Text style={{textAlign: 'center', color: '#fff'}}>Generate Bill</Text>
        </TouchableOpacity>
        <View style={{backgroundColor: '#ADD8E6'}}></View>
        {/* //  <Animated.View // Special animatable View
      //  style={{
      //    // ...props.style,
         
      //    opacity: fadeAnim, // Bind opacity to animated value
      //  }}>
         
       
      //  </Animated.View> */}
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          style={{height: '80%', flex: 1, padding: 8}}
          contentContainerStyle={containerStyle}>
          {/* <Text>dsfjsjhdgjs</Text> */}
          <FlatList
            data={data}
            // style={{flex:1}}
            renderItem={({item, index}) => (
              <>
                <Text>{'item ' + (index + 1)}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 8,
                  }}>
                  <TextInput
                    label="Item Name"
                    value={arrData[index]?.Name}
                    onChangeText={text => {
                      item.Name = text;
                      console.log(item);
                    }}
                    style={{
                      ...styles.commonTextInputSyle,
                      width: '26%',
                      paddingHorizontal: 4,
                    }}
                  />
                  <TextInput
                    label="Price"
                    value={arrData[index]?.Price}
                    keyboardType='numeric'
                    onChangeText={text => {
                      item.Price = text;
                      console.log(item);
                    }}
                    style={{...styles.commonTextInputSyle, width: '20%'}}
                  />
                   <TextInput
                    label="Hsn-code"
                    value={arrData[index]?.hsnCode}
                    keyboardType='numeric'
                    onChangeText={text => {
                      item.hsnCode = text;
                      console.log(item);
                    }}
                    style={{...styles.commonTextInputSyle, width: '26%'}}
                  />
                  
                   <TextInput
                    label="Qty"
                    value={arrData[index]?.Quantity}
                    keyboardType='numeric'
                    onChangeText={text => {
                      item.Quantity = text;
                      console.log(item);
                    }}
                    style={{...styles.commonTextInputSyle, width: '16%'}}
                  />
                </View>
              </>
            )}
          />
          <TouchableOpacity
            style={styles.touchableStyle}
            onPress={() => {
              validationOfForm();
            }}>
            <Text style={{textAlign: 'center', color: '#fff'}}>Submit</Text>
          </TouchableOpacity>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  commonTextInputSyle: {marginVertical: 8, backgroundColor: '#fff'},
  touchableStyle: {backgroundColor: '#dd2049', padding: 8, borderRadius: 8},
});
