import React from 'react';
import HomeScreen from './HomeScreen';
import PaymentScreen from './PaymentScreen';
import SettingsScreen from './SettingsScreen';
import ChatScreen from './ChatScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

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
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarLabel: 'Payment',
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
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
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
