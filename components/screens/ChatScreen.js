import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';
//import { Icon } from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-elements';

const ChatScreen = () => {
    return (
        <View style={{backgroundColor: '#ffffff', justifyContent: 'center', 
        alignItems: 'center', alignContent: 'center', width: '100%'}}>
            <Text style={{fontWeight: 'bold', paddingTop: 80,fontSize: 15}}>
                    Chat Board
            </Text>
            
                <View style={{flexDirection:'column',justifyContent:'flex-start', 
                    width: '100%', height: '100%', alignItems:'flex-start', paddingBottom: 20, paddingLeft: 20}}>

                    {/* Group Tabs    */}
                    <View style={{paddingTop: 20, width: '100%', height: 1000}}>

                    {/* Existing Group */}
                    <Text style={{paddingBottom: 10}}>
                        My Group
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Icon
                        name='ios-people'
                        type='Ionicon'
                        color='#808080'
                        size={25}/>
                        <Text style={{padding: 5, fontSize: 11, color: '#808080'}}>
                            group of events
                        </Text>
                        <View style={styles.moreContainer}>
                            <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon}/>
                        </View>
                    </View>
                    
                    <Card.Divider/>

                    {/* Other Groups     */}
                    <Text style={{paddingBottom: 10, paddingTop: 15}}>
                        Other Group
                    </Text>
                    <View style={{flexDirection: 'row'}}>
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
                    
                    <Card.Divider/>

                    </View>
                    
                </View>
        </View>
        
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
        color: '#d6d7da'
    }
})
