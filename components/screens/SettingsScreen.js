import React,{useState,useEffect} from 'react'
import { Text, View, StyleSheet,TouchableOpacity,  ToastAndroid } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { auth,db } from './firebase';
const SettingsScreen = ({navigation}) => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phoneNo,setphoneNo]=useState('')
    const [uid,setUid]=useState('')
    const user = auth.currentUser.uid;

    useEffect(()=>{
        db.ref(`/societyUser/`+ user).on('value',snap=>{
          
          setName(snap.val() && snap.val().name);
      setEmail(snap.val().email)
      setphoneNo(snap.val().phoneNo)
      setUid(snap.val().uid)
        })  
      },[])

      const signOut =() =>{
          auth.signOut();
          navigation.navigate('SignIn')
    ToastAndroid.show("Succussfully loged out ", ToastAndroid.SHORT)
      }
    return (
        <View style={{backgroundColor: '#ffffff', justifyContent: 'center', 
        alignItems: 'center', alignContent: 'center', width: '100%'}}>
           
           <Text style={{width:'100%',textAlign:'center',fontWeight: 'bold', paddingTop: 120,fontSize: 15, margin: 0, color: 'white', backgroundColor:'#0225A1'}}>
                        Settings
                </Text>
            
                <View style={{flexDirection:'column',justifyContent:'flex-start', 
                    width: '100%', height: '100%', alignItems:'flex-start', paddingBottom: 20, paddingLeft: 20}}>

                    {/* Settings Tabs    */}
                    
                    <View style={{paddingTop: 70, width: '100%', height: 1000}}>

                    {/* Account Details */}
                    <TouchableOpacity onPress={()=>navigation.navigate('Account Details',{
                        name:name,
                        email:email,
                        phoneNo:phoneNo,
                        uid:uid
                    })}>
                    <Text style={{paddingBottom: 10}}>
                        My Account
                    </Text>
                    
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='ios-person'
                        type='Ionicon'
                        color='#808080'
                        size={18}/>
                        <Text style={{padding: 5, paddingTop: -15, fontSize: 11, color: '#808080'}}>
                            edit account details
                        </Text>
                        </View>
                        <View style={styles.moreContainer}>
                            <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon}/>
                        </View>
                        
                    </View>
                    </TouchableOpacity>
                    <Card.Divider/>

                    {/* Other Groups     */}
                    <Text style={{paddingBottom: 10, paddingTop: 15}}>
                        Notifications
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='ios-notifications'
                        type='Ionicon'
                        color='#808080'
                        size={18}/>
                        <Text style={{padding: 5, paddingTop: -15, fontSize: 11, color: '#808080'}}>
                            updates
                        </Text></View>
                        <View style={styles.moreContainer}>
                            <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon}/>
                        </View>
                    </View>
                    
                    <Card.Divider/>

                    <TouchableOpacity onPress={()=>navigation.navigate('Help And Support')}>
                    <Text style={{paddingBottom: 10, paddingTop: 15}}>
                        Help
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='ios-help'
                        type='Ionicon'
                        color='#808080'
                        size={18}/>
                        <Text style={{padding: 5, paddingTop: -15, fontSize: 11, color: '#808080'}}>
                            help center, contact us, privacy policy
                        </Text></View>
                        <View style={styles.moreContainer}>
                            <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon}/>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <Card.Divider/>

                    {/* Logout     */}

                    <TouchableOpacity onPress={signOut} style={{backgroundColor:'red', width:140, marginTop: 50, borderRadius:5, padding:5}}>

                    <View style={{flexDirection: 'row', justifyContent:'center'}}>
                    <Icon
                        name='ios-log-out'
                        type='Ionicon'
                        color='#fff'
                        size={25}/>
                        <Text style={{padding: 5, paddingTop: -15, fontSize: 18, color: '#fff'}}>
                            Log-out
                        </Text>
                    </View>
                    </TouchableOpacity>

                    </View>
                    
                </View>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    moreContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        
    },
    moreIcon: {
        color: '#d6d7da',
        paddingRight:15,
        justifyContent: 'flex-end'
    }
})