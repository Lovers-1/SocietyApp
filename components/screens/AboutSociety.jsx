import React ,{useState,useEffect}from 'react'
import { StyleSheet, Text, View ,StatusBar,TouchableOpacity} from 'react-native'
import { Display } from '../utils'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/MaterialIcons"
import { db } from './firebase'
const AboutSociety = ({navigation,route}) => {
    const mycode=route.params.societyCode
    const [code, setCode] = useState([]);
    useEffect(()=>{
        
        db.ref('user').on('value',snap=>{
          let item = [];
          const a_ =snap.val();
          for (let x in a_){
            item.push({societyCode:a_[x].societyCode,key:x,Address:a_[x].Address,
            SocietyName:a_[x].SocietyName,})
          }
          
      if (mycode) {
        const newData = item.filter(function (element) {
          const itemData = element.societyCode ? element.societyCode : ''
          return itemData.indexOf(mycode) > -1
        })
        setCode(newData)
      }
         
        })
     
      
},[])
    return (
        <View style={styles.container}>
            
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />

            {/* tool bar */}
            <View style={{ display:'flex',
                    flexDirection: 'row',alignItems:'center',backgroundColor:'#0225A1', paddingVertical:10,paddingHorizontal:15, marginTop:23}}>

                        <TouchableOpacity
                            onPress={()=>navigation.goBack()}
                            >
                            <Icon name="keyboard-backspace" size={28} color="#fff"/>
                        </TouchableOpacity>

                        <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',color:'white'}}>About Society</Text>
                        </View>

            </View>

            <View style={{marginHorizontal: 20, 
                        marginVertical:10, display:'flex',
                        flexDirection: 'row',alignItems:'center',
                        backgroundColor:'#F9F9F9', padding:5,
                        borderRadius:15,elevation: 2
                        }}>

                        <Icon
                            style={{paddingLeft:5}}
                            name="info" 
                            size={20}
                            color="#ff0000"/>

                        <Text style={{
                            fontSize:10, 
                            paddingLeft:5,
                            color:'#ff0000'
                            }}>
                            Please ensure you do not share this details for security purposes.
                        </Text>

                    </View>
                    {
            code.map(element => 
            <View style={styles.boxcontainer}>

                <View style={styles.inputSubContainer}>
                    <Icon name="group" size={22}
                        color='#0225A1'
                        style={{marginRight:10}}/>
                    <Text>{element.SocietyName}  Society</Text>
                </View>

                <View style={styles.inputSubContainer}>
                    <Ionicons name="documents" color='#0225A1' size={30}/>
                    <Text style={{fontSize:12, paddingHorizontal:5}}>We serve the less disadvantaged people in our community</Text>
                </View>
                <View style={styles.inputSubContainer}>
                
                <Ionicons name="location" color='#0225A1' size={30}/>
                 <Text>{element.Address} </Text>
                </View>
                <View style={{position: 'absolute', bottom:0, right:5, flexDirection:'row', alignItems:'center', backgroundColor:'#0225A1', padding:5, borderBottomRightRadius:10}}>
                
                <Feather
                 name="calendar" size={18}
                 color='#fff'
                 />
                 <Text style={{color:'white', paddingHorizontal:8}}>14-02-2022</Text>

                </View>
                <View style={styles.inputSubContainer}>
               
                <Icon name="fiber-pin" size={22}
                    color='#ff0000'
                    style={{marginRight:10}}/>
                 <Text style={{color:'#ff0000'}}>{element.societyCode} (society pin)</Text>
                </View>
            </View>)}
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
        marginTop:10
   
     },
     headerTitle:{
       fontSize:20,
       lineHeight:20 * 1.4,
       width:Display.setWidth(80),
       textAlign:'center',
       color:'#000'  
 
     },
       boxcontainer:{
           backgroundColor:'#F9F9F9',
           height:200,
           width:360,
           elevation: 2,
           marginHorizontal:10,
           position:'relative'
           
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
