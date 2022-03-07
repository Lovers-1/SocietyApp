import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";
import { Secret_key, STRIPE_PUBLISHABLE_KEY } from './keys';
import { db,auth } from './firebase';
// create a component
const CURRENCY = 'USD';
var CARD_TOKEN = null;

function getCreditCardToken(creditCardData){
  // alert()
  const card = {
    'card[number]': creditCardData.values.number.replace(/ /g, ''),
    'card[exp_month]': creditCardData.values.expiry.split('/')[0],
    'card[exp_year]': creditCardData.values.expiry.split('/')[1],
    'card[cvc]': creditCardData.values.cvc
  };
  return fetch('https://api.stripe.com/v1/tokens', {
    headers: {
      // Use the correct MIME type for your server
      Accept: 'application/json',
      // Use the correct Content Type to send data to Stripe
      'Content-Type': 'application/x-www-form-urlencoded',
      // Use the Stripe publishable key as Bearer
      Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`
    },
    // Use a proper HTTP method
    method: 'post',
    // Format the credit card data to a string of key-value pairs
    // divided by &
    body: Object.keys(card)
      .map(key => key + '=' + card[key])
      .join('&')
  }).
  then(response => response.json())
  .catch((error)=>console.log(error))
};
/**
 * The method imitates a request to our server.
 *
 * @param creditCardToken
 * @return {Promise<Response>}
 */
 function subscribeUser(creditCardToken){
  return new Promise((resolve) => {
    console.log('Credit card token\n', creditCardToken);
    CARD_TOKEN = creditCardToken.id;
    setTimeout(() => {
      resolve({ status: true });
    }, 1000);
  });
};

const CardScreen = ({navigation,route}) => {
//
    const [isVisible, setisVisible] = React.useState(false);
 
 

  //
  const [CardInput, setCardInput] = React.useState({})

  const onSubmit = async () => {

    if (CardInput.valid == false || typeof CardInput.valid == "undefined") {
      alert('Invalid Credit Card');
      return false;
    }

    let creditCardToken;
    try {
      // Create a credit card token
      creditCardToken = await getCreditCardToken(CardInput);
      // console.log("creditCardToken", creditCardToken)
      if (creditCardToken.error) {
        alert("creditCardToken error");
        return;
      }
    } catch (e) {
      console.log("e",e);
      return;
    }
    // Send a request to your server with the received credit card token
    const { error } = await subscribeUser(creditCardToken);
    // Handle any errors from your server
    if (error) {
      alert(error)
    } else {
     
      let pament_data = await charges();
      console.log('pament_data', pament_data);
      if(pament_data.status == 'succeeded')
      {

  alert("Payment Successfully")

      }
      else{
        alert('Payment failed');
      }
    }
  };

//
const userId = auth.currentUser.uid;
//
 


  const charges = async () => {

    const card = {
        'amount':100
        , 
        'currency': CURRENCY,
        'source': CARD_TOKEN,
        'description': "Developers Sin Subscription"
      };

      return fetch('https://api.stripe.com/v1/charges', {
        headers: {
          // Use the correct MIME type for your server
          Accept: 'application/json',
          // Use the correct Content Type to send data to Stripe
          'Content-Type': 'application/x-www-form-urlencoded',
          // Use the Stripe publishable key as Bearer
          Authorization: `Bearer ${Secret_key}`
        },
        // Use a proper HTTP method
        method: 'post',
        // Format the credit card data to a string of key-value pairs
        // divided by &
        body: Object.keys(card)
          .map(key => key + '=' + card[key])
          .join('&')
      }).then(response => response.json());
  };
  


  const _onChange =(data) => {
    setCardInput(data)
  }

  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#0225A1" />
       
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
                        <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',color:'#fff',marginTop:10, paddingTop:15}}>EVENT</Text>
                    </View>
        </View>
      </View>
        <Image 
        source={require('../images/undraw_Credit_card_payment_re_o911.png')}
        style={styles.ImgStyle}
        />
       
        <CreditCardInput 
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        validColor="#fff"
        placeholderColor="#ccc"
        onChange={_onChange} />

      <TouchableOpacity 
      onPress={onSubmit}
      style={styles.button}>
        <Text
          style={styles.buttonText}>
          Pay Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  ImgStyle: {
    width: '100%',
    height: 200,
    marginTop:80,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  button : {
    backgroundColor:'#0225A1',
    width:150,
    height:45,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    borderRadius:5
  },
  buttonText : {
    fontSize: 15,
    color: '#fff',
    fontWeight:'bold',
    textTransform:'uppercase'
  },
  inputContainerStyle : {
    backgroundColor:'#fff',
    borderRadius:5
  },
  inputStyle : {
    backgroundColor:'#0225A1',
    paddingLeft:15,
    borderRadius:5,
    color:'#fff'
  },
  labelStyle : {
    marginBottom:5,
    fontSize:12
  }
 
});

//make this component available to the app
export default CardScreen;


// import React, { useState, useEffect } from 'react';
// import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Modal, Alert ,Image} from 'react-native';
// import { Avatar } from 'react-native-elements';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import firebase from './firebase';
// const Payment = ({ navigation }) => {

//     const [isVisible, setisVisible] = React.useState(false);

//     const displayModel = () => {
//         setisVisible(true);
//     }
//     //
//     const [users, setUsers] = useState([]);

//     //
//     const db = firebase.firestore();

//     useEffect(() => {
//         let userinfo = [];
//         db.collection('hotel').get()
//             .then((res) => {

//                 res.forEach(action => {
//                     userinfo.push({ ...action.data(), id: action.id });
//                     console.log(action.data())
//                 })
//                 setUsers(userinfo);
//             })

//     }, [])

//     return (

//         <>
//             <Text>Lovwes</Text>
//             {users.map(action =>
//             <>
//                 <Text>{action.hotelName}</Text>
                
//                 <Avatar
//                 rounded
//                 source={{uri:action.url}}
              
//               />
//             </>
//                 )}
//                 {/* <Image {action.url} style={{width: 55, height: 55}} /> */}

              
                
             
            
//         </>
//     )
// }


// // {/* <SafeAreaView style={styles.container} >
// // <View>
// //                 < Modal animationType={"slide"}
// //                     transparent={false}
// //                     visible={isVisible}
// //                     onRequestClose={
// //                         () => {
// //                             Alert.alert('Modal has now been closed.');
// //                         }
// //                     }>


// //                     <Text style={styles.text}>
// //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas eget tempus augue, a convallis velit. </Text>
// //                 </Modal >
// //                 <View style={{ margin: 12 }}>
// //                     <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 30 }}>
// //                         <Avatar source={require('../Img/img1.png')} >
// //                         </Avatar>
// //                         < Avatar source={require('../Img/img3.png')} >
// //                         </Avatar>
// //                         <Avatar source={require('../Img/img2.png')}>
// //                         </Avatar>
// //                     </View>
// //                     <Text> Card Number </Text>
// //                     <View style={styles.action} >

// //                         <TextInput

// //                             placeholderTextColor="#666666"
// //                             keyboardType="number-pad"
// //                             autoCorrect={false}
// //                             style={
// //                                 [
// //                                     styles.textInputStyle,
// //                                     {
// //                                         color: 'black',
// //                                     },
// //                                 ]
// //                             }
// //                         />
// //                     </View>
// //                     <Text> Card Holder Name </Text>
// //                     <View style={styles.action} >

// //                         <TextInput

// //                             placeholderTextColor="#666666"
// //                             keyboardType="number-pad"
// //                             autoCorrect={false}
// //                             style={
// //                                 [
// //                                     styles.textInputStyle,
// //                                     {
// //                                         color: 'black',
// //                                     },
// //                                 ]
// //                             } />
// //                     </View >
// //                     <View style={styles.action} >
// //                         <Text > Expiry Date </Text>
// //                         <TextInput
// //                             placeholderTextColor="#666666"
// //                             keyboardType="number-pad"
// //                             autoCorrect={false}
// //                             style={
// //                                 [
// //                                     styles.textInputStyle,
// //                                     {
// //                                         color: 'black',
// //                                     },
// //                                 ]
// //                             }
// //                         />
// //                     </View>

// //                     <View style={styles.action} >
// //                         <Text > CVV </Text>
// //                         <TextInput
// //                             placeholderTextColor="#666666"
// //                             keyboardType="number-pad"
// //                             autoCorrect={false}
// //                             style={
// //                                 [
// //                                     styles.textInputStyle,
// //                                     {
// //                                         color: 'black',
// //                                     },
// //                                 ]
// //                             } />
// //                     </View >
                    
// //                     <TouchableOpacity style={styles.commandButton}
// //                         onPress={
// //                             () => navigation.navigate('PaymentSuc')} >
// //                         <Text style={styles.panelButtonTitle} > Submit < /Text> </TouchableOpacity>
// //                     <TouchableOpacity style={styles.commandButton} onPress={displayModel }>
// //                         <Text style={styles.panelButtonTitle} > Submit < /Text> < /TouchableOpacity>
// //                         </View>

// //                     </SafeAreaView>
// //                 </> */}


// // {/* const styles = StyleSheet.create({
// //                     container: {
// //                     flex: 1,
// //                 backgroundColor: '#fff',
// //                 // alignItems: 'center',
// //                 justifyContent: 'center',
// //     },
// //                 textInput: {
// //                     flex: 1,
// //                 //   marginTop: Platform.OS === 'ios' ? 0 : -12,
// //                 paddingLeft: 10,
// //                 color: '#05375a',
// //     },
// //                 action: {
// //                     flexDirection: 'row',
// //                 borderBottomWidth: 1,
// //                 borderBottomColor: '#f2f2f2',
// //                 borderRadius: 10,
// //                 paddingBottom: 5,
// //     },
// //                 textInputStyle: {
// //                     height: 35,
// //                 borderWidth: 1,
// //                 width: '100%',
// //                 paddingLeft: 20,
// //                 margin: 5,
// //                 borderColor: '#00BFFF',
// //                 backgroundColor: '#FFFFFF',
// //     },
// //                 commandButton: {
// //                 padding: 10,
// //                 borderRadius: 10,
// //                 backgroundColor: '#00BFFF',
// //                 alignItems: 'center',
// //                 marginTop: 10,
// //     },
// //                 panelButton: {
// //                 padding: 13,
// //                 borderRadius: 10,
// //                 backgroundColor: '#FF6347',
// //                 alignItems: 'center',
// //                 marginVertical: 7,
// //     },
// //                 panelButtonTitle: {
// //                 fontSize: 17,
// //                 fontWeight: 'bold',
// //                 color: 'white',
// //     },
// // }) */}

// export default Payment;