import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import { Display } from '../utils'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/MaterialIcons"
import { date } from 'yup'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Divider } from 'react-native-elements'

const Events = ({ navigation,route }) => {
  const [Status, setStatus] = useState('')
  const [book, setBookings] = useState([]);
  const name=route.params.name
  const email=route.params.email
  const societyCode =route.params.societyCode
 
  useEffect(() => {

    db.ref('BookEvent').on('value', snap => {
      let item = [];
      const a_ = snap.val();
      for (let x in a_) {
        item.push({
          Status: a_[x].Status, key: x, location: a_[x].location,
          Description: a_[x].Description, events: a_[x].events, price: a_[x].price,
          time: a_[x].time,date: a_[x].date,societyCode:a_[x].societyCode
        })
      }
      const text = 'Accepted'
      if (text) {
        const newData = item.filter(function (element) {
          const itemData = element.Status ? element.Status : ''
          return itemData.indexOf(text) > -1
        })
        setBookings(newData)
      }
      // setBookings(newData)
    })


  }, [])

  // console.log(societyCode,"code 2")
  // console.log(key,"key")
  return (
    <SafeAreaProvider>
       {/* tool bar */}
       <View style={{ display:'flex',
              flexDirection: 'row',alignItems:'center',backgroundColor:'#0225A1', paddingVertical:10,paddingHorizontal:15, marginTop:23}}>

                  <TouchableOpacity
                      onPress={()=>navigation.goBack()}
                      >
                      <Icon name="keyboard-backspace" size={28} color="#fff"/>
                  </TouchableOpacity>

                  <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                      <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',color:'white'}}>Events Awaiting Payment</Text>
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
            Please ensure you make earlier payments to avoid charges on your fee.
        </Text>

    </View>

      <ScrollView>
          
          {book.length > 0 ? (
            book.map(element =>

              <>
              {societyCode == element.societyCode ? (
                 <View style={{ margin: 20,backgroundColor: '#fff',elevation: 3 }}>

                 {/* amount */}
                   <View style={{width: 200}}>
                     <View style={{ backgroundColor: 'blue', justifyContent: 'flex-start', flexDirection: 'row', padding: 8, alignItems:'center', borderBottomRightRadius:10}}>
                       <Icon name="money" color='#fff' size={20} style={{ paddingHorizontal: 5 }} />
                       <Text style={{color: '#fff'}}>
                         Total fee Amount -
                       </Text>
                       <Text style={{color: '#fff'}}>
                         {" "}R{element.price}
                         
                       </Text>
                     </View>
                   </View>

                   <Divider style={{width: 90, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

                   {/* event type */}
                   <View style={{ backgroundColor: '#fff', justifyContent: 'flex-end', flexDirection: 'row', padding: 8, alignItems:'center'}}>
                     <Ionicons name="documents" color='#333' size={20} />
                     <Text style={{paddingHorizontal: 5,color:'#333'}}>
                       {element.events} - event
                     </Text>
                   </View>

                   <Divider style={{width: 120, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

                   {/* date */}
                   <View style={{ backgroundColor: '#fff', justifyContent: 'flex-end', flexDirection: 'row', padding: 8, alignItems:'center' }}>
                     <Feather
                       name="calendar" size={20}
                       style={{ paddingHorizontal: 5 }}
                       color='red'
                     />
                     <Text style={{color:'red', fontSize:12}}>
                       {element.date} (Due-date) 
                     </Text>
                   </View>

                   <Divider style={{width: 170, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

                 {/* location */}
                 <View style={{ backgroundColor: '#fff', justifyContent: 'flex-end', flexDirection: 'row', padding: 8 , alignItems:'center'}}>
                   <Ionicons name="location" color='#333' size={20} />
                   
                   <Text style={{color:'#333'}}>
                     {element.location}
                   </Text>

                 </View>

                 <Divider style={{width: 200, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

                 


                 {/* description */}
                 <View style={{ justifyContent: 'flex-start', flexDirection: 'column', padding: 8,marginHorizontal:10 }}>
                   <Text style={{fontSize: 16, fontWeight: 'bold', color:'#333'}}>
                     Description
                   </Text>
                   <View style={{flexDirection: 'row', alignItems:'center'}}>
                       <Ionicons name="documents" color='#333' size={15} style={{ paddingHorizontal: 5 }} />
                       <Text style={{paddingHorizontal:5, paddingVertical:5, marginHorizontal:5,fontSize:14,color:'#333'}}>
                     {element.Description}
                   </Text>
                   </View>
                 </View>

                 <TouchableOpacity style={styles.signinButton}
                 >
                   <Text style={styles.signinButtonText} onPress={() => navigation.navigate('paymentScreen',{eventtype:element.events,
                     name:name,email:email,price:element.price,date:element.date,societyCode:societyCode,key:element.key,
                     Description:element.Description,})}>PAY R {element.price}</Text>
                 </TouchableOpacity>
                 
               </View>
              ):(
                <>
               
                </>
              )}
               

              
              </>
            )
          ) : (<Text style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>No Accepted Event</Text>)

          }
          </ScrollView>
    </SafeAreaProvider>
    
  )
}

export default Events

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,

    marginTop: 30

  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
    color: '#000'

  },
  boxcontainer: {
    backgroundColor: '#DADADA',
    height: '40%',
    width: '80%',
    marginLeft: 40,
    marginTop: 40
  },
  inputContainer: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
    marginBottom: -10
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: 'black',
    flex: 1

  },
  signinButton: {
    backgroundColor: 'blue',
    borderRadius: 0,
    height: 40,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation: 2,
    marginBottom:10,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: '#fff',

  },
})