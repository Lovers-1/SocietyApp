import React from 'react';
import { Text, View, Button, StatusBar, Image, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-elements';


const HomeScreen = ({navigation}) => {
    return (
        <ScrollView>
            
        <View style={{backgroundColor: '#f0f0f0', width: '100%', height: '100%'}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#0225A1" translucent = {true}/>
            <View style={{justifyContent:'center',
             paddingTop: 50, 
            alignContent:'center', alignItems:'center',backgroundColor: '#0225A1',
            resizeMode: 'cover', borderBottomLeftRadius: 20, borderBottomRightRadius: 20,}}>
            {/* Welcome Text */}

            <View style={{ flex:1, paddingBottom:10, 
            flexDirection:'row',
            justifyContent:'flex-start', padding: 10,
             alignItems:'flex-start'}}>
            
            <Text style={{fontSize: 16, color: '#ffffff',paddingBottom: 50, width: '80%', paddingLeft: 15, fontWeight: '800', letterSpacing: 1.2}}>
                Welcome Back, {"\n"}
                Lawrence Sekgoka
            </Text>
                
                <View style={{width: '20%'}}>
                <Text style={{padding: 6, textAlign: 'center',justifyContent:'center', alignContent:'center',backgroundColor: '#ffffff',height:40,width:40, borderRadius: 100}}>
                                <Icon 
                                name='ios-notifications'
                                type='ionicon'
                                color='#0225A1'
                                size={20}
                                />
                            </Text>
                </View>
                
            </View>
            
            </View>    

            <View style={{backgroundColor: '#ffffff', width: '90%',
            borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center',
            borderTopLeftRadius: 30, marginTop: -30, marginLeft: 20, borderBottomWidth: 0,
            borderTopRightRadius: 30, paddingTop: 10, justifyContent: 'center',}}>
            <Image
            style={{width: 210,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            alignContent:'space-around',
            height: 175, justifyContent: 'center', 
            alignItems: 'center', resizeMode: 'contain'}} 
            source={require('../images/cards.png')} />
            </View>
            
            <View style={{ marginTop:10, flex:1,flexDirection:'row',justifyContent:'flex-start', 
                        alignItems:'flex-start'}}>
            <View style={{padding:5}}>
                <Text style={styles.header}>
                    Transactions
                </Text>
            </View>
            <View style={{width:80, height: 80, padding:3, margin: 1, marginTop: 1, marginLeft: 180}}>
                <Text>
                    View All
                </Text>
            </View>
        </View>
        <View style={{ marginTop:20, flex:1,flexDirection:'row',justifyContent:'flex-start', 
                    alignItems:'flex-start'}}>
       <TouchableOpacity onPress={()=>navigation.navigate('Booking Event')}
       style={{ backgroundColor: '#ffffff', width: '40%', paddingTop: 35, height: 90, 
       borderRadius: 15, marginLeft: 25, marginTop: -40}}>               
        <View >
                          
            <Text style={{fontWeight: '500', paddingLeft: 45}}>
                Booking
            </Text> 
            
        </View>
        </TouchableOpacity>  
        <View style={{ backgroundColor: '#ffffff', width: '40%', paddingTop: 35, height: 90, 
                    borderRadius: 15, marginLeft: 30, marginTop: -40}}>
            <Text style={{fontWeight: '500', paddingLeft: 35}}>
               View 
                Transactions
            </Text>    
        </View>
        </View>  

        <View style={{ marginTop:25,flex:1,flexDirection:'row',justifyContent:'flex-start', 
                    alignItems:'flex-start'}}>
        <View style={{ backgroundColor: '#ffffff', width: '40%', paddingTop: 35, marginBottom: 30, 
                    height: 90, borderRadius: 15, marginLeft: 25}}>
            <Text style={{fontWeight: '500', paddingLeft: 45}}>
                Reports
            </Text>    
        </View>
        <View style={{ backgroundColor: '#ffffff', width: '40%', paddingTop: 35, height: 90, 
                    borderRadius: 15, marginLeft: 30}}>
            <Text style={{fontWeight: '500', paddingLeft: 45}}>
                Events
            </Text>    
        </View>
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