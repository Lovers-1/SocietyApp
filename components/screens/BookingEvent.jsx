import React, { useState,useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  StatusBar,
  Pressable,
  TextInput,
  TouchableOpacity,
  Picker,
  Button,
  ScrollView,Dimensions
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { Display } from "../utils";
import Icon from "react-native-vector-icons/MaterialIcons";
import { db } from "./firebase";
import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const BookingEvent = ({ navigation ,route}) => {
  const [name,setName]=useState(route.params.name)
  const [surname,setSurname] = useState(route.params.surname);
  const [email,setEmail]=useState(route.params.email)
  const [societyCode, setSocietyCode] = useState(route.params.societyCode)

  const [pickerindex, setpickerindex] = useState(0);
  const [events, setEvents] = useState("");
  const [location, setLocation] = useState("");
  const [Description, setDescription] = useState("");
  // const [Date,setDate]=useState('')
 
  const [Status, setStatus] = useState("Pending");
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [time, setTime] = useState('')

console.log(societyCode,"code")

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

const d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
//let time = h + ":" + m ;

  const addBooking = () => {
    if (
    //  events == '' ||
      location == '' ||
      Description == '' ||
      date == '' ||
     // fee =='' ||
      time==''
    ) {
      Alert.alert("Error", "Enter all the fields", [
        {
          text: "ok",
        },
      ]);
    } else {
      db.ref('BookEvent').push({
        Status:'Pending',
        events,
        location,
        Description,
        date,
        societyCode,       
        price,
        time
       ,name,email
      })
      setDescription('')
      
      setLocation('')
      setTime('')
      navigation.navigate('bookingSc')
    }
  };

  // 083 980 9151

  // const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const [EventType, setEventType] = useState([]);
  const [Event, setEvent] = useState([]);
    useEffect(()=>{
        
            db.ref('/Event/').on('value',snap=>{
              let item = [];
              const a_ =snap.val();
              for (let x in a_){ 
                item.push({Price:a_[x].Price,key:x,selector:a_[x].selector})
              }
            
              setEvent(item)
              
            })
         
      
    },[])
    console.log(Event,'EventType')
    const FilterFunction =(text)=>{
      if(text){
          const newData = Event.filter(function(item){
              const itemData = item.selector? item.selector.toUpperCase()
              :''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf( textData)>-1;

          })
          setEventType(newData)
          setEvents(text)
      }
  }
  const today=new Date()
  const newtime=moment(new Date()).format('HH:MM')

  var price = 0;



    
  return (
    <SafeAreaView style={styles.box}>
      <StatusBar backgroundColor="#0225A1" barStyle="light-content" />
      
       {/* tool bar */}
       <View style={{ display:'flex',
                flexDirection: 'row',alignItems:'center',backgroundColor:'#0225A1', paddingVertical:10,paddingHorizontal:15, marginTop:23}}>

                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                        >
                        <Icon name="keyboard-backspace" size={28} color="#fff"/>
                    </TouchableOpacity>

                    <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                        <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',color:'white'}}>Book My Event</Text>
                    </View>

        </View>
      
      <ScrollView style={{height: height, width: width, marginTop:40}}>
          <View style={styles.boxcontainer}>
            <View style={{ alignItems: "center" }}>
              {/* <Text style={styles.titles}>Book Event</Text>  */}
            </View>
            <View style={{ padding: 15}}>
              <Text style={styles.titles}>Select Event Type</Text>
              
              <Picker
                selectedValue={events}
                onValueChange={(value, index) => {FilterFunction(value)}}
              >
                  <Picker.Item label="select" value="" />
                <Picker.Item label="Wedding" value="Wedding" />
                <Picker.Item label="Party" value="Party" />
                <Picker.Item label="Funeral" value="Funeral" />
              </Picker>

              <Text style={styles.titles}>Fees </Text>
            {
                EventType.map(element=>(

                <>
              
                  {/* <Text>{element.selector}</Text> */}
                  <Text style={{color:'#000',fontWeight:'bold'}}>Price for {element.selector} = R {price= element.Price}</Text>
                {}
                  <TextInput
                    placeholder="R00.00"
                    keyboardType="numeric"
                    value={element.Price}
                  //  onChangeText={ setFee(element.Price)}
                    style={{
                      padding: 10,
                      backgroundColor: "gainsboro",
                      borderRadius: 10,
                      borderWidth: 1,
                    }}
                  />
                      </>
              
                ))
            
            }
            
            {/* <TextInput
                    placeholder="R00.00"
                    keyboardType="numeric"
                    value={fee}
                    onChangeText={(text) => setFee(text)}
                    style={{
                      padding: 10,
                      backgroundColor: "gainsboro",
                      borderRadius: 10,
                      borderWidth: 1,
                    }}
                  /> */}
          
              <Text style={styles.titles}>Event Description</Text>
              <TextInput
                placeholder="Description"
                multiline
                value={Description}
                onChangeText={(text) => setDescription(text)}
                numberOfLines={3}
                style={{
                  padding: 10,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  borderWidth: 1,
                }}
              />
              <Text style={styles.titles}>Location</Text>
              <TextInput
                placeholder="Location"
                value={location}
                onChangeText={(text) => setLocation(text)}
                style={{
                  padding: 10,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  borderWidth: 1,
                }}
              />
              <Text style={styles.titles}>Date</Text>

              <DatePicker
                //   style={styles.datePicker}
                style={{ width: "100%" }}
                date={date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate={today}
                // maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 8,
                    top: 4,
                    color: "blue",
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 0,

                    backgroundColor: "#fff",
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "black",
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => 
                  setDate(date)
                }
              />

              <Text style={styles.titles}>Time</Text>

              {/* <TextInput
                  placeholder='time'
                  style={{padding:10,backgroundColor:'#fff',
                  borderRadius:10,
                  borderWidth:1}}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  /> */}

              <Picker
                selectedValue={time}
                onValueChange={(value, index) => {setTime(value)}}
              >
                <Picker.Item label="Select time" value="" />
                <Picker.Item label="09:00 am" value="09:00 am" />
                <Picker.Item label="12:00 pm" value="12:00 pm" />
                <Picker.Item label="15:00 pm" value="15:00 pm" />
                <Picker.Item label="18:00 pm" value="18:00 pm" />
              </Picker>
                  
            </View>
            <TouchableOpacity style={styles.signinButton} onPress={addBooking}>
              <Text style={styles.signinButtonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
     
    </SafeAreaView>
  );
};

export default BookingEvent;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 10,

    marginTop: 20,
  },
  box: {
    backgroundColor: "white",
    height: "100%",
  },

  headerTitle: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: "center",
    color: "#000",
  },
  boxcontainer: {
    // backgroundColor:'#DADADA',
    height: "85%",
    width: "90%",
    marginLeft: 20,
    marginTop: -20,
  },
  signinButton: {
    backgroundColor: "#0225A1",
    borderRadius: 8,
    marginHorizontal: 30,
    height: Display.setHeight(6),
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 60,
    elevation: 2,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: "#fff",
  },
  titles: {
    fontWeight: "bold",
    fontSize: 16,
    color:'#333'
  },
});
