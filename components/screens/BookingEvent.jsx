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
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { Display } from "../utils";
import Icon from "react-native-vector-icons/MaterialIcons";
import { db } from "./firebase";
import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";


const BookingEvent = ({ navigation }) => {
  const [pickerindex, setpickerindex] = useState(0);
  const [events, setEvents] = useState("");
  const [location, setLocation] = useState("");
  const [Description, setDescription] = useState("");
  // const [Date,setDate]=useState('')
  const [fee, setFee] = useState("");
  const [Status, setStatus] = useState("Pending");
  const [date, setDate] = useState(new Date());
  // const [time, setTime] = useState('')



function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

const d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
let time = h + ":" + m ;

  const addBooking = () => {
    // if (
    //   events === null ||
    //   location === null ||
    //   Description === null ||
    //   date === null ||
    //   fee ===null ||
    //   time===null
    // ) {
    //   Alert.alert("Error", "Enter all the fields", [
    //     {
    //       text: "ok",
    //     },
    //   ]);
    // } else {
      db.ref('BookEvent').push({
        Status:'Pending',
        events,
        location,
        Description,
        date,
        fee,
        time
      })
    // }
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
          
      }
  }
  const today=new Date()
    
  return (
    <SafeAreaView style={styles.box}>
      <StatusBar backgroundColor="#0225A1" barStyle="light-content" />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="keyboard-backspace" size={20} style={{ padding: 5 }} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Book Event</Text>
      </View>
      <View style={styles.boxcontainer}>
        <View style={{ alignItems: "center" }}>
          {/* <Text style={styles.titles}>Book Event</Text>  */}
        </View>
        <View style={{ padding: 15 }}>
          <Text style={styles.titles}>Event Type</Text>
          
          <Picker
            selectedValue={events}
            onValueChange={(value, index) => {FilterFunction(value)}}
          >
              <Picker.Item label="select" value="" />
            <Picker.Item label="Wedding" value="Wedding" />
            <Picker.Item label="Party" value="Party" />
            <Picker.Item label="Ceremony" value="Ceremony" />
          </Picker>

          <Text style={styles.titles}>Fees </Text>
        {
            EventType.map(element=>(

            <>
            {/* //     <Text>{element.Price}</Text> */}
              <Text>{element.selector}</Text>
            
                <TextInput
                placeholder="R00.00"
                keyboardType="numeric"
                value={element.Price}
                onChangeText={(text) => setFee(text)}
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
            // placeholder="select date"
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

          

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              
            
            />
          )}

          <View>
            <Button onPress={showTimepicker} title="time" 
            onChangeText={(e) => setTime(e)}
            />
          </View>

          <TextInput
              placeholder='time'
              style={{padding:10,backgroundColor:'#fff',
              borderRadius:10,
              borderWidth:1}}
              onChangeText={(text) => setTime(text)}
              />
              
        </View>
        <Pressable style={styles.signinButton} onPress={addBooking}>
          <Text style={styles.signinButtonText}>SUBMIT</Text>
        </Pressable>
      </View>
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
    fontSize: 18,
  },
});
