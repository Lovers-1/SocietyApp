import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    FlatList,
    Dimensions,
    Alert} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons'
import { Icon } from 'react-native-elements';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ChatGroupScreen = () => {

    const [inputMessage, setInputMessage] = useState('');

  return (
    <SafeAreaView style={{width: width, height: height}}>
        <View style={{width: width, height: height,position:'relative'}}>

            {/* tool bar */}
            <View style={{ display:'flex',
                    flexDirection: 'row',alignItems:'center',backgroundColor:'#fff', paddingVertical:20,paddingHorizontal:10, textAlign:'center'}}>

                        <TouchableOpacity
                            onPress={() =>navigation.goBack()}
                            >
                            <Icons name="keyboard-backspace" size={28} color="#000" style={{paddingTop:15}}/>
                        </TouchableOpacity>

                        <View style={{justifyContent: 'center', width: '100%', flex:1}}>
                            <Text style={{fontSize:16, fontWeight: 'bold',textAlign: 'center',paddingTop:15}}>Chatting Board</Text>
                        </View>
            </View>

            {/* flat list con */}
                <View style={{backgroundColor:'#EFEFEF', height: height, width}}>

                </View>

            <View style={{ paddingVertical: 10,position:'absolute',bottom:80}}>
                <View style={styles.messageInputView}>
                    <TextInput
                    defaultValue={inputMessage}
                    style={styles.messageInput}
                    placeholder='Message'
                    onChangeText={(text) => setInputMessage(text)}
                    onSubmitEditing={() => {
                        
                    }}
                    />
                    <TouchableOpacity
                    style={styles.messageSendView}
                    onPress={() => {
                        
                    }}
                    >
                    <Icon name='send' type='material' />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headerLeft: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    userProfileImage: { height: '100%', aspectRatio: 1, borderRadius: 100 },
    container: {
      flex: 1,
      backgroundColor: '#f2f2ff',
    },
    messageInputView: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: 14,
      backgroundColor: '#fff',
      borderRadius: 4,
      width: width*0.94
    },
    messageInput: {
      height: 40,
      flex: 1,
      paddingHorizontal: 10,
    },
    messageSendView: {
      paddingHorizontal: 10,
      justifyContent: 'center',
    },
  });

export default ChatGroupScreen