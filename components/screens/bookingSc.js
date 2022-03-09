import React, { useState } from "react";
import { TextInput, Text, View, Image,Dimensions,SafeAreaView } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const bookingSc = ({navigation}) => {
  return (
    <SafeAreaView style={{height: height, width: width}}>

        <ScrollView style={{height: height, width: width}}>
                <View style={{paddingVertical:20, justifyContent:'center', alignContent:'center', alignItems:'center', backgroundColor:'#eee', height:height}}>

                    <LottieView source={require('../lottie/successful.json')} autoPlay loop style={{height:250, width:250}}/>
                    <Text style={{color:'green', fontSize:20, textAlign:'center', justifyContent:'center', alignContent:'center', marginTop: -50}}>Booking Successfully Made.</Text>

                <TouchableOpacity style={{marginTop:30}} onPress={() => navigation.navigate("Home")}>
                    <View style={{marginHorizontal:25, marginVertical:10, backgroundColor:'#0225A1', borderRadius:30, height: 50, width: 250,alignContent:'center', justifyContent:'center'}}>

                        <Icon name='home' size={30} style={{textAlign:'center', alignContent:'center', justifyContent:'center', fontWeight:'bold',color:'#fff'}}/>
                        <Text style={{textAlign:'center', alignContent:'center', justifyContent:'center', fontWeight:'bold', paddingVertical:1, color:'#fff'}}>Go to home</Text>

                    </View>
                </TouchableOpacity>
                    

                </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default bookingSc;