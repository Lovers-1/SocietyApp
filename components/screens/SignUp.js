import React,{useState,useRef} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, StyleSheet, Button, Image, _ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from 'react-native-gesture-handler';

//
// import { useAuth } from '../contexts/AuthContext';
import { Formik } from 'formik';
import * as yup from 'yup';
import { auth } from './firebase';

const SignUp = ({ navigation }) => {

    // 
    const [isPasswordShow,setPasswordShow]=useState(false);
    const [isSelected,setSelection]=useState(false);
    const email=useRef()
  const password=useRef()
  const passwordConfirm=useRef()
//   const {signup}=useAuth()
  const [error,setError]=useState('')
    const ReviewSchem =yup.object({
        email:yup.string().required().min(6),
        password:yup.string().required().min(6),
    })
    const Submit= async (e)=>{
        e.preventDefault()
        if(password.current.value !== passwordConfirm.current.value){
          return setError('password do not match')
        }
        try{
          setError('')
          
        //   await signup(email.current.value,password.current.value)
          await auth.createUserWithEmailAndPassword(email.current.value,password.current.value)
        //   
        //   .then(res=>{
        //     const user={
        //       Firstname: Firstname,
                            
        //                     email: email.current.value,
        //                     Phonenumber: Phonenumber,
        //                     uid: res.user.uid
        //     }
        //     db.ref('/user').child(res.user.uid).set(user)
            
        //   })
         
        } catch{
          setError('failed to create an account')
        }
       
      }
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
                    <Formik 
               initialValues={{email:'',password:''}}
               validationSchema={ReviewSchem}
               onSubmit={(values,action)=>{
                   action.resetForm()
                Submit(values)
               }}
               >
                   {(props)=>(
                       <View>
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
                            <TextInput placeholder="ENTER YOUR EMAIL"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            onBlur={props.handleBlur('email')}>

                            </TextInput>
                        </View>
                        <Text style={styles.errortext}>{props.touched.email && props.errors.email}</Text>
                        <View style={styles.lovers} >
                            <Icon name='perm-phone-msg' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput placeholder="ENTER YOUR PHONE NO " ></TextInput>
                        </View>
                        <View style={styles.lovers} >
                            <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput style={{ width: "80%" }} placeholder="ENTER YOUR PASSWORD"
                             onChangeText={props.handleChange('password')}
                             value={props.values.password}
                              onBlur={props.handleBlur('password')} ></TextInput>
                            <Feather
                 name={isPasswordShow?"eye-off":"eye"} size={22}
                 color='black'
                 style={{marginRight:10}}
                 onPress={()=>setPasswordShow(!isPasswordShow)}
                 />

                        </View>
                        <Text style={styles.errortext}>{props.touched.password && props.errors.password}</Text>
                        <View style={styles.lovers} >
                            <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput style={{ width: "80%" }} 
                            onChangeText={props.handleChange('passwordConfirm')}
                            value={props.values.passwordConfirm}
                             onBlur={props.handleBlur('passwordConfirm')} placeholder="CONFIRM PASSWORD " ></TextInput>
                            <Feather
                 name={isPasswordShow?"eye-off":"eye"} size={22}
                 color='black'
                 style={{marginRight:10}}
                 onPress={()=>setPasswordShow(!isPasswordShow)}
                 />
                        </View>
                        <Text>{error}</Text>
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
                
                )}
                </Formik> 
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






























































































































































