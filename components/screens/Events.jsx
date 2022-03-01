import { StyleSheet, Text, View ,TouchableOpacity,ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { db } from './firebase'
import { Display } from '../utils'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/MaterialIcons"

const Events = ({navigation}) => {
    const [Status,setStatus]=useState('')
    const [book, setBookings] = useState([]);
    
    useEffect(()=>{
        
            db.ref('BookEvent').on('value',snap=>{
              let item = [];
              const a_ =snap.val();
              for (let x in a_){
                item.push({Status:a_[x].Status,key:x,location:a_[x].location,
                    Description:a_[x].Description,events:a_[x].events,fee:a_[x].fee,
                    time:a_[x].time })
              }
              const text ='Accepted'
              if(text){
                  const newData=item.filter(function (element){
                      const itemData=element.Status?element.Status:''
                      return itemData.indexOf(text)>-1
                  })
                  setBookings(newData)
              }
            // setBookings(newData)
            })
         
        
    },[])
  return (
    <ScrollView>
    <View style={styles.headerContainer} > 
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <Icon name="keyboard-backspace" size={20} style={{ padding: 5 }}/>
              </TouchableOpacity>
              
              
              </View>
       {
            book.map(element => 
              
            <View style={styles.boxcontainer}>
              <View style={styles.inputSubContainer}>
                <Ionicons name="documents" color='#0225A1' size={30}/>
                
                 <Text> {element.events}</Text>
                </View>
               <View style={styles.inputSubContainer}>
                <Ionicons name="documents" color='#0225A1' size={30}/>
                
                 <Text> {element.Description}</Text>
                </View>
                <View style={styles.inputSubContainer}>
                
                
                 <Text>R {element.fee}</Text>
                </View>
                
                <View style={styles.inputSubContainer}>
                
                <Ionicons name="location" color='#0225A1' size={30}/>
                 <Text>{element.location}</Text>
                </View>
                <View style={styles.inputSubContainer}>
                
                <Feather
                 name="calendar" size={22}
                 color='#0225A1'
                 />
                 <Text>{element.date}</Text>
                </View>
                <View style={styles.inputSubContainer}>
               
                <Icon name="fiber-pin" size={22}
                    color='#0225A1'
                    style={{marginRight:10}}/>
                 <Text>{element.Status}</Text>
                </View>
                <TouchableOpacity style={styles.signinButton}
        >
                <Text style={styles.signinButtonText} onPress={()=>navigation.navigate('paymentScreen')}>PAY R {element.fee}</Text>
            </TouchableOpacity>
            </View>
                
            )
        }
    </ScrollView>
  )
}

export default Events

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
         alignItems:'center',

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
         height:'40%',
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
  signinButton:{
    backgroundColor:'#0225A1',
    borderRadius:8,
    height: 40,
    marginHorizontal:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
  elevation:2,
},
signinButtonText:{
    fontSize:18,
    lineHeight:18 * 1.4,
    color:'#fff',
    
},
})