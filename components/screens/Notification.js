import React,{useEffect,useState} from 'react'
import { View,StyleSheet, Text } from 'react-native'
import { db } from './firebase'

const Notification = ({navigation}) => {

    const [Status,setStatus]=useState('')
    const [book, setBookings] = useState([]);
    
    useEffect(()=>{
        
            db.ref('BookEvent').on('value',snap=>{
              let item = [];
              const a_ =snap.val();
              for (let x in a_){
                item.push({Status:a_[x].Status,key:x,location:a_[x].location})
              }
              setBookings(item)
            })
         
        // db.ref('BookEvent').on('value',snap=>{ 
        //   setBookings({...snap.val() })
        // })
    })
    console.log(book,'fhtg');
  return (
      <>
    <View style={styles.container}>

        {
            book.map(element => 
                <Text>
                    {element.Status}
                    {element.location}
                </Text>
            )
        }
      
        </View>
    </>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
         alignItems:'center',

    },
});
export default Notification;


