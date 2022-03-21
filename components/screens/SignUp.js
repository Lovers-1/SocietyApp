import React,{useState,useRef,useEffect} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, StyleSheet, Button, Image, ScrollView,Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from "react-native-vector-icons/Feather";


//
// import { useAuth } from '../contexts/AuthContext';
import { Formik } from 'formik';
import * as yup from 'yup';
import { auth, db } from './firebase';
//import { max } from 'react-native-reanimated';


const SignUp = ({ navigation }) => {
    const [code, setCode] = useState([]);
    useEffect(()=>{
        
        db.ref('user').on('value',snap=>{
          let item = [];
          const a_ =snap.val();
          for (let x in a_){
            item.push({societyCode:a_[x].societyCode,key:x,})
          }
          setCode(item)
        })
     
    // db.ref('BookEvent').on('value',snap=>{ 
    //   setBookings({...snap.val() })
    // })  
},[])
    //
    const [visiable, setvisiable] = useState(true);
    const [show, setShow] = useState(false);
  
    const [isPasswordShow,setPasswordShow]=useState(false);
    const [isSelected,setSelection]=useState(false);
    const email=useRef()
  const password=useRef()
  const passwordConfirm=useRef()
//   const {signup}=useAuth()
  const [error,setError]=useState('')
    const ReviewSchem =yup.object({
        email:yup.string().required().min(6),
        name: yup.string().required().max(15).min(3),
        surname: yup.string().required().max(15).min(3),
        phoneNo: yup.string().required().max(10).min(10),
        password: yup.string().required().min(6).max(12),
        passwordConfirm: yup.string().required().min(6).max(12).oneOf([yup.ref('password'), null], 'password doess not math'),
        societyCode: yup.string().required().min(6),
    })

    //

        // const varifyEmail =()=>{
        //     auth.
        // }

    //
    const createUser  = async (data) => {
        const { uid, email, password, name, phoneNo ,surname,societyCode } = data
        try {
            
                code.map( async (element) =>{
                   if (element.societyCode.indexOf(societyCode)>-1){
                    const user = await auth.createUserWithEmailAndPassword(
                        email.trim().toLowerCase(), password).then(res => {
                            
                        db.ref(`/societyUser`).child(res.user.uid).set({
                            name: name,
                            surname: surname,
                            email: email.trim().toLowerCase(),
                            phoneNo: phoneNo,
                            societyCode:societyCode,
                            uid: res.user.uid
                        })
                        navigation.navigate('HomeScreen')
                    })
                       
                     // return setError('code do not match')
                   }
                   else{
                    // alert(
                    //     "No such Society Code"
                    // )
                    setError('No such society code')
                   }
                 
               //   const itemData = element.societyCode ? element.societyCode : setError('code do not match')
               //   return itemData.indexOf(societyCode) > -1
               })
           
           
         
            // .then(then(res =>{
            //     res.user.sendEmailVerifcation()
            // }))
        
        }
        catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                Alert.alert(
                    "This email already exist"
                )
            }
            if (
                error.code == 'auth/invalid-email') {
                Alert.alert(
                    "This email already exist"
                )
            }
            else {
                Alert.alert(error.code)
            }

        }

    
}
    // const Submit= async (e)=>{
    //     e.preventDefault()
    //     if(password.current.value !== passwordConfirm.current.value){
    //       return setError('password do not match')
    //     }
    //     try{
    //       setError('')
          
    //     //   await signup(email.current.value,password.current.value)
    //       await auth.createUserWithEmailAndPassword(email.current.value,password.current.value)
    //     //   
    //     //   .then(res=>{
    //     //     const user={
    //     //       Firstname: Firstname,
                            
    //     //                     email: email.current.value,
    //     //                     Phonenumber: Phonenumber,
    //     //                     uid: res.user.uid
    //     //     }
    //     //     db.ref('/user').child(res.user.uid).set(user)
            
    //     //   })
         
    //     } catch{
    //       setError('failed to create an account')
    //     }
       
    //   }
      //

    //   const signUp = () =>{
    //     auth.createUserWithEmailAndPassword(email, password)
    //     .then((res) => {
    //         res.user.sendEmailVerification().then(() => {
    //           db.ref("/user")
    //             .child(res.user.uid)
    //             .set({
    //               name: name,
    //               surname: surname,
    //               uid: res.user.uid,
    //               email: email,
    //           phoneNo: phoneNo,
    //             })
    //             .then(() => {
    //               ///return successfully message
    //             })
    //             .catch((err) => {
    //               console.log(err.message);
    //             })
    //             .finally(() => {
    //               //do spinner
    //             });
    //         });
    //       });
    //   }
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
                        <Text style={{color:'red'}}>{error}</Text>
                    </View>
                    <Formik
                    initialValues={{ email: '', password: '',name:'', phoneNo:'', surname:'',passwordConfirm:'',societyCode:'' }}
                    validationSchema={ReviewSchem}
                    onSubmit={(values, action) => {
                        action.resetForm()
                        createUser(values)
                    }}
                >
                    {(props) =>(

                        
                       <View>
                    <View style={styles.inputCon}>
                    <View style={styles.lovers} >
                            <Icon name='fiber-pin' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput style={{ width: "90%" }} 
                            onChangeText={props.handleChange('societyCode')}
                            value={props.values.societyCode}
                            keyboardType='phone-pad'
                             onBlur={props.handleBlur('societyCode')} placeholder="ENTER SOCIETY CODE " 
                             secureTextEntry={visiable}
                            ></TextInput>
                        </View>
                        {props.errors.societyCode? <Text style={{color:"red"}}>{props.errors.societyCode}</Text>:null}
                        <View style={styles.lovers} >
                            <Icon name='person' size={22} color='black' style={{ margin: 9 }}></Icon>
                            <TextInput
                           
                                onChangeText={props.handleChange('name')}
                                value={props.values.name}
                                onBlur={props.handleBlur('name')}
                                placeholder="ENTER YOUR FIRST NAME "
                                style={{ width: "90%" }}></TextInput>
                        </View>

                        {props.errors.name? <Text style={{color:"red"}}>{props.errors.name}</Text>:null}

                        
                        <View style={styles.lovers} >
                            <Icon name='person' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput placeholder="ENTER YOUR LAST NAME"
                             style={{ width: "90%" }}
                             onChangeText={props.handleChange('surname')}
                             value={props.values.surname}
                             onBlur={props.handleBlur('surname')}
                             ></TextInput>
                        </View>
                        {props.errors.surname? <Text style={{color:"red"}}>{props.errors.surname}</Text>:null}


                        <View style={styles.lovers} >
                            <Icon name='email' size={22} color='black'  style={{ margin: 10 }}></Icon>
                            <TextInput placeholder="ENTER YOUR EMAIL"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            onBlur={props.handleBlur('email')}
                            style={{ width: "90%" }}>
                            </TextInput>
                        </View>
                        {props.errors.email? <Text style={{color:"red"}}>{props.errors.email}</Text>:null}


                        <View style={styles.lovers} >
                            <Icon name='perm-phone-msg' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput placeholder="ENTER YOUR PHONE NO "
                             style={{ width: "90%" }}
                             onChangeText={props.handleChange('phoneNo')}
                            value={props.values.phoneNo}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('phoneNo')}
                             ></TextInput>
                        </View>
                        {props.errors.phoneNo? <Text style={{color:"red"}}>{props.errors.phoneNo}</Text>:null}


                        <View style={styles.lovers} >
                            <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput style={{ width: "80%" }} placeholder="ENTER YOUR PASSWORD"
                             onChangeText={props.handleChange('password')}
                             value={props.values.password}
                              onBlur={props.handleBlur('password')}
                              secureTextEntry={isPasswordShow? false :true}
                             
                             ></TextInput>
                            <Feather
                 name={isPasswordShow?"eye-off":"eye"} size={22}
                 color='black'
                 style={{marginRight:10}}
                 onPress={()=>setPasswordShow(!isPasswordShow)}
                 />

                        </View>
                    
                        {props.errors.password? <Text style={{color:"red"}}>{props.errors.password}</Text>:null}

                        <View style={styles.lovers} >
                            <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                            <TextInput style={{ width: "90%" }} 
                            onChangeText={props.handleChange('passwordConfirm')}
                            value={props.values.passwordConfirm}
                             onBlur={props.handleBlur('passwordConfirm')} placeholder="CONFIRM PASSWORD " 
                             secureTextEntry={visiable}
                            ></TextInput>
                        </View>
                        {props.errors.passwordConfirm? <Text style={{color:"red"}}>{props.errors.passwordConfirm}</Text>:null}

                       
                    </View>
                    {
                        error =='code do not match'?(
                            <TouchableOpacity style={styles.signinButton} disabled={true} >
                <Text style={styles.signinButtonText}>
                REGISTER
                </Text>
            </TouchableOpacity>
                        ):(
                            <TouchableOpacity style={styles.signinButton} onPress={props.handleSubmit}>
                <Text style={styles.signinButtonText}>
                REGISTER
                </Text>
            </TouchableOpacity>
                        )
                    }
                  
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
    signinButton:{
        backgroundColor:'#0225A1',
        borderRadius:8,
        height: 40,
        marginHorizontal:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
      elevation:2,
    },
    signinButtonText:{
        fontSize:18,
        lineHeight:18 * 1.4,
        color:'#fff',
        
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
        alignItems:'center',
        justifyContent:'center',
        marginTop: 20,

    }

})
export default SignUp