import React from "react";
import { TextInput, Text, View, Image, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import '../images/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'




const paymentScreen = ({ navigation }) => {
    return (
        <>

            <SafeAreaView >

                <View style={{paddingHorizontal: 15, 
                paddingVertical:10, display:'flex',
                flexDirection: 'row',alignItems:'center', elevation:1, backgroundColor:'#0225A1', height:80}}>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                        >
                        <Icons name="keyboard-backspace" size={28} color="#fff" style={{ marginTop:10, paddingTop:15}}/>
                    </TouchableOpacity>
                    <View style={{justifyContent: 'center', width: '100%', flex:1,}}>
                        <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',color:'#fff',marginTop:10, paddingTop:15}}>Add New Card</Text>
                    </View>
                </View>

                <ScrollView>
                <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}}>
                    <Image style={style.bank} source={require('../images/Rectangle13.png')} />
                </View>

                <View style={style.details}>
                    <View style={{marginTop: 2}} >
                        <Text style={{margin: 5, fontWeight: '600', textTransform:'capitalize'}}>card Number</Text>

                        <View style={style.inputBox} class="input-group mb-3 input-group-sm">
                            <Icon name="credit-card" size={20} style={{ padding: 5 }}></Icon>
                            <TextInput style={style.input} type="text" class="form-control" placeholder="card number" />
                        </View>

                    <View style={{marginTop: 5}} >
                        <Text style={{margin: 5, fontWeight: '600', textTransform:'capitalize'}}>card holder name</Text>

                        <View style={style.inputBox} class="input-group mb-3 input-group-sm">
                            <Icon name="people" size={20} style={{ padding: 5 }}></Icon>
                            <TextInput style={style.input} type="text" class="form-control" placeholder="Enter card holder" />
                        </View>

                    </View>

                    <View style={style.dataContainer}>
                        <View>
                            <Text style={{margin: 5, fontWeight: '600', textTransform:'capitalize'}}>Date</Text>

                            <View style={style.inputBox} class="input-group mb-3 input-group-sm">
                                <Icon name="calendar-today" size={20} style={{ padding: 5 }}></Icon>
                                <TextInput style={style.input} type="text" class="form-control" placeholder="card date" />
                            </View>
                        </View>
                        <View style={style.cvv}>
                            <Text style={{margin: 5, fontWeight: '600', textTransform:'capitalize'}}>CVV</Text>

                            <View style={style.inputBox} class="input-group mb-3 input-group-sm">
                                <Icon name="verified-user" size={20} style={{ padding: 5 }}></Icon>
                                <TextInput style={style.input} type="text" class="form-control" placeholder="CVV" />
                            </View>

                        </View>

                    </View>
                    <View style={style.spaceBetweenInput}>
                        <Text style={{margin: 5, fontWeight: '600', textTransform:'capitalize'}}>card description</Text>

                        <View style={style.inputBox} class="input-group mb-3 input-group-sm">
                            <Icons name="text-recognition" size={20} style={{ padding: 5 }}></Icons>
                            <TextInput style={style.input} type="text" class="form-control" placeholder="Enter discription" />
                        </View>
                    </View>
                </View>
                </View>
                <View>
                <TouchableOpacity style={style.signinButton}
                onPress={()=>navigation.navigate('CardAddedSucces')}>
                <Text style={style.signinButtonText}>CONTINUE</Text>
            </TouchableOpacity>
                </View>
                </ScrollView>
            </SafeAreaView>

        </>
    )

}

const style = StyleSheet.create({
    bank: {
       margin: 15,
    width: '90%',
    resizeMode: "cover",
    borderRadius: 5
    },
    signinButtonText:{
        fontSize:18,
        lineHeight:18 * 1.4,
        color:'#fff'
    },
    headercontainer:{
        flexDirection: "row",
       
    },
    signinButton:{
        backgroundColor:'#0225A1',
        borderRadius:8,
        height: 40,
        marginHorizontal:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      elevation:2,
    },
    arrow: {
        paddingTop:10,
        paddingLeft: 20
        
    },
    inputBox: {
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        paddingRight: 15,
        padding: 5,

    },
    spaceBetweenInput: {
        paddingBottom: 10
    },
    input: {
        width: '40%',
        borderColor: "black",
        borderStyle: "solid"
    },
    
    addCard: {
        width: 150,
        alignItems: "center",
        justifyContent: 'center',
        alignItems: 'center',

        marginLeft: 110,
        fontWeight:"bold",textTransform:"capitalize",
        marginTop: 20,
        borderStyle: "solid"

    },
    details: {
        margin:10,
        marginTop:-10,
    },

    longInput: {
        position: "absolute",
        width: 20,
        height: 20,
        marginLeft: 18,
        marginTop: 314,
        borderRadius: 2,
        borderColor: "blue",


        backgroundColor: "#F8F6F6",

        borderRadius: 10
    },


    cvv: {
        paddingLeft: 12,
        width: '40%'

    },
    dataContainer: {
        flexDirection: "row",

        paddingBottom: 5,
        width: '100%',
        justifyContent: 'space-between'
    },

    dateContainer: {
        alignItems: "center",
        alignContent: "flex-end",
        padding: 5,

    }
})
export default paymentScreen
