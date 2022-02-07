import React from 'react';
import { View,SafeAreaView, Text , StyleSheet,TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Ionicons';
const ForgetPasswordSuccessFul=({navigation})=>{

    return(
        <SafeAreaView style={styles.container}>
          
            <SafeAreaView style={styles.container}>
      <Icons name="md-checkmark-circle-outline" size={150} color='#00FF00' style={{ padding: 5 }}></Icons>
      <Text style={styles.subTiltle}>
        Password was successfuly reset
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.signinButton}>
        <Text style={{ padding: 13, color: '#fff', fontSize: 20 }}>
          DONE
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#fff',
        alignItems:'center',
       
    },
      signinButton:{
        backgroundColor:'#0225A1',
        borderRadius:8,
        width:'100%',
        height: 40,
        marginHorizontal:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
      elevation:2,
    },
})

export default ForgetPasswordSuccessFul