import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Ico from 'react-native-vector-icons/MaterialCommunityIcons'


const help = ({ navigation }) => {
    return (
        <>
            <SafeAreaView>
                
                {/* <View style={style.container}>
                    <TouchableOpacity  onPress={() => navigation.goBack()} style={style.arrow}>
                        <Ico name="keyboard-backspace" size={20}></Ico>
                    </TouchableOpacity>


                    <Text style={style.heading}>
                        help and support

                    </Text>
                </View> */}

                <ScrollView>
                <View style={style.description}>
                    <Text style={style.spacebetween} >
                    LAWRENCE Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Lorem ac vitae odio neque, pretium non imperdiet nec arcu. Sodales diam lectus ac faucibus.
                     Nec aliquet magna quis mauris ut sed vitae semper.
                    </Text>
                    <Text style={style.spacebetween} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ac vitae odio neque, pretium non imperdiet nec arcu.
                     Sodales diam lectus ac faucibus. 
                    Nec aliquet magna quis mauris ut sed vitae semper.
                    </Text>
                    <Text style={style.spacebetween} >

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ac vitae odio neque, pretium non imperdiet nec arcu.
                     Sodales diam lectus ac faucibus. 
                    Nec aliquet magna quis mauris ut sed vitae semper.

                    </Text>
                    <Text style={style.spacebetween} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ac vitae odio neque, pretium non imperdiet nec arcu.
                     Sodales diam lectus ac faucibus. 
                    Nec aliquet magna quis mauris ut sed vitae semper.
                    </Text>
                    <Text style={style.spacebetween} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ac vitae odio neque, pretium non imperdiet nec arcu.
                     Sodales diam lectus ac faucibus. 
                    Nec aliquet magna quis mauris ut sed vitae semper.
                    </Text>

                    <Text style={style.spacebetween} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ac vitae odio neque, pretium non imperdiet nec arcu.
                     Sodales diam lectus ac faucibus. 
                    Nec aliquet magna quis mauris ut sed vitae semper.
                    </Text>

                    <Text style={style.spacebetween} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ac vitae odio neque, pretium non imperdiet nec arcu.
                     Sodales diam lectus ac faucibus. 
                    Nec aliquet magna quis mauris ut sed vitae semper.
                    </Text>

                    <Text style={style.spacebetween} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ac vitae odio neque, pretium non imperdiet nec arcu.
                     Sodales diam lectus ac faucibus. 
                    Nec aliquet magna quis mauris ut sed vitae semper.
                    </Text>
                </View>

                </ScrollView>

            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingLeft: 20,
        paddingTop: 20,
        flexDirection: "row",
        marginBottom: 10,
       

    },
    spacebetween: {
        paddingBottom: 10,
        textAlign: 'justify'
    },
    heading: {
        paddingLeft: 20,
        textTransform: "capitalize",
        fontWeight: 'bold',
        fontSize: 16
    },
    description: {
        padding: 15,
        paddingBottom: 10

    },
    arrow: {
        paddingRight: 50

    },

})
export default help
