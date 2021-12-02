import React ,{useState}from 'react'
import { SafeAreaView, StyleSheet, Text, View ,
StatusBar,Pressable, TextInput,TouchableOpacity,Picker} from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import { Display } from '../utils'
import Icon from "react-native-vector-icons/MaterialIcons"
const BookingEvent = ({navigation}) => {
    const [pickerindex,setpickerindex]=useState(0)
    const [events,setEvents]=useState('')
    return (
        <SafeAreaView>
             <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
             <View style={styles.headerContainer} > 
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <Icon name="keyboard-backspace" size={20} style={{ padding: 5 }}/>
              </TouchableOpacity>
              
              <Text style={styles.headerTitle}>Book Event</Text>
              </View>
              <View style={styles.boxcontainer}>
                  <View style={{alignItems:'center'}}>
                  {/* <Text style={styles.titles}>Book Event</Text> */}
                  </View>
                  <View style={{padding:15}}>
              <Text style={styles.titles}>Event Type</Text>
              <Picker 
              selectedValue={events}
              
              onValueChange={(value,index)=>setEvents( value)}
              >
                  <Picker.Item label='Wedding' value='Wedding'/>
                  <Picker.Item label='Party' value='Party'/>
                  <Picker.Item label='Ceremony' value='Ceremony'/>
              </Picker>
              
              
              <Text style={styles.titles}>Fees Paid</Text>
              <TextInput
              placeholder='R00.00'
              style={{padding:10,backgroundColor:'gainsboro',
              borderRadius:10,
              borderWidth:1}}/>
              <Text style={styles.titles}>Event Description</Text>
              <TextInput
              placeholder='Description'
              multiline
              numberOfLines={3}
              style={{padding:10,backgroundColor:'#fff',
              borderRadius:10,
              borderWidth:1}}/>
              <Text style={styles.titles}>Location</Text>
              <TextInput
              placeholder='Location'
              style={{padding:10,backgroundColor:'#fff',
              borderRadius:10,
              borderWidth:1}}/>
              <Text style={styles.titles}>Date</Text>
              <TextInput
              placeholder='Date'
              style={{padding:10,backgroundColor:'#fff',
              borderRadius:10,
              borderWidth:1}}/>
              <Text style={styles.titles}>Time</Text>
              <TextInput
              placeholder='time'
              style={{padding:10,backgroundColor:'#fff',
              borderRadius:10,
              borderWidth:1}}/>
              </View>
              <Pressable style={styles.signinButton} >
                <Text style={styles.signinButtonText}>SUBMIT</Text>
            </Pressable>
              </View>
            
        </SafeAreaView>
    )
}

export default BookingEvent

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row' ,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:30,
        paddingHorizontal:10,
        
       marginTop:20
   
     },
     headerTitle:{
       fontSize:20,
       lineHeight:20 * 1.4,
       width:Display.setWidth(80),
       textAlign:'center',
       color:'#000'  
 
     },
     boxcontainer:{
        // backgroundColor:'#DADADA',
        height:'85%',
        width:'90%',
        marginLeft:20,
        marginTop:-20,
        
    },
    signinButton:{
        backgroundColor:'#0225A1',
        borderRadius:8,
        marginHorizontal:30,
        height:Display.setHeight(6),
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
      paddingVertical:20,
      paddingHorizontal:60,
       elevation:2, 
    },
    signinButtonText:{
        fontSize:18,
        lineHeight:18 * 1.4,
        color:'#fff',    
    },
    titles:{
        fontWeight:'bold',
        fontSize:18
    }
})
