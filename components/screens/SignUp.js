import React,{useState,useEffect,useRef} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons'
import { View,SafeAreaView, Text,TouchableOpacity 
    ,TextInput, StyleSheet,Button, Image, _ScrollView,Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik'
import { useAuth } from '../../contexts/AuthProvider';
import { db,auth } from '../../firebase';
import * as yup from 'yup'
const SignUp=({navigation})=>{
    const [isPasswordShow,setPasswordShow]=useState(false)
    const ReviewSchem=yup.object({
        Firstname:yup.string().required().min(2),
        Lastname:yup.string().required().min(2),
        phonenumber:yup.string().required().min(10).max(10),
        email:yup.string().required().min(6),
        password:yup.string().required().min(6),
        confirmpassword:yup.string().required().min(6).oneOf([yup.ref('password'),null],'password does not match')
    })
    const {signup}=useAuth()
    const addUser= async (data)=>{
        try{
          const {uid,email,password,Firstname,Lastname,phonenumber} =data
        // const user = await auth
        // .createUserWithEmailAndPassword(
        //   email.trim().toLowerCase(),password
        // )
        // await signup(email.trim().toLowerCase(),password)
        await auth.createUserWithEmailAndPassword(
          email.trim().toLowerCase(),password
        )
        .then(res =>{
          db.ref(`/user`).child(res.user.uid).set({
            Firstname:Firstname,
            Lastname:Lastname,
            email:email.trim().toLowerCase(),
            Phonenumber:phonenumber,
            uid:res.user.uid
          })
          })
        
   
  
        }
        catch(error){
          if(error.code === 'auth/email-already-in-use'){
            Alert.alert(
              'That email adress is already inuse'
            )
          }
          if(error.code === 'auth/invalid-email'){
            Alert.alert(
              'That email address is invalid'
            )
          }
          else{
            Alert.alert(error.code)
          }
          
        }
        
      }
  
    return(
        <SafeAreaView >

            <TouchableOpacity  onPress={()=>navigation.goBack()} >
                <Ico name ="keyboard-backspace" size ={25} color='black' style={{marginTop:25, marginLeft:20}} ></Ico>
                </TouchableOpacity>
                <Formik
        initialValues={{Firstname:'',Lastname:'',phonenumber:'',email:'',password:'',confirmpassword:''}}
        validationSchema={ReviewSchem}
        onSubmit={(values,action)=>{
            action.resetForm()
         addUser(values)
        }}
       >
            {(props)=>(
           <ScrollView>
            <View style={styles.container}>
            <Image 
         style={{marginTop:0,}}
         source={require('../images/logo.png')}
            />
           
             <View style={styles.inputCon}>
            
             <View style={styles.lovers} >
             <Icon name='person' size={22} color='black' style={{ margin: 9 }}></Icon>
                        <TextInput 
                         autoFocus={true}
                         onChangeText={props.handleChange('Firstname')}
                         value={props.values.Firstname}
                           placeholder="ENTER YOUR FIRST NAME "  ></TextInput>
                 </View>


                 <View style={styles.lovers} >
                        <Icon name='person' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput onChangeText={props.handleChange('Lastname')}
                        value={props.values.Lastname}
                        placeholder="ENTER YOUR LAST NAME" ></TextInput>
                    </View>

                    <View style={styles.lovers} >
                        <Icon name='email' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput 
                        value={props.values.email} onChangeText={props.handleChange('email')} placeholder="ENTER YOUR EMAIL">

                        </TextInput>
                    </View>
                    <View style={styles.lovers} >
                        <Icon name='perm-phone-msg' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput value={props.values.phonenumber} onChangeText={props.handleChange('phonenumber')}  placeholder="ENTER YOUR PHONE NO " ></TextInput>
                    </View>
                    <View style={styles.lovers} >
                        <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput value={props.values.password}
                        onChangeText={props.handleChange('password')}  placeholder="ENTER YOUR PASSWORD" ></TextInput>
                        
                    </View>
                    <View style={styles.lovers} >
                        <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput style={{width:'100%'}} value={props.values.confirmpassword}
                        onChangeText={props.handleChange('confirmpassword')} placeholder="CONFIRM PASSWORD " ></TextInput>
                    </View>
                  <TouchableOpacity  onPress={props.handleSubmit} style={{backgroundColor:'#0225A2',width:'75%',height:35,borderRadius:10,alignItems:'center',marginTop:20}}>
                      <Text style={{padding:8,color:'#fff'}}>
                      REGISTER
                      </Text>
                  </TouchableOpacity>
             </View>
            
             <View style={styles.text} >
                    <Text style={{padding:8, color:'gray',}}>
                        Already Have An Account?
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('help')}>
                    <Text style={{ fontWeight: 'bold',marginLeft:-12, padding: 8, color:'#0225A2'}}>
                        Sign Up
                        
                    </Text>
                    </TouchableOpacity>
                </View>
               
            </View>
            

            </ScrollView>
             )}
             </Formik>

        </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    inputCon: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop:0,
       
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
        height: 25,
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
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 5,
        height: 40,
        width: '100%',
        margin: 8,
        
      

    },
    text: {
        flexDirection: 'row',
        color:'gray',
        marginTop:20,
      
    }
     
})
export default SignUp






























































































































































