import React from 'react'
import { StyleSheet, Text, View ,StatusBar,TouchableOpacity} from 'react-native'
import { Display } from '../utils'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/MaterialIcons"
const AboutSociety = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
             <View style={styles.headerContainer} > 
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <Icon name="keyboard-backspace" size={20} style={{ padding: 5 }}/>
              </TouchableOpacity>
              
              <Text style={styles.headerTitle}>About Event</Text>
              </View>
            <View style={styles.boxcontainer}>
                <View style={styles.inputSubContainer}>
                <Icon name="group" size={22}
                    color='#0225A1'
                    style={{marginRight:10}}/>
                 <Text>society</Text>
                </View>
                <View style={styles.inputSubContainer}>
                <Ionicons name="documents" color='#0225A1' size={30}/>
                
                 <Text>society</Text>
                </View>
                <View style={styles.inputSubContainer}>
                
                <Ionicons name="location" color='#0225A1' size={30}/>
                 <Text>society</Text>
                </View>
                <View style={styles.inputSubContainer}>
                
                <Feather
                 name="calendar" size={22}
                 color='#0225A1'
                 />
                 <Text>society</Text>
                </View>
                <View style={styles.inputSubContainer}>
               
                <Icon name="fiber-pin" size={22}
                    color='#0225A1'
                    style={{marginRight:10}}/>
                 <Text>society</Text>
                </View>
            </View>
        </View>
    )
}

export default AboutSociety

const styles = StyleSheet.create({
    container:{
        
    },
    headerContainer:{
        flexDirection:'row' ,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:30,
        paddingHorizontal:10,
        
       marginTop:30
   
     },
     headerTitle:{
       fontSize:20,
       lineHeight:20 * 1.4,
       width:Display.setWidth(80),
       textAlign:'center',
       color:'#000'  
 
     },
       boxcontainer:{
           backgroundColor:'#DADADA',
           height:'60%',
           width:'80%',
           marginLeft:40,
           marginTop:40
       },
       inputContainer:{
        backgroundColor:'#F5F5F5',
        paddingHorizontal:10,
        marginHorizontal:20,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:'black',
        justifyContent:'center',
        borderWidth:1,
        padding:10,
       marginBottom:-10
    },
    inputSubContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
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
