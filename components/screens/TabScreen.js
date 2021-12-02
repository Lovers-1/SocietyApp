import React from 'react';
import HomeScreen from './HomeScreen';
import Payment from './Payment';
import SettingsScreen from './SettingsScreen';
import ChatScreen from './ChatScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import payment from './Payment';
import paymentScreen from './PaymentScreen';
import AccountDetails from './AccountDetails';
import help from './help';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
function CombinePayment() {
  return (
    
      <Stack.Navigator>
      <Stack.Screen name="payment" options = {{headerShown :false}}  component={payment} />
        <Stack.Screen name="paymentScreen" options = {{headerShown :false}}  component={paymentScreen} />
       
      </Stack.Navigator>



    
  );
}
function CombineSettings() {
  return (
    
      <Stack.Navigator>
      <Stack.Screen name="Settings" options = {{headerShown :false}}  component={SettingsScreen} />
        <Stack.Screen name="Account Details"  component={AccountDetails} />
        <Stack.Screen name="Help And Support"  component={help} />
       
      </Stack.Navigator>



    
  );
}
const TabScreen = () => {
    return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#0225A2',
          tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={CombinePayment}
        options={{
          tabBarLabel: 'Payments',
          tabBarColor: '#0225A2',
          tabBarIcon: ({ color }) => (
          <Icon name="ios-wallet" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarColor: '#0225A2',
          tabBarIcon: ({ color }) => (
          <Icon name="ios-chatbox" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={CombineSettings}
        options={{
          tabBarLabel: 'Setting',
          tabBarColor: '#0225A2',
          tabBarIcon: ({ color }) => (
          <Icon name="ios-settings" color={color} size={24} />
          ),
        }}
      />
      </Tab.Navigator>
    )
}

export default TabScreen
