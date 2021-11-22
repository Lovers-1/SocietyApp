import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import { Display } from '../utils'
//import {Images} from '../contants'
const WelcomeCard = ({_title,_description,_image}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={_image} 
            resizeMode="contain"/>
           <Text style={styles.titleText}>{_title}</Text> 
           <Text style={styles.contentText}>{_description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:Display.setWidth(90),
        height:Display.setHeight(50)
    },
    image:{
        height:Display.setHeight(30),
        width:Display.setWidth(80),
        
    },
    titleText:{
        fontSize:22,
        fontWeight:'bold'
    },
    contentText:{
        fontSize:18,
        
        textAlign:'center',
        marginHorizontal:20,
    }
})

export default WelcomeCard
