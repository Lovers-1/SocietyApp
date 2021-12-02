import React from 'react'
import { SafeAreaView, StyleSheet, Text, View ,StatusBar,
TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import {Display} from '../utils'
const CardAddedSucces = ({navigation}) => {
    return (
        <SafeAreaView>
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
            <View style={styles.cicle}>
                <Ionicons name='checkmark-circle-sharp' size={180} color='#1FC71F'/>
                
            </View>
            <View style={{padding:25}}>
            <Text style={{fontSize:20}}>Successfully paid R350.00 to the gravehoney 
                check your mails for receit
            </Text>
            </View>
            <TouchableOpacity style={styles.signinButton}
            onPress={()=>navigation.navigate('BookingEvent')}>
                <Text style={styles.signinButtonText}>OK</Text>
            </TouchableOpacity>
            <Text></Text>
        </SafeAreaView>
    )
}

export default CardAddedSucces

const styles = StyleSheet.create({
    cicle:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:30,
        marginTop:120
        
    },
    signinButton:{
        backgroundColor:'#0225A1',
        borderRadius:8,
        marginHorizontal:30,
        height:Display.setHeight(6),
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
       
      paddingVertical:30,
      paddingHorizontal:60,
     
      
      elevation:2,
     
    },
    signinButtonText:{
        fontSize:18,
        lineHeight:18 * 1.4,
        color:'#fff',
        
    },
})
