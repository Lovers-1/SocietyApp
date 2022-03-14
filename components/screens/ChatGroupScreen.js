import React, { useState, useEffect,useCallback } from 'react';
import { SafeAreaView, StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    FlatList,
    Dimensions,
    Alert} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons'
import { Icon } from 'react-native-elements';
import {bf, db} from './firebase'
import { GiftedChat } from 'react-native-gifted-chat'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ChatGroupScreen = ({navigation}) => {

    const [inputMessage, setInputMessage] = useState();
    const [messages, setMessages] =useState([])


    const message=()=>{

      db.ref('/message')
      .push({
        inputMessage
      })

        // bf.collection("mess").add({
        //   inputMessage:inputMessage
        // })
        // .then((res) => {
        //   console.log('successfully !!')
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
      

    }
    useEffect(()=>{
        
      db.ref('/message').on('value',snap=>{
        let item = [];
        const a_ =snap.val();
        for (let x in a_){
          item.push({inputMessage:a_[x].inputMessage})
        }
        setMessages(item)
      })
      setMessages([
        {
          _id: 1,
          text: 'Hi',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
   
  // db.ref('BookEvent').on('value',snap=>{ 
  //   setBookings({...snap.val() })
  // })  
},[])

    //useEffect(()=>{
      // db.ref("/message")
      // .on('value', snap=>{
      //   let item = [];
      //   const a = snap.val();

      //   for (let x in a){
      //     item.push({message : a [x]})
      //   }
      //   setMessages(item)
      //   console.log(item)
        
      // })

      // let info = [];

      // bf.collection('mess')
      // .get()
      // .then((res)=>{
      //     res.forEach(element=>{
      //       info.push({ ...element.data(), id: element.id})
      //       console.log(element.data())

      //     })
      //     setMessages(info)
      // })
      
    //},[])


    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])


  return (
    <GiftedChat
    messages={messages}
    onSend={messages => onSend(messages)}
    user={{
      _id: 1,
    }}
  />
  )
}

const styles = StyleSheet.create({
    headerLeft: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    userProfileImage: { height: '100%', aspectRatio: 1, borderRadius: 100 },
    container: {
      flex: 1,
      backgroundColor: '#f2f2ff',
    },
    messageInputView: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: 14,
      backgroundColor: '#fff',
      borderRadius: 4,
      width: width*0.94
    },
    messageInput: {
      height: 40,
      flex: 1,
      paddingHorizontal: 10,
    },
    messageSendView: {
      paddingHorizontal: 10,
      justifyContent: 'center',
    },
  });

export default ChatGroupScreen



// <SafeAreaView style={{width: width, height: height,backgroundColor:'#fff'}}>
//         <View style={{width: width, height: height,position:'relative'}}>

//             {/* tool bar */}
//             <View style={{ display:'flex',
//                     flexDirection: 'row',alignItems:'center',backgroundColor:'#fff', paddingVertical:20,paddingHorizontal:10, textAlign:'center'}}>

//                         <TouchableOpacity
//                             onPress={() =>navigation.goBack()}
//                             >
//                             <Icons name="keyboard-backspace" size={28} color="#000" style={{paddingTop:15}}/>
//                         </TouchableOpacity>

//                         <View style={{justifyContent: 'center', width: '100%', flex:1}}>
//                             <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',paddingTop:15}}>Chatting Board</Text>
//                         </View>
//             </View>



//             {/* flat list con */}
//                 <View style={{backgroundColor:'#EFEFEF', height: height, width}}>
// <View >

//                   {
//                   messages.map((element)=>
                    
//                   <Text>{element.inputMessage}</Text>

                  
//                   ) 
                  
//                   }
//                 </View>
//                 </View>

                

//             <View style={{ paddingVertical: 10,position:'absolute',bottom:80}}>
//                 <View style={styles.messageInputView}>
//                     <TextInput
//                     name={inputMessage}
//                     style={styles.messageInput}
//                     placeholder='Message'
//                     onChangeText={(text) => setInputMessage(text)}
//                     onSubmitEditing={() => {
                        
//                     }}
//                     />
//                     <TouchableOpacity
//                     style={styles.messageSendView}
//                     onPress={message}
                    
//                     >
//                     <Icon  name='send' type='material' />
//                     </TouchableOpacity>
//                 </View>
//             </View>

//         </View>
//     </SafeAreaView>