import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
    return (
        <View style={{backgroundColor: '#ffffff', justifyContent: 'center', 
        alignItems: 'center', alignContent: 'center', width: '100%'}}>
            <Text style={{fontWeight: 'bold', paddingTop: 70,fontSize: 15}}>
                    Settings
            </Text>
            
                <View style={{flexDirection:'column',justifyContent:'flex-start', 
                    width: '100%', height: '100%', alignItems:'flex-start', paddingBottom: 20, paddingLeft: 20}}>

                    {/* Settings Tabs    */}
                    <View style={{paddingTop: 20, width: '100%', height: 1000}}>

                    {/* Account Details */}
                    <Text style={{paddingBottom: 10}}>
                        My Account
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='ios-person'
                        type='Ionicon'
                        color='#808080'
                        size={18}/>
                        <Text style={{padding: 5, paddingTop: -15, fontSize: 11, color: '#808080'}}>
                            edit account details
                        </Text>
                        <View style={styles.moreContainer}>
                            <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon}/>
                        </View>
                    </View>
                    
                    <Card.Divider/>

                    {/* Other Groups     */}
                    <Text style={{paddingBottom: 10, paddingTop: 15}}>
                        Notifications
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='ios-notifications'
                        type='Ionicon'
                        color='#808080'
                        size={18}/>
                        <Text style={{padding: 5, paddingTop: -15, fontSize: 11, color: '#808080'}}>
                            updates
                        </Text>
                        <View style={styles.moreContainer}>
                            <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon}/>
                        </View>
                    </View>
                    
                    <Card.Divider/>

                    {/* Settings     */}
                    <Text style={{paddingBottom: 10, paddingTop: 15}}>
                        Settings
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='ios-settings'
                        type='Ionicon'
                        color='#808080'
                        size={18}/>
                        <Text style={{padding: 5, paddingTop: -15, fontSize: 11, color: '#808080'}}>
                            edit unlock methods
                        </Text>
                        <View style={styles.moreContainer}>
                            <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon}/>
                        </View>
                    </View>
                    
                    <Card.Divider/>

                    {/* Help     */}
                    <Text style={{paddingBottom: 10, paddingTop: 15}}>
                        Help
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='ios-help'
                        type='Ionicon'
                        color='#808080'
                        size={18}/>
                        <Text style={{padding: 5, paddingTop: -15, fontSize: 11, color: '#808080'}}>
                            help center, contact us, privacy policy
                        </Text>
                        <View style={styles.moreContainer}>
                            <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon}/>
                        </View>
                    </View>
                    
                    <Card.Divider/>

                    {/* Logout     */}
                    <Text style={{paddingBottom: 10, paddingTop: 15}}>
                        Logout
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='ios-log-out'
                        type='Ionicon'
                        color='#808080'
                        size={18}/>
                        <Text style={{padding: 5, paddingTop: -15, fontSize: 11, color: '#808080'}}>
                            click to sign out
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

export default SettingsScreen

const styles = StyleSheet.create({
    moreContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        
    },
    moreIcon: {
        color: '#d6d7da',
        justifyContent: 'flex-end'
    }
})