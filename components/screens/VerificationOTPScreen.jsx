import React,{useRef,useState} from 'react'
import { View,SafeAreaView, Text ,StyleSheet,Image,StatusBar,FlatList,
    TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from 'react-native-vector-icons/Feather'
import { Display } from '../utils';
const VerificationOTPScreen = ({navigation}) => {
    const firstInput =useRef()
    const secondInput =useRef()
    const thirdInput =useRef()
    const fourthInput =useRef()
    const fifthInput =useRef()
    const [otp,setotp]=useState({1:'',2:'',3:'',4:'',5:''})
    return (
        <View style={styles.container}>
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
            <View style={styles.headerContainer} 
            >
               
               <Feather name="arrow-left" size={30}
             onPress={()=>navigation.goBack()} /> 
            <Text style={styles.headerTitle}></Text>
            </View>
            <View style={{alignItems:'center',marginTop:-60}}>
                <Image source={require('../images/logo.png')}/>
            </View>
            <View style={styles.context}>
            <Text style={styles.contextText}>Please Enter OTP Pin Of The Group Sent By The Admin</Text>
            </View>
            <View style={styles.otpContainer}>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType="number-pad"
                    maxLength={1} ref={firstInput}
                    onChangeText={(text)=>{
                        setotp({...otp,1:text})
                        text && secondInput.current.focus()}}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType="number-pad"
                    maxLength={1} ref={secondInput}
                    onChangeText={(text)=>{
                        setotp({...otp,2:text})
                        text ? thirdInput.current.focus() : firstInput.current.focus()}}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType="number-pad"
                    maxLength={1} ref={thirdInput}
                    onChangeText={(text)=>{
                        setotp({...otp,3:text})
                        text ? fourthInput.current.focus() : secondInput.current.focus()}}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType="number-pad"
                    maxLength={1} ref={fourthInput}
                    onChangeText={(text)=>{
                        setotp({...otp,4:text})
                        text ? fifthInput.current.focus() : thirdInput.current.focus() }}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType="number-pad"
                    maxLength={1} ref={fifthInput}
                    onChangeText={(text)=>{
                        setotp({...otp,5:text})
                        text ? fifthInput.current.focus() : fourthInput.current.focus() }}/>
                </View>
            </View>
            <View style={[styles.inputContainer]}>
                <View style={styles.inputSubContainer}>
                    <Feather name="phone" size={22}
                    color='black'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="Enter PHONE NUMBER"
                    selectionColor='gainsboro'
                        keyboardType='numeric'
                    style={styles.inputText}
                    />
                </View>
             
            </View>
            <TouchableOpacity style={styles.signinButton}
            onPress={()=>navigation.navigate('AboutSociety')} >
                <Text style={styles.signinButtonText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default VerificationOTPScreen

const styles = StyleSheet.create({
    container:{

    }
    ,
    headerContainer:{
       flexDirection:'row' ,
       alignItems:'center',
       justifyContent:'center',
       paddingVertical:40,
       paddingHorizontal:20
    },
    headerTitle:{
        fontSize:20,
        lineHeight:20 * 1.4,
        width:Display.setWidth(80),
        textAlign:'center'  
  
      },
      context:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:50,
        padding:20

      },
      contextText:{
          fontSize:20
      },
      otpContainer:{
          marginHorizontal:20,
          marginBottom:20,
          justifyContent:'space-evenly',
          alignItems:'center',
          flexDirection:'row'
      },
      otpBox:{
          borderRadius:5,
          borderColor:'#0225A1',
          borderWidth:0.5
      },
      otpText:{
        fontSize:25,
        color:'black',
        padding:0,
        textAlign:'center',
        paddingHorizontal:18,
        paddingVertical:10,
      },
      signinButton:{
        backgroundColor:'#0225A1',
        borderRadius:8,
        marginHorizontal:30,
        height:47,
        justifyContent:'center',
        alignItems:'center',
        marginTop:60,
       
    //   paddingVertical:30,
    //   paddingHorizontal:60,
     
      
      elevation:2,
     
    },
    signinButtonText:{
        fontSize:18,
        lineHeight:18 * 1.4,
        color:'#fff',
        
    },
    inputContainer:{
        backgroundColor:'#F5F5F5',
        paddingHorizontal:10,
        marginHorizontal:20,
        borderRadius:8,
        justifyContent:'center',
        borderBottomWidth:2,
        borderBottomColor:'black', 
       marginBottom:-10
    },
    inputSubContainer:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    inputText:{
        fontSize:18,
        textAlignVertical:'center',
        padding:0,
        height:Display.setHeight(6),
        color:'black',
        flex:1

    },
})

