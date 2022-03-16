import { ScrollView, StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React,{useEffect, useState} from 'react'
import { auth, db } from './firebase'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/MaterialIcons"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Divider } from 'react-native-elements'
const Report = ({navigation}) => {
    const UserId=auth.currentUser.uid
    const [payment,setPayment]=useState([])

    useEffect(() => {

        db.ref('payment').on('value', snap => {
          let item = [];
          const a_ = snap.val();
          for (let x in a_) {
            item.push({
              Status: a_[x].Status, key: x, name:a_[x].name,
              Description: a_[x].Description, eventtype: a_[x].eventtype, fee: a_[x].fee,
              time: a_[x].time,date: a_[x].date,Ctime:a_[x].Ctime,Cdate:a_[x].Cdate,uid:a_[x].uid
            })
          }
    
          if (UserId) {
            const newData = item.filter(function (element) {
              const itemData = element.uid ? element.uid : ''
              return itemData.indexOf(UserId) > -1
            })
            setPayment(newData)
          }
          // setBookings(newData)
        })
    
    
      }, [])
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
                      <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',color:'white'}}>My Reports History</Text>
                  </View>

      </View>
      <ScrollView style={{top:0}}>
      

   {payment.length > 0 ? (
        payment.map(element =>

          <>

            <View style={{ margin: 20,backgroundColor: '#fff',elevation: 3, borderRadius:15 }}>


              {/* amount */}
              <View style={{width: 200}}>
                <View style={{ backgroundColor: 'blue', justifyContent: 'flex-start', flexDirection: 'row', padding: 8, alignItems:'center',borderTopLeftRadius:10, borderBottomRightRadius:10}}>
                  <Icon name="money" color='#fff' size={20} style={{ paddingHorizontal: 5 }} />
                  <Text style={{color: '#fff'}}>
                    Total fee Amount -
                  </Text>
                  <Text style={{color: '#fff'}}>
                     {" "}R{element.fee}
                  </Text>
                </View>
              </View>

              <Divider style={{width: 90, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

              {/* type of event */}
              <View style={{ backgroundColor: '#fff', justifyContent: 'flex-end', flexDirection: 'row', padding: 8, alignItems:'center'}}>
                <Ionicons name="documents" color='#333' size={20} />
                {/* <Text>
                  Even Type
                </Text> */}
                <Text style={{paddingHorizontal: 5}}>
                  {element.eventtype}
                </Text>
              </View>
              
              <Divider style={{width: 120, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>
              {/* payment due date */}
              <View style={{ backgroundColor: '#fff', justifyContent: 'flex-end', flexDirection: 'row', padding: 8, alignItems:'center' }}>
                <Feather
                  name="calendar" size={20}
                  style={{ paddingHorizontal: 5 }}
                  color='#333'
                />
                <Text>
                  {element.date} (Due-date)
                </Text>
              </View>

              <Divider style={{width: 170, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

              {/* description */}
              <View style={{ justifyContent: 'flex-start', flexDirection: 'column', padding: 8,marginHorizontal:10 }}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color:'blue'}}>
                  Description
                </Text>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Ionicons name="documents" color='#0225A1' size={15} style={{ paddingHorizontal: 5 }} />
                    <Text style={{paddingHorizontal:5, paddingVertical:5, marginHorizontal:5,fontSize:14,color:'#333'}}>
                  {element.Description}
                </Text>
                </View>
                
              </View>
             
            </View>

           
          </>
        )
      ) : (<Text style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>No Payment</Text>)

      }
    </ScrollView>
    </SafeAreaProvider>
    
  )
}

export default Report

const styles = StyleSheet.create({
  container:{

  }
  ,
  headerContainer:{
     flexDirection:'row' ,
     alignItems:'flex-start',
     justifyContent:'space-between',
     paddingVertical:40,
     paddingHorizontal:20
  },
  headerTitle:{
      fontSize:20,
      lineHeight:20 * 1.4,
      width:80,
      textAlign:'center'  

    },
  })
