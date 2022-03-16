import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
//import { Icon } from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

const ChatScreen = ({navigation,route}) => {
    return (
        <SafeAreaProvider>
            <View style={{backgroundColor: '#ffffff', justifyContent: 'center', 
            alignItems: 'center', alignContent: 'center', width: '100%'}}>

                <Text style={{width:'100%',textAlign:'center',fontWeight: 'bold', paddingTop: 120,fontSize: 15, margin: 0, color: 'white', backgroundColor:'#0225A1'}}>
                        My Chat Board
                </Text>
                
                    <View style={{flexDirection:'column',justifyContent:'flex-start', 
                        width: '100%', height: '100%', alignItems:'flex-start', paddingBottom: 20, paddingLeft: 20}}>

                        {/* Group Tabs    */}
                        <View style={{paddingTop: 70, width: '100%', height: 1000}}>

                        {/* Existing Group */}
                        <TouchableOpacity onPress={()=>navigation.navigate('chats')}>
                        <Text style={{paddingBottom: 10, color:'#0225A1', fontSize:15, fontWeight:'bold'}}>
                            Society Group Chat
                        </Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:10, marginVertical:10}}>
                            <View style={{flexDirection:'row'}}>
                                <Icon
                                    name='ios-people'
                                    type='Ionicon'
                                    color='#808080'
                                    size={25}/>
                                <Text style={{padding: 5, fontSize: 11, color: '#808080'}}>
                                    group of events
                                </Text>
                            </View>
                                <View style={styles.moreContainer}>
                                    <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon} color='#0225A1'/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    
                        
                        {/* <Card.Divider/> */}

                        {/* Other Groups     */}
                        <Text style={{paddingBottom: 10, paddingTop: 15,display:'none'}}>
                            Other Group
                        </Text>

                        <View style={{flexDirection: 'row', display:'none'}}>
                        <Icon
                            name='ios-people'
                            type='Ionicon'
                            color='#808080'
                            size={25}/>
                            <Text style={{padding: 5, fontSize: 11, color: '#808080'}}>
                                authorized group admins
                            </Text>
                            <View style={styles.moreContainer}>
                                <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon}/>
                            </View>
                        </View>
                        
                        <Card.Divider style={{width:340, alignSelf:'center', padding:3}}/>

                            <View style={{width: '90%', marginTop: 20, backgroundColor:'white', height:300, alignItems:'center', justifyContent: 'center'}}>
                                <LottieView source={require('../lottie/chat.json')} autoPlay loop style={{height:250, width:250}}/>
                            </View>

                        </View>

                        
                        
                    </View>
            </View>
        </SafeAreaProvider>
        
    )
}

export default ChatScreen;

const styles = StyleSheet.create({
    moreContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start'
    },
    moreIcon: {
        color: '#0225A1'
    }
})
