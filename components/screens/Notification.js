import React,{useEffect,useState} from 'react'
import { View,StyleSheet, Text ,TouchableOpacity,ScrollView,SafeAreaView,Dimensions} from 'react-native'
import { db } from './firebase'
import { Display } from '../utils'
import Ionicons from "react-native-vector-icons/Ionicons"
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/MaterialIcons"
import Sm from "react-native-vector-icons/SimpleLineIcons"

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Notification = ({navigation}) => {

    const [Status,setStatus]=useState('')
    const [book, setBookings] = useState([]);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
  useEffect(() => {
    let today = new Date();
    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    let time = today.getHours()+':' + (today.getMinutes());
    setDate(date);
    setTime(time);
  }, []);

    useEffect(()=>{
        
            db.ref('BookEvent').on('value',snap=>{
              let item = [];
              const a_ =snap.val();
              for (let x in a_){
                item.push({Status:a_[x].Status,key:x,location:a_[x].location,
                  Description:a_[x].Description,events:a_[x].events,fee:a_[x].fee,
                  time:a_[x].time ,date:a_[x].date, name:a_[x].name})
              }
              setBookings(item)
            })
         
        // db.ref('BookEvent').on('value',snap=>{ 
        //   setBookings({...snap.val() })
        // })  
    },[])
    console.log(book,'fhtg');
  return (
    <SafeAreaView style={{height:height, width:width}}>
      <View>
         {/* tool bar */}
       <View style={{paddingHorizontal: 15, 
                paddingVertical:10, display:'flex',
                flexDirection: 'row',alignItems:'center', elevation:1, backgroundColor:'#0225A1'}}>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                        >
                        <Icons name="keyboard-backspace" size={28} color="#fff" style={{ marginTop:10, paddingTop:15}}/>
                    </TouchableOpacity>

                    <View style={{justifyContent: 'center', width: '100%', flex:1,}}>
                        <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',color:'#fff',marginTop:10, paddingTop:15}}>My Notifications</Text>
                    </View>
        </View>
      </View>

      <ScrollView style={{height:height, width: width}}>

      <View style={styles.container}>
      <View style={{backgroundColor:'#0225A1', height: 60, width: 60, borderRadius:100, marginHorizontal:20, marginVertical:10, position:'relative',textAlign:'center', justifyContent:'center', alignItems:'center', alignContent:'center'}}>
          <Icon name='notifications' size={35} color='#fff' style={{textAlign:'center', justifyContent:'center', alignItems:'center', alignContent:'center'}}/>
          <Text style={{position:'absolute', right:13, top:10, color:'#fff', fontWeight:'bold'}}>{book.length}</Text>
      </View>
        {
            book.map(element => 
            <View style={styles.boxcontainer}>

              <View style={styles.inputSubContainer}>
                {/* <Sm name="event" color='#0225A1' size={30} style={{paddingHorizontal:5}}/> */}
                 <View style={{flexDirection:'row', position:'relative', width:'80%'}}>
                    <View >
                      <Text style={{fontWeight:'bold'}}>{element.name} {element.name}</Text>
                      <Text > booked for {element.events} and the status</Text>
                      
                      <Text> is {element.Status} at {time}</Text>
                      {/* <Text style={{color:'#0225A1'}}></Text> */}
                    </View>
                   
                </View>
            </View>

               {/* <View style={styles.inputSubContainer}>
                <Icon name="event-note" color='#0225A1' size={30} style={{paddingHorizontal:5}}/>
                
                 <Text> {element.Description}</Text>
                </View>

                <View style={styles.inputSubContainer}>
                  <Icon name="money" color='#0225A1' size={30} style={{paddingHorizontal:5}}/>
                 <Text>R{element.fee}</Text>
                </View>
                
                <View style={styles.inputSubContainer}>
                
                <Ionicons name="location" color='#0225A1' size={30} style={{paddingHorizontal:5}}/>
                 <Text>{element.location}</Text>
                </View>
                <View style={styles.inputSubContainer}>
                
                <Feather
                 name="calendar" size={25}
                 color='#0225A1' style={{paddingHorizontal:5}}
                 />
                 <Text>{element.date}</Text>
                </View>
                <View style={styles.inputSubContainer}>
               
                <Icons name="alert-rhombus" size={25} style={{paddingHorizontal:5}}
                    color='#0225A1'
                    styles={{marginRight:10}}/>
                 <Text>{element.Status}</Text>
                </View> */}

            </View>
                
            )
        }
      
        </View>
    </ScrollView>
    
    </SafeAreaView>
      
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //  paddingHorizontal:10,
         elevation:2,
         marginVertical:1,
         height: height,
         width: width
    },
     boxcontainer:{
         backgroundColor:'#DADADA',
        //  width:'100%',
         marginHorizontal:15, 
         marginVertical:10,
         borderRadius:6
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
});
export default Notification;


