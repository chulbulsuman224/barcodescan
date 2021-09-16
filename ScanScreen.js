import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    getCameraPermissions=async(id)=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState(
            {
                hasCameraPermissions:status==="granted"
                
            }
        )
    }
    render(){
        const hasCameraPermissions=this.state.hasCameraPermissions;
        return(
            <View style={styles.cointainer}>
                <Image 
                       source={require("../assets/Barcode-scanner.jpg")}
                        style={{width:490,height:490}}/>
                <Text style={styles.displayText}>{
                    hasCameraPermissions===true? this.state.scannedData: "Request Camera Permission"}</Text>

                <TouchableOpacity
                onPress={this.getCameraPermissions}
                style={styles.scanButton}
                title = "Bar Code Scanner">
                    <Text style={styles.buttonText}>Scan QR code</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    displaytext:{
        fontSize:15,
        textDecorationLine:'underline'
    },
    scanButton:{
        backgroundColor:'blue',
        padding:10,
        margin:10
    },
    buttonText:{
        fontSize:20,
        textAlign:'center',
        marginTop:10
    },
    inputView:{
        flexDirection:'row',
        margin:20
    },
    inputBox:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20
    },
    scanButton:{
        backgroundColor:'#66bb6a',
        width:50,
        borderWidth:1.5,
        borderLeftWidth:0
    }
})




