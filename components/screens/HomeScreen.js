import React from 'react';
import { Text, View, Button, StatusBar, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-elements';


const HomeScreen = () => {
    return (
        <ScrollView>
            
        <View style={{backgroundColor: '#ffffff', width: '100%', height: '100%'}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00bfff" translucent = {true}/>
            <View style={{justifyContent:'center',
            padding:20, paddingTop: 150, 
            alignContent:'center', alignItems:'center',backgroundColor: '#0225A2',
            resizeMode: 'cover', borderBottomLeftRadius: 20, borderBottomRightRadius: 20,}}>
            
            {/* Welcome Text */}
            <View style={{ marginTop:10,flex:1,flexDirection:'row',justifyContent:'flex-start', alignItems:'flex-start'}}>
            <Text style={{fontSize: 15, color: '#ffffff',paddingBottom: 50, marginLeft: 0, marginTop: -120, marginRight: 100}}>
                WELCOME BACK, {"\n"}
                Lawrence Sekgoka
            </Text>
            <View style={{width:80, color: '#ffffff', paddingBottom: 80, 
            marginTop: -135, paddingLeft: 55}}>
                <Text style={{backgroundColor: '#ffffff', width: '100%',marginRight: 0, borderRadius: 10}}>
                    <Icon 
                    name='ios-notifications'
                    type='ionicon'
                    color='#0000ff'
                    size={20}
                    />
                </Text>
            </View>
            </View>
            </View>    
            

            <View style={{backgroundColor: '#ffffff', width: '90%',
            borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center',
            borderTopLeftRadius: 30, marginTop: -70, marginLeft: 17, borderBottomWidth: 3,borderTopRightRadius: 30, paddingTop: 10, justifyContent: 'center',}}>
            <Image
            style={{width: 210,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 175, justifyContent: 'center', 
            alignItems: 'center'}} 
            source={require('../images/cards.png')} />
            </View>
            
            <View style={{ marginTop:10,flex:1,flexDirection:'row',justifyContent:'flex-start', alignItems:'flex-start'}}>
            <View style={{padding:5}}>
                <Text style={styles.header}>
                    Transactions
                </Text>
            </View>
            <View style={{width:80, height: 80, padding:3, margin: 1, marginTop: 1, marginLeft: 160}}>
                <Text>
                    View All
                </Text>
            </View>
         </View>
         <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', 
          paddingRight: 45, marginBottom: 20, marginTop: -50}}>
             <Icon
                name='ios-filter'
                type='Ionicon'
                color='#0000ff'
                size={15}/>
         </View>
         <View style={styles.box}>
         <View style={{ marginTop:10,flexDirection:'row',justifyContent:'flex-start', 
         alignItems:'flex-start', paddingBottom: 55, marginLeft: 250}}>
            <View>
                <Text>
                <Icon
                    name='ios-calendar-sharp'
                    type='Ionicon'
                    color='#000000'
                    size={25}/>
                </Text>
            </View>
            <View>
                <Text style={{fontWeight: '100', fontSize: 11, padding: 5}}>
                    Feb - 2021
                </Text>
            </View>
         </View>

         {/* Client's details */}
         <View>
         <View style={{flexDirection:'row',justifyContent:'flex-start', 
         alignItems:'flex-start', paddingBottom: 20, marginTop: -45, paddingLeft: 20}}>
             <View>
             <Icon
                    name='ios-people'
                    type='Ionicon'
                    color='#000000'
                    size={25}/>
             </View>
             <View>
                 <Text style={{fontSize: 12, padding: 6}}>
                    Johnsons R Polokwane
                 </Text>
             </View>
             <View>
                <Text style={{padding: 6, paddingLeft: 90, fontWeight: 'bold'}}>
                    R150.00
                </Text>
                <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 20}}>
                <Icon
                    name='ios-caret-down'
                    type='Ionicon'
                    color='#000000'
                    size={15}/>
                </View>
             </View>
         </View>
         <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize:10, marginTop: -40, paddingLeft: 52}}>
                Transaction
            </Text>
         </View>
         </View>
         
         <Card.Divider/>
         <View style={{ marginTop:10,flexDirection:'row',justifyContent:'flex-start', 
         alignItems:'flex-start', paddingBottom: 55, marginLeft: 250}}>
            <View>
                <Text>
                <Icon
                    name='ios-calendar-sharp'
                    type='Ionicon'
                    color='#000000'
                    size={25}/>
                </Text>
            </View>
            <View>
                <Text style={{fontWeight: '100', fontSize: 11, padding: 5}}>
                    jan - 2021
                </Text>
            </View>
         </View>

         {/* Client's details */}
         <View>
         <View style={{flexDirection:'row',justifyContent:'flex-start', 
         alignItems:'flex-start', paddingBottom: 20, marginTop: -45, paddingLeft: 20}}>
             <View>
             <Icon
                    name='ios-people'
                    type='Ionicon'
                    color='#000000'
                    size={25}/>
             </View>
             <View>
                 <Text style={{fontSize: 12, padding: 6}}>
                    Daniel MD Polokwane
                 </Text>
             </View>
             <View>
                <Text style={{padding: 6, paddingLeft: 90, fontWeight: 'bold'}}>
                    R150.00
                </Text>
                <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 20}}>
                <Icon
                    name='ios-caret-down'
                    type='Ionicon'
                    color='#000000'
                    size={15}/>
                </View>
             </View>
         </View>
         <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize:10, marginTop: -40, paddingLeft: 52}}>
                Transaction
            </Text>
         </View>
         </View>

         <Card.Divider/>
         <View style={{ marginTop:10,flexDirection:'row',justifyContent:'flex-start', 
         alignItems:'flex-start', paddingBottom: 55, marginLeft: 250}}>
            <View>
                <Text>
                <Icon
                    name='ios-calendar-sharp'
                    type='Ionicon'
                    color='#000000'
                    size={25}/>
                </Text>
            </View>
            <View>
                <Text style={{fontWeight: '100', fontSize: 11, padding: 5}}>
                    june - 2021
                </Text>
            </View>
         </View>

         {/* Client's details */}
         <View>
         <View style={{flexDirection:'row',justifyContent:'flex-start', 
         alignItems:'flex-start', paddingBottom: 20, marginTop: -45, paddingLeft: 20}}>
             <View>
             <Icon
                    name='ios-people'
                    type='Ionicon'
                    color='#000000'
                    size={25}/>
             </View>
             <View>
                 <Text style={{fontSize: 12, padding: 6}}>
                    Simon TD Polokwane
                 </Text>
             </View>
             <View>
                <Text style={{padding: 6, paddingLeft: 90, fontWeight: 'bold'}}>
                    R150.00
                </Text>
                <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 20}}>
                <Icon
                    name='ios-caret-down'
                    type='Ionicon'
                    color='#000000'
                    size={15}/>
                </View>
             </View>
         </View>
         <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize:10, marginTop: -40, paddingLeft: 52}}>
                Transaction
            </Text>
         </View>
         </View>

         <Card.Divider/>
         <View style={{ marginTop:10,flexDirection:'row',justifyContent:'flex-start', 
         alignItems:'flex-start', paddingBottom: 5, marginLeft: 250}}>
            <View>
                <Text>
                <Icon
                    name='ios-calendar-sharp'
                    type='Ionicon'
                    color='#000000'
                    size={25}/>
                </Text>
            </View>
            <View>
                <Text style={{fontWeight: '100', fontSize: 11, padding: 5}}>
                    dec - 2021
                </Text>
            </View>
         </View>

         {/* Client's details */}
         <View>
         <View style={{flexDirection:'row',justifyContent:'flex-start', 
         alignItems:'flex-start', paddingBottom: 20, paddingLeft: 20}}>
             <View>
             <Icon
                    name='ios-people'
                    type='Ionicon'
                    color='#000000'
                    size={25}/>
             </View>
             <View>
                 <Text style={{fontSize: 12, padding: 6}}>
                    Johnsons R Polokwane
                 </Text>
             </View>
             <View>
                <Text style={{padding: 6, paddingLeft: 90, fontWeight: 'bold'}}>
                    R150.00
                </Text>
                <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 20}}>
                <Icon
                    name='ios-caret-down'
                    type='Ionicon'
                    color='#000000'
                    size={15}/>
                </View>
             </View>
         </View>
         <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize:10, marginTop: -40, paddingLeft: 52}}>
                Transaction
            </Text>
         </View>
         </View>

         <Card.Divider/>
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