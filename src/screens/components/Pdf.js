import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, Platform, PermissionsAndroid, Share } from 'react-native'
import React, { useEffect, useState } from 'react'
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import PDFView from 'react-native-pdf';
import Pdf from 'react-native-pdf';
import Entypo from 'react-native-vector-icons/Entypo';
import RNFetchBlob from 'rn-fetch-blob';
import RNPrint from 'react-native-print';
import moment from 'moment';

var filePath1;
  const Pdf1=({navigation})=>{
const [filePath,setFilePath]=useState('')
    useEffect(() => {
     HtmlFormat()
    // console.log(HtmlFormat())
      // setTimeout(() => {
      //   createPDF()
      // }, 2000);
      },[navigation])
    const HtmlFormat=async ()=>{
        var HtmlFormat =   `
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          </head>
          <body >
            <div style="min-height: auto;
            width: 100%;
            height : 97vh;
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
                font-size: 2rem;  
                padding-left: 20px;">Ankur's General Store<br></div>
            <div style="
            display: flex;
            flex-direction: column;
            align-items: flex-start; 
            padding-left: 20px;
            ">258 Pocket 1 pascim puri New Delhi .</div>
            </div>
           
                <img style="
                height: 90px;
            width: 90px;
            margin-right:15px;
                " src="https://i.ibb.co/Rv9KpGf/logo.png" />
            </div>
            <hr />
                <hr/>
        
        
                <div style="
                width: 100%;
                height: auto;
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
                            Name : ${"Ankur"} <br/>
                            // Address : ${"Address"} <br/>
                            Phone No : +91 ${"Mobile_No"}
                        </p>
                    </div>
                    <div style="align-items: flex-end;">
                        <p>Invoice No : ${"Invoice"}<br/>
                        Date : ${"34/09/2024"}<br/>
                        Time :${"GetTime(new Date())"}</p>
                        <br/>
                        <br/>
                        <p>Mobile No :- <br/>
                        +91 8208553219<br/>
                        +91 9309780761
                        </p>
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
                          <th style="height: 30px;">Bras</th>
                          <th style="height: 30px;">Total</th>
                        </tr>
                        <tr style="background-color: rgba(246, 221, 178, 0.8);">
                          <td style="text-align: center;height: 30px;">1</td>
                          <td style="text-align: center;height: 30px;">${"Product"}</td>
                          <td style="text-align: center;height: 30px;">${"sjfja"}</td>
                          <td style="text-align: center;height: 30px;">${"Quantity"}</td>
                          <td style="text-align: center;height: 30px;">₹ ${"Total"}</td>
                        </tr>
                       
                      </table>
                      
                        <!-- <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Received balance :  1</div>
                  
                      <hr/>
                      <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Grand Total : 1</div>
                      <hr/>
                      <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Payment Mode : Cash</div>
                      <hr/> -->
                      <div style="width:100%;align-self: flex-end; display: flex; flex-direction: row;">
                        <div style="width:40%"></div>
                          <table style="width: 50%; align-self: flex-end;">
                          <tr>
                          <th style="text-align: start;">Grand Total : </th>
                          <td style="text-align: center;height: 30px;">₹ ${"Total"}</td>
                      </tr>
                                <tr style="border-bottom: solid ;">
                                    <th style="text-align: start;">Received Balance : </th>
                                    <td style="text-align: center;height: 30px;">₹ ${"ReceivedBalance"}</td>
                                </tr>
                               
                                <tr style="border-bottom: solid ;">
                                <th style="text-align: start;">Remaining Balance : </th>
                                <td style="text-align: center;height: 30px;">₹ ${"RemainingBalance"}</td>
                            </tr>
                                <tr>
                                    <th style="text-align: start;">Payment Method: </th>
                                    <td style="text-align: center;height: 30px;">${"PaymentType"}</td>
                                </tr>
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
            fileName: moment(new Date()).format("YYYYMMDD"),
            directory: 'Documentsegs',
            base64:true
          };
          let file = await RNHTMLtoPDF.convert(options)
          filePath1=file.filePath
          console.log(file.filePath)
          setFilePath(file.base64)
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
        }
        const downloadFile=async()=>{
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message: 'This app needs access to your storage to download the PDF.',
              buttonPositive: 'OK',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED){
         const {config,fs}=RNFetchBlob;
         const downloads=fs.dirs?.DownloadDir;
         return config({
          fileCache:true,
          addAndroidDownloads:{
            useDownloadManager:true,
            notification:true,
            path:downloads + "/"+ 'sale'+Math.random()+".pdf"
          }
         }).fetch("GET","https:/"+filePath1).then((res)=>{
             console.log(res)
         }).catch((e)=>{
          console.log(e)
         })
        }
        }
        const printpdf = async () => {
try{
    
  await RNPrint.print({ filePath: filePath1 })
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
}catch(error){
console.log(error)
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
        const sharePDF = async () => {
          try {
            const pdfURL = 'https://'+filePath1;
            await fs.write(file)
            // Replace with your PDF file URL
            const result = await Share.share({
              title: 'Share PDF File',
              url: pdfURL,
            });
            console.log('Share result:', result);
          } catch (error) {
            console.error('Error sharing PDF:', error);
          }
        };
        return(
          <View style={styles.container}>
            {/* <Button onPress={()=>HtmlFormat()} title='button'/> */}
            <View style={{flex:1}}>
              {filePath?  <Pdf
        source={{uri:"data:application/pdf;base64,"+filePath}}
        style={styles.pdf}
      />:null}
            
                    </View>
                    <View style={styles.UtilitiesView}>
                    <Entypo
                    name="print"
                    size={35}
                    onPress={()=>{printpdf()}}
                    />
                    <Entypo
                    name="download"
                    size={35}
                    onPress={()=>{downloadFile()}}
                    />
                    <Entypo
                    name="share"
                    onPress={()=>{sharePDF()}}
                    size={35}
                    />
                    </View>
               
          </View>
        )
    }

//   const  createPDF=async()=> {
      
// }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'center',
        marginTop:0,
    },
    UtilitiesView:{flexDirection:"row",backgroundColor:"green",justifyContent:"space-between",paddingHorizontal:14,height:Dimensions.get('window').height/10,alignItems:"center"},
    pdf: {
        flex:1,
        width:"100%",
        height:Dimensions.get('window').height,
    }
});

export default Pdf1;