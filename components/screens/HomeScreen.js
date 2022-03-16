import React, { useEffect, useState } from 'react';
import { Text, View, Button, StatusBar, Image, ScrollView, StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import  Card  from 'react-native-elements';
import booking from '../../components/images/booking.jpg'
import about from '../../components/images/about.jpg'
import reports from '../../components/images/reports.jpg'
import events from '../../components/images/events.jpg'
import pay from '../../components/images/pay.jpg'
import pay2 from '../../components/images/pay2.jpg'
import pay3 from '../../components/images/pay3.jpg'
import { auth,db } from './firebase';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
// email:yup.string().required().min(6),
// name: yup.string().required().max(15).min(3),
// surname: yup.string().required().max(15).min(3),
// phoneNo: yup.number().required().min(10),
const HomeScreen = ({navigation,route}) => {
    const user = auth.currentUser.uid;
    const [name,setName]=useState()
    const [surname,setSurname] = useState('');
    const [email,setEmail]=useState('')
    const [societyCode,setSocietyCode]=useState()
    useEffect(()=>{
        db.ref('/societyUser/').child(user).on('value',snap=>{
          
            setName(snap.val() && snap.val().name);
            setSurname(snap.val() && snap.val().surname);
        // setPhonenumber(snap.val().phonenumber)
         setEmail(snap.val().email)
         setSocietyCode(snap.val().societyCode)
          })
    },[])
    return (
        <ScrollView>
            
        <View style={{backgroundColor: '#f0f0f0', width: '100%', height: '100%'}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#0225A1" translucent = {true}/>
            
            <View style={{justifyContent:'center',
             paddingTop: 50, 
            alignContent:'center', alignItems:'center',backgroundColor: '#0225A1',
            resizeMode: 'cover', borderBottomLeftRadius: 20, borderBottomRightRadius: 20,height: height*0.25, position:'relative'}}>
            {/* Welcome Text */}

            <View style={{ flex:1, paddingBottom:10, 
            flexDirection:'row',
            justifyContent:'flex-start', padding: 10,
             alignItems:'flex-start'}}>
            
            <Text style={{fontSize: 16, color: '#ffffff',paddingBottom: 50, width: '80%', paddingLeft: 15, fontWeight: '800', letterSpacing: 1.2}}>
                <Text style={{fontSize: 20, color: '#ffffff', fontWeight: 'bold',paddingVertical:3}}>Welcome Back,</Text> {"\n"}
                <Text style={{fontSize: 18, color: '#ffffff', fontWeight: '800',paddingVertical:3, letterSpacing:2}}>{name} {surname}</Text>
            </Text>
                
                <TouchableOpacity style={{width: '20%', alignItems:'center'}} onPress={()=>navigation.navigate('Notification')}>
                <Text style={{padding: 6, textAlign: 'center',justifyContent:'center', alignContent:'center',backgroundColor: '#ffffff',height:40,width:40, borderRadius: 100, alignSelf: 'center'}}>
                                <Icon 
                                name='ios-notifications'
                                type='ionicon'
                                color='#0225A1'
                                size={25}
                                style={{textAlign: 'center', alignItems:'center'}}
                                />
                            </Text>
                </TouchableOpacity>
                
            </View>

            <View style={{backgroundColor: '#ffffff', width: '90%',
            borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center',
            borderTopLeftRadius: 30, borderBottomWidth: 0,
            borderTopRightRadius: 30, justifyContent: 'center',height: height*0.18, position: 'absolute', bottom: -70, padding:3}}>

                <Image
                style={{width: '100%',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                alignContent:'space-around',
                resizeMode:'cover',
                height: '100%', justifyContent: 'center', 
                alignItems: 'center'}} 
                source={pay3} />

            </View>
            
            </View>

            <View style={{ marginTop:100, flex:1,flexDirection:'row',justifyContent:'flex-start', 
                        alignItems:'flex-start'}}>
            <View style={{padding:5}}>
                <Text style={styles.header}>
                    SERVICES
                </Text>
            </View>
            <View style={{width:80, height: 80, marginTop: 1, marginLeft: 180, textAlign:'right'}}>
                <Text style={{color:'#0225A1',textAlign:'right'}}>
                    View All
                </Text>
            </View>
        </View>

        {/* first card */}
        <View style={{ marginTop:20, flex:1,flexDirection:'row',justifyContent:'flex-start', 
                    alignItems:'flex-start'}}>

       <TouchableOpacity onPress={()=>navigation.navigate('Booking Event',{user:user,name:name,email:email})}
       style={{ backgroundColor: '#ffffff', width: '40%', height: 90, 
       borderRadius: 15, marginLeft: 25, marginTop: -40}}>               
        
        <View style={{position:'relative', textAlign:'center', alignItems:'center', justifyContent: 'center'}}>

            <Image source={booking} alt='booking' style={{resizeMode:'cover',height:'100%',width:'100%', borderRadius: 10, opacity:40}}/>
                          
            <Text style={{fontWeight: 'bold', position:'absolute',color:'white', fontSize:18, textAlign:'center', top:30}}>
                Booking
            </Text> 
            
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('AboutSociety',{societyCode:societyCode})}
       style={{ backgroundColor: '#ffffff', width: '40%', height: 90, 
       borderRadius: 15, marginLeft: 25, marginTop: -40}}>               
        
        <View style={{position:'relative', textAlign:'center', alignItems:'center', justifyContent: 'center'}}>

            <Image source={about} alt='booking' style={{resizeMode:'cover',height:'100%',width:'100%', borderRadius: 10, opacity:40}}/>
                          
            <Text style={{fontWeight: 'bold', position:'absolute',color:'white', fontSize:18, textAlign:'center', top:30}}>
                About Society
            </Text> 
            
        </View>
        </TouchableOpacity>

        {/* <TouchableOpacity style={{ backgroundColor: '#ffffff', width: '40%', paddingTop: 35, height: 90, 
                    borderRadius: 15, marginLeft: 30, marginTop: -40}} 
         onPress={() => navigation.navigate('AboutSociety')}>
        <View >
            <Text style={{fontWeight: '500', paddingLeft: 35}}>
              
                About Society
            </Text>    
        </View>
        </TouchableOpacity> */}
        </View>  

        <View style={{ marginTop:25,flex:1,flexDirection:'row',justifyContent:'flex-start', 
                    alignItems:'flex-start'}}>
         
         <TouchableOpacity onPress={()=>navigation.navigate('Report')}
            style={{ backgroundColor: '#ffffff', width: '40%', height: 90, 
            borderRadius: 15, marginLeft: 25, marginTop: 20}}>               
        
        <View style={{position:'relative', textAlign:'center', alignItems:'center', justifyContent: 'center'}}>

            <Image source={reports} alt='booking' style={{resizeMode:'cover',height:'100%',width:'100%', borderRadius: 10, opacity:40}}/>
                          
            <Text style={{fontWeight: 'bold', position:'absolute',color:'white', fontSize:18, textAlign:'center', top:30}}>
                Reports
            </Text> 
            
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Events',{user:user,name:name,email:email})}
            style={{ backgroundColor: '#ffffff', width: '40%', height: 90, 
            borderRadius: 15, marginLeft: 25, marginTop: 20}}>               
        
        <View style={{position:'relative', textAlign:'center', alignItems:'center', justifyContent: 'center'}}>

            <Image source={events} alt='booking' style={{resizeMode:'cover',height:'100%',width:'100%', borderRadius: 10, opacity:40}}/>
                          
            <Text style={{fontWeight: 'bold', position:'absolute',color:'white', fontSize:18, textAlign:'center', top:30}}>
                Events
            </Text> 
            
        </View>
        </TouchableOpacity>

        </View>
        </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        paddingLeft: 20,
        paddingBottom: 5,
        fontWeight: 'bold',
        fontSize: 15,
        color:  '#000000'
    },
    box: {
        backgroundColor: '#F4F4F4',
        marginLeft: 10,
        marginRight:10,
        // height: 480,
        borderRadius:10
    }
})