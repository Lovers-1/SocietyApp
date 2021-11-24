import React,{useState,useRef}  from 'react';
import { View,SafeAreaView, Text ,StyleSheet,Image,StatusBar,FlatList,
    TouchableOpacity} from 'react-native';
import WelcomeCard from '../data/WelcomeCard.jsx';
import Separator from '../data/Separator.jsx';
import Onboarding from '../data/Onboarding.js';
import {Display} from '../utils'

const pageStyle=isActive=>
isActive
?styles.page
:{...styles.page,backgroundColor:"gainsboro"}
const Pagination=({index})=>{
    return(
        <View style={styles.pageContainer}>
        {[...Array(Onboarding.length).keys()].map((_,i)=>i=== index ?(
          <View style={pageStyle(true)} key={i}/>
        ):(
          <View style={pageStyle(false)} key={i}/>
        ))}
        
      </View>
    )
}

 const WelcomeScreen=({navigation})=>{
    const [welcomeListIndex,setwelcomeListIndex]=useState(0)
    const welcomeList = useRef()
    const onViewRef = useRef(({changed})=>{
      setwelcomeListIndex(changed[0].index);
    })
    const viewConfigRef =useRef({viewAreaCoveragePercentThreshold:50})
    

    return(
        
            <View style={styles.container}>
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
            <Separator height={StatusBar.currentHeight}/>
            <Separator height={Display.setHeight(8)}/>
            <View style={styles.WelcomeListContainer}> 
            <FlatList 
            ref={welcomeList}
            data={Onboarding}
            keyExtractor={item => item._title}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            overScrollMode="never"
            viewabilityConfig={viewConfigRef.current}
            onViewableItemsChanged={onViewRef.current}

            renderItem={({item})=> <WelcomeCard {...item}/>}
            />
            </View> 
            
            <Separator height={Display.setHeight(8)}/>
            <Pagination index={welcomeListIndex}/>
            <View style={{height:30}}></View>
            <Separator height={Display.setHeight(20)}/>
            <View>
            <TouchableOpacity activeOpacity={8.0}
              style={[styles.gettingsStartedButton,{backgroundColor:"#0225A1"}]}
              onPress={()=>navigation.navigate('VerificationOTPScreen')}
              >
                <Text style={[styles.gettingsStartedButtonText,{color:'#fff'}]}>GET STARTED</Text>
              </TouchableOpacity>
              <View style={{height:30}}></View>
              <TouchableOpacity activeOpacity={8.0}
              style={[styles.gettingsStartedButton,{backgroundColor:"gainsboro"}]}
              onPress={()=>navigation.navigate('SignIn')}
              >
                <Text style={[styles.gettingsStartedButtonText,{color:'#0225A1'}]}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
            
                
                
                
                     
                    
            </View>
        
    )
}

export default WelcomeScreen
const styles = StyleSheet.create({
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
      }, 
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff'
  
      },
      WelcomeListContainer:{
        height:Display.setHeight(50)
      },
     pageContainer:{
      flexDirection:'row',
  
     },
     page:{
      height:8,
      width:15,
      backgroundColor:"blue",
      borderRadius:32,
      marginHorizontal:5
     },
     buttonContainer:{
       flexDirection:'row',
       justifyContent:'space-between',
       width:90,
       alignItems:'center'
     },
     buttonText:{
       fontSize:16,
       fontWeight:'bold',
       lineHeight:16 * 1.4
     },
     button:{
       backgroundColor:"blue",
       paddingVertical:20,
       paddingHorizontal:11,
       borderRadius:32,
     },
     gettingsStartedButton:{
      backgroundColor:"blue",
      paddingVertical:15,
      paddingHorizontal:60,
      borderRadius:8,
      justifyContent:'center',
      alignItems:'center',
      elevation:2,
      height:47,
      width:287,
    marginHorizontal:10,   
     },
     gettingsStartedButtonText:{
      fontSize:20,
      
      lineHeight:20 *1.4,
     }
   
})