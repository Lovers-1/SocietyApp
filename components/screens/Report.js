import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import { auth, db } from './firebase'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/MaterialIcons"
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
    <>
   {payment.length > 0 ? (
        payment.map(element =>

          <>
            <View style={{ margin: 20,backgroundColor: '#fff',elevation: 3 }}>

              <View>
                <Text>
                  Event To Pay
                </Text>
              </View>
              <View style={{ backgroundColor: '#fff', justifyContent: 'space-between', flexDirection: 'row', padding: 8 }}>
                <Ionicons name="documents" color='#0225A1' size={30} />
                <Text>
                  Even Type
                </Text>
                <Text>
                  {element.eventtype}
                </Text>
              </View>
           
              <View style={{ backgroundColor: '#fff', justifyContent: 'space-between', flexDirection: 'row', padding: 8 }}>
                <Icon name="money" color='#0225A1' size={30} style={{ paddingHorizontal: 5 }} />
                <Text>
                  fee Amount
                </Text>
                <Text>
                  R{element.fee}
                </Text>
              </View>
              <View style={{ backgroundColor: '#fff', justifyContent: 'space-between', flexDirection: 'row', padding: 8 }}>
                <Feather
                  name="calendar" size={30}
                  style={{ paddingHorizontal: 5 }}
                  color='#0225A1'
                />
                <Text>
                  Date Due
                </Text>
                <Text>
                  {element.date}
                </Text>
              </View>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 8 }}>
                <Ionicons name="documents" color='#0225A1' size={30} style={{ paddingHorizontal: 5 }} />
                <Text>
                  Description
                </Text>
                <Text>
                  {element.Description}
                </Text>
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
    </>
  )
}

export default Report
