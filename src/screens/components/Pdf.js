import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {decode} from 'base-64';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import PDFView from 'react-native-pdf';
import Pdf from 'react-native-pdf';
import Entypo from 'react-native-vector-icons/Entypo';
import RNFetchBlob from 'rn-fetch-blob';
import RNPrint from 'react-native-print';
import Share from 'react-native-share';
import moment from 'moment';
import FileViewer from 'react-native-file-viewer';
import ReactNativeBlobUtil from 'react-native-blob-util';
var ImagePath =
  'D:ReactNativeProjectloginnScreenreactnativeloginPortalassetslogoInvoice.png';
var filePath1;
const Pdf1 = ({navigation, route}) => {
  const [filePath, setFilePath] = useState('');
  const [totalTaxAmount, setTotalTaxAmount] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceTime, setInvoiceTime] = useState('');
  const [totalPricegst,setTotalPricegst]=useState('')
  useEffect(() => {
    console.log(route.params);
    calculateValue();
    var val = Math.floor(100 + Math.random() * 900);
    var invoiceNumber = '00' + val + '/' + moment(new Date()).format('YYYY');
    var invoiceTime = moment(new Date()).format('HH:MM');
    console.log(invoiceNumber, invoiceTime);
    setInvoiceNumber(invoiceNumber);
    setInvoiceTime(invoiceTime);
    HtmlFormat();
    

    // console.log(HtmlFormat())
    // setTimeout(() => {
    //   createPDF()
    // }, 2000);
  }, [navigation]);
  // const getimageurl =async ()=>{
  //   try {
  //     const response = await fetch(ImagePath);
  //     const blob = await response.blob();
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const dataUri = reader.result;
  //      console.log(dataUri,"jhjhgjh")
  //     };
  //     reader.readAsDataURL(blob);
  //   } catch (error) {
  //     console.error('Error fetching image:', error);
  //   }
  // }
  const calculateValue = () => {
    let caldata = route.params.itemValue;
    var Totalprice = 0;
    caldata.map((item, index) => {
      console.log(Number(item.Quantity) * Number(item.Price));
      Totalprice = Number(item.Quantity) * Number(item.Price) + Totalprice;
    });
    var totalPricegst = (18 / 100) * Totalprice ;
    var totalPricetax= totalPricegst+Totalprice
    setTotalTaxAmount(totalPricetax);
    setTotalPricegst(totalPricegst);
    console.log(Totalprice, 'totalll', totalPricetax);
  };
  const HtmlFormat = async () => {
    var HtmlFormat = `
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          </head>
          <body >
            <div style="min-height: auto;
            width: 100%;
            height : 100vh;
            border: solid 2px #000;"  >
            <div style="height: auto;
            width: 100%;
            display: flex;
            flex-direction: row;
            /* padding: 20px; */
            justify-content: space-between;
            align-items: center;">
           
            <div class="data-title">
                <div style="display: flex;
                flex-direction: column;
                align-items: flex-start;
                font-size: 2.6rem;  
                padding-left: 20px;">SK Enterprises<br></div>
            <div style="
             display: flex;
            flex-direction: column;
            align-items: flex-start; 
            padding-left: 20px;
            ">Flat No-307,shhed Madan Lal Dhingra Marg <br/> ModelTown Sonipat Sub Post Office Sonipat -131101.</div>
            </div>
            <div style="padding-right:8px" >
            ${route}<br/>${route}
            </div>
            </div>
            <hr />
                <hr/>
                <div style="
                width: 100%;
                height: 78px;
                padding: 15px;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                ">
                    <div style="
                    width: 50%;
                    align-items: flex-start;
                    ">
                        <p class="invoice-user">
                            Bill To : <br/>
                            Name : ${'Ankur'} <br/>
                            // Address : ${'Address'} <br/>
                            Phone No : +91 ${'Mobile_No'}
                        </p>
                    </div>
                    <div style="align-items: flex-end;">
                        <p>Invoice No : ${invoiceNumber}<br/>
                        Date : ${'34/09/2024'}<br/>
                        Time :${invoiceTime}</p>
                        <br/>
                        <br/>
                       
                    </div>
                </div>
                <hr/>
                <hr/>
                <div style="height: auto;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;">
                    <table style="width:100%; border-collapse: collapse;">
                        <tr style="background-color: rgba(255, 0, 62, 0.8); color: white;">
                          <th style="height: 30px;">Index</th>
                          <th style="height: 30px;">Product Name</th>
                          <th style="height: 30px;">Price(Per)</th>
                          <th style="height: 30px;">Quantity</th>
                          <th style="height: 30px;">Total</th>
                        </tr>
                       ${route.params.itemValue.map((item, index) => {
                         return `  <tr style="background-color: rgba(246, 221, 178, 0.8);">
                            <td style="text-align: center;height: 30px;">${
                              index + 1
                            }</td>
                            <td style="text-align: center;height: 30px;">${
                              item.Name
                            }</td>
                            <td style="text-align: center;height: 30px;">${
                              item.Price
                            }</td>
                            <td style="text-align: center;height: 30px;">${
                              item.Quantity
                            }</td>
                            <td style="text-align: center;height: 30px;">₹ ${
                              item.Price * item.Quantity
                            }</td>
                          </tr>`;
                       })}
                       
                      </table>
                      
                        <!-- <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Received balance :  1</div>
                  
                      <hr/>
                      <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">igst @9%</div>
                      <hr/>
                      <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">igst @9%</div>
                      <hr/>
                      <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Grand Total :</div>

                      <hr/>
                      <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Payment Mode : Cash</div>
                      <hr/> -->
                      <div style="width:100%;align-self: flex-end;margin-top:0; display: flex; flex-direction: row;">
                        <div style="width:40%" ></div>
                          <table style="width: 70%;">
                          <div style ="flex-direction:row">
                          <div>
                          <tr>
                          <th style="text-align: start;">Igst @9% : </th>
                          <td style="text-align: center;height: 30px;">₹ ${totalPricegst.toFixed(2)/2}</td>
                      </tr>
                      <tr>
                          <th style="text-align: start;">cgst @9% : </th>
                          <td style="text-align: center;height: 30px;">₹ ${totalPricegst.toFixed(2)/2}</td>
                      </tr>
                          <tr>
                          <th style="text-align: start;">Grand Total : </th>
                          <td style="text-align: center;height: 20px;">₹ ${totalTaxAmount}</td>
                      </tr>
                      </div> 
                      <!-- <div>
                                <tr style="border-bottom: solid ;">
                                    <th style="text-align: start;">Received Balance : </th>
                                    <td style="text-align: center;height: 20px;">₹ ${'ReceivedBalance'}</td>
                                </tr>
                               
                                <tr style="border-bottom: solid ;">
                                <th style="text-align: start;">Remaining Balance : </th>
                                <td style="text-align: center;height: 20px;">₹ ${'RemainingBalance'}</td>
                            </tr>
                                <tr>
                                    <th style="text-align: start;">Payment Method: </th>
                                    <td style="text-align: center;height: 20px;">${'PaymentType'}</td>
                                </tr>
                                </div>--!>
                                </div>
                          </table>
                      </div>
                </div>
                <hr/>
                <hr/>
                <div style="height:auto; padding: 20px;">
        
                    <p>Account Details - <br/>
                    Bank Name: HDFC BANK, DHANGARWADI<br/>
                    Bank Account no : 50100272967118<br/>
                    Bank IFSC code : HDFC0004850<br/>
                    </p>
        
                </div>
                <hr/>
                
        <div style="height:auto ;padding:20px;flex-direction:row;display:flex;">
        <div style="flex:.8">
        <p>Terms & Conditions </br>
        1. Goods once sold will not be taken back </br>
        2. Interest @ 18% p.a will be changed if the payment</br>is not made with in the stipulated time </br>
        3. Subject to Haryana Jurisdiction only
        </p> 
       
    <!--    <div style="border-left: 2px solid grey;
        height: 12vh;margin-top:-144px;
        position: absolute;
        left: 60%;"></div> --!>
        </div>
        <div style="height:10px">
        Receiver's Signature :</br>
        <hr/>
        </div>

            </div>
          </body>
        </html>
        `;

    const style = `
            .container {
              margin : 15px;
              border : solid 2px #000
            }
        `;
    let options = {
      html: HtmlFormat,
      fileName: moment(new Date()).format('YYYYMMDD'),
      directory: 'Documentsegs',
      base64: true,
    };
    let file = await RNHTMLtoPDF.convert(options);
    filePath1 = file.filePath;
    // console.log(file);
    setFilePath(file.base64);
    //   try {
    //     // Read the PDF file as binary data
    //     const pdfBinaryData = await RNFS.readFile(file.filePath, 'base64');
    // filePath1=pdfBinaryData
    // setFilePath(filePath1)
    //     console.log(pdfBinaryData); // This should give you the base64-encoded PDF content
    // } catch (error) {
    //     console.error('Error reading PDF file:', error);
    // }
    //  setFilePath1(file.filePath1);

    //  const pdfBinaryData = await RNFS.readFile(filePath1, 'binary');

    // Convert the binary data to base64
    //  const pdfBase64 = Buffer.from(pdfBinaryData, 'binary').toString('base64')
    //   // alert(file.filePath1);
    //   console.log(pdfBase64)
  };
  const savefilePath = async () => {
    const fs = ReactNativeBlobUtil.fs;
    // const config=ReactNativeBlobUtil.config
    const dirs = ReactNativeBlobUtil.fs.dirs;
    let dir = '';
    if (Platform.OS === 'android') {
      dir = dirs.DCIMDir;
    }
    if (Platform.OS === 'ios') {
      dir = dirs.CacheDir;
    }
    // config({
    //   fileCache:true,
    //   addAndroidDownloads:{
    //     useDownloadManager:true,
    //     notification:true,
    //     path:dir +"/"+ 'sale' + Math.random() + '.pdf'
    //   }
    // }).fetch("GET","https:/"+filePath1).then((res)=>{
    //   console.log(res)
    // })
    const file_path = dir + '/' + 'sale' + '.pdf';
    await fs.writeFile(file_path, filePath, 'base64');
    // console.log(dirs, file_path);
    return file_path;
  };
  const downloadFile = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission Required',
        message: 'This app needs access to your storage to download the PDF.',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      var filePathForDownload = await savefilePath();
      // console.log(filePathForDownload, 'sfjjdfu');
      try {
        await FileViewer.open(filePathForDownload, {
          showAppsSuggestions: true,
          showOpenWithDialog: true,
          ...{},
        });
        // const config=ReactNativeBlobUtil.config
        //  // Decode the base64 data
        //  const decodedData = decode(filePath);
        //  console.log(decodedData,"kkkk")
        //  // Construct the HTTPS URL
        //  const httpsUrl = `https://${decodedData}`;
        //  const response = await fetch(httpsUrl);
        // const blob = await response.blob();
        // console.log(blob,"jsjshgfsf")
        // const result = await config({
        //   fileCache: true,
        //   addAndroidDownloads: {
        //     useDownloadManager: true,
        //     notification: true,
        //     path: filePathForDownload,
        //     description: 'Downloading PDF document',
        //     mediaScannable: true,
        //   },
        // }).fetch('GET',blob.uri );
        // console.log('PDF document downloaded successfully', result.path());
        //   }
      } catch (error) {
        console.log(error);
      }
      // const path = FileViewer.open(filePathForDownload, {
      //   showOpenWithDialog: true,
      //   type: 'application/pdf',
      // }) // absolute-path-to-my-local-file.
      //   .then(response => {
      //     // console.log(response);
      //   })
      //   .catch(error => {
      //     // error
      //     console.log(error);
      //   });
      //  const {config,fs}=RNFetchBlob;
      //  const downloads=fs.dirs?.DownloadDir;
      //  return config({
      //   fileCache:true,
      //   addAndroidDownloads:{
      //     useDownloadManager:true,
      //     notification:true,
      //     path:downloads + "/"+ 'sale'+Math.random()+".pdf"
      //   }
      //  }).fetch("GET","https:/"+filePath1).then((res)=>{
      //      console.log(res)
      //  }).catch((e)=>{
      //   console.log(e)
      //  })
    }
  };
  const printpdf = async () => {
    try {
      await RNPrint.print({filePath: filePath1});
      // const granted = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      //   {
      //     title: 'Storage Permission Required',
      //     message: 'This app needs access to your storage to download the PDF.',
      //     buttonPositive: 'OK',
      //   }
      // );
      // if (granted !== PermissionsAndroid.RESULTS.GRANTED){

      // }
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const { config, fs } = RNFetchBlob;
    //   const downloads = fs.dirs.DownloadDir;
    //   const response = await fetch('file://'+filePath1);
    //   const blob = await response.blob();
    //   const filePath = `${downloads}/document.pdf`;
    //   const exists = await fs.exists(filePath);
    //   if (exists) {
    //     await fs.unlink(filePath);
    //   }
    //   const result = await config({
    //     fileCache: true,
    //     addAndroidDownloads: {
    //       useDownloadManager: true,
    //       notification: true,
    //       path: filePath,
    //       description: 'Downloading PDF document',
    //       mediaScannable: true,
    //     },
    //   }).fetch('GET', blob.uri);
    //   console.log('PDF document downloaded successfully', result.path());
    // }
    // catch (err) {
    //   console.warn(err);
    // }
  };
  const shareContent = async () => {
    try {
      var filePathForDownload = await savefilePath();
      const ShareOption = {
        subject: 'Invoice',
        message: 'Share Invoice',
        url: 'data:application/pdf;base64,' + filePath,
        type: 'application/pdf',
        filename: `sale ${Math.random()} .pdf`,
      };
      Share.open(ShareOption);
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };
  return (
    <View style={styles.container}>
      {/* <Button onPress={()=>HtmlFormat()} title='button'/> */}
      <View style={{flex: 1}}>
        {filePath ? (
          <Pdf
            source={{uri: 'data:application/pdf;base64,' + filePath}}
            style={styles.pdf}
          />
        ) : null}
      </View>
      <View style={styles.UtilitiesView}>
        <Entypo
          name="print"
          size={35}
          onPress={() => {
            printpdf();
          }}
        />
        <Entypo
          name="download"
          size={35}
          onPress={() => {
            downloadFile();
          }}
        />
        <Entypo
          name="share"
          onPress={() => {
            shareContent();
          }}
          size={35}
        />
      </View>
    </View>
  );
};

//   const  createPDF=async()=> {

// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    marginTop: 0,
  },
  UtilitiesView: {
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    height: Dimensions.get('window').height / 10,
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height,
  },
});

export default Pdf1;
