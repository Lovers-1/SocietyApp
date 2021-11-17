import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-elements';

const paymentScreen = () => {
    return (
        <View style={{backgroundColor: '#ffffff', justifyContent: 'center', 
        alignItems: 'center', alignContent: 'center', width: '100%'}}>
            <Text style={{fontWeight: 'bold', paddingTop: 80,fontSize: 15}}>
                    Payment
            </Text>
            
                <View style={{flexDirection:'column',justifyContent:'flex-start', 
                    width: '100%', height: '100%', alignItems:'flex-start', paddingBottom: 20, paddingLeft: 20}}>

                    {/* Make Payments Tabs    */}
                    <View style={{paddingTop: 20, width: '100%', height: 1000}}>

                    {/* Make Payment */}
                    <Text style={{paddingBottom: 10}}>
                        Make payment
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='ios-card'
                        type='Ionicon'
                        color='#000000'
                        size={25}/>
                        <Text style={{padding: 5, fontSize: 11, color: '#808080'}}>
                            **** **** **** *528
                        </Text>
                        <View style={styles.moreContainer}>
                            <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon}/>
                        </View>
                    </View>
                    
                    <Card.Divider/>

                    {/* Add New Card     */}
                    <Text style={{paddingBottom: 10, paddingTop: 15}}>
                        Add New Card
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='ios-card-outline'
                        type='Ionicon'
                        color='#000000'
                        size={25}/>
                        <Text style={{padding: 5, fontSize: 11, color: '#808080'}}>
                            authorize new card
                        </Text>
                        <View style={styles.moreContainer}>
                            <Icon name="ios-chevron-forward" size={15} style={styles.moreIcon}/>
                        </View>
                    </View>
                    
                    <Card.Divider/>

                    {/* Pay Using ATM     */}
                    <Text style={{paddingBottom: 10, paddingTop: 15}}>
                        Paid Using ATM
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='ios-barcode-outline'
                        type='Ionicon'
                        color='#000000'
                        size={25}/>
                        <Text style={{padding: 5, fontSize: 11, color: '#808080'}}>
                            scan receipt / enter receipt number
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

export default paymentScreen

const styles = StyleSheet.create({
    header: {
        paddingLeft: 20,
        paddingBottom: 5,
        fontWeight: 'bold',
        fontSize: 15,
        color:  '#000000'
    },
    box: {
        backgroundColor: '#add8e6',
        marginLeft: 10,
        marginRight:10,
        // height: 480,
        borderRadius:10
    },
    moreContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        
    },
    moreIcon: {
        color: '#d6d7da'
    }
})