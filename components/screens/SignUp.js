import React,{useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, StyleSheet, Button, Image, _ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from 'react-native-gesture-handler';

//

import { Formik } from 'formik';
import * as yup from 'yup';


const SignUp = ({ navigation }) => {

    //
    const [isPasswordShow,setPasswordShow]=useState(false);
    const [isSelected,setSelection]=useState(false);
    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Ico name="keyboard-backspace" size={25} color='black' style={{ marginTop: 22, marginLeft: 15 }} ></Ico>
            </TouchableOpacity>
            <ScrollView>
                <View style={{alignItems:'center'}}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={{ marginTop: 2, }}
                            source={require('../images/logo.png')}
                        />
                    </View>
                    <View style={styles.inputCon}>

                        <View style={styles.lovers} >
                            <Icon name='person' size={22} color='black' style={{ margin: 9 }}></Icon>
                            <TextInput
                                autoFocus={true}
                                placeholder="ENTER YOUR FIRST NAME "  ></TextInput>
                        </View>


                        <View style={styles.lovers} >
                            <Icon name='person' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput placeholder="ENTER YOUR LAST NAME" ></TextInput>
                        </View>

                        <View style={styles.lovers} >
                            <Icon name='email' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput placeholder="ENTER YOUR EMAIL">

                            </TextInput>
                        </View>
                        <View style={styles.lovers} >
                            <Icon name='perm-phone-msg' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput placeholder="ENTER YOUR PHONE NO " ></TextInput>
                        </View>
                        <View style={styles.lovers} >
                            <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput style={{ width: "80%" }} placeholder="ENTER YOUR PASSWORD" ></TextInput>
                            <Feather
                 name={isPasswordShow?"eye-off":"eye"} size={22}
                 color='black'
                 style={{marginRight:10}}
                 onPress={()=>setPasswordShow(!isPasswordShow)}
                 />

                        </View>
                        <View style={styles.lovers} >
                            <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput style={{ width: "80%" }} placeholder="CONFIRM PASSWORD " ></TextInput>
                            <Feather
                 name={isPasswordShow?"eye-off":"eye"} size={22}
                 color='black'
                 style={{marginRight:10}}
                 onPress={()=>setPasswordShow(!isPasswordShow)}
                 />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')} style={{ backgroundColor: '#0225A2', width: '75%', height: 40, borderRadius: 10, alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ padding: 8, color: '#fff' }}>
                                REGISTER
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.text} >
                        <Text style={{ padding: 8, color: 'gray', }}>
                            Already Have An Account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={{  marginLeft: -12, padding: 8, color: '#0225A2' }}>
                                Sign In

                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent:'center',
        // alignItems:'center',

    },
    inputCon: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 0,

    },
    input: {

        borderRadius: 5,
        backgroundColor: '#ebebeb',
        height: 40,
        width: '100%',
        marginBottom: 8,

    },
    button: {
        width: '60%',
        margin: 250,
        marginBottom: 5,
        marginTop: 8,
        height: 40,
        borderRadius: 8,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        color: 'white',
        alignItems: 'center',
    },
    lovers: {

        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#F8F6F6',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        height: 40,
        width: '100%',
        margin: 8,



    },
    text: {
        flexDirection: 'row',
        color: 'gray',
        marginTop: 20,

    }

})
export default SignUp






























































































































































