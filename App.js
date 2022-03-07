//import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
//screens
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './components/screens/SplashScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ForgetPassword from './components/screens/ForgetPassword';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import ForgetPasswordSuccessFul from './components/screens/ForgetPasswordSuccessFul';
import DashBoard from './components/screens/DashBoard';
import TabScreen from './components/screens/TabScreen';

// import { DrawerScreenProps } from '@react-navigation/drawer';
// navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/screens/HomeScreen';
import paymentScreen from './components/screens/Payment';
import BookingEvent from './components/screens/BookingEvent';
import VerificationOTPScreen from './components/screens/VerificationOTPScreen';
import AboutSociety from './components/screens/AboutSociety';
import Notification from './components/screens/Notification';
import Events from './components/screens/Events';
import ChatGroupScreen from './components/screens/ChatGroupScreen';
import CardScreen from './components/screens/CardScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="e-Society" screenOptions={{headerShown:false}}>
       
      <Drawer.Screen name="e-Society"  component={TabScreen} />
        
    </Drawer.Navigator>
  )
}


function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name="SplashScreen" options = {{headerShown :false}} component={SplashScreen}/>
        <Stack.Screen name="WelcomeScreen" options = {{headerShown :false}} component={WelcomeScreen} />
        <Stack.Screen name="SignIn" options = {{headerShown :false}} component={SignIn} />
        <Stack.Screen name="SignUp" options = {{headerShown :false}}  component={SignUp} />
        <Stack.Screen name="paymentScreen" options = {{headerShown :false}}  component={paymentScreen} />
        <Stack.Screen name="ForgetScreen" options = {{headerShown :false}}  component={ForgetPassword} />
        <Stack.Screen name="ForgetPasswordSuccessFul" options = {{headerShown :false}}  component={ForgetPasswordSuccessFul} />
        <Stack.Screen name="HomeScreen" options = {{headerShown :false}} component={TabScreen} />
        <Stack.Screen name="Booking Event" options = {{headerShown :false}} component={BookingEvent} />
        <Stack.Screen name="VerificationOTPScreen" options = {{headerShown :false}} component={VerificationOTPScreen} />
        <Stack.Screen name="AboutSociety" options = {{headerShown :false}} component={AboutSociety} />
        <Stack.Screen name="Notification" options = {{headerShown :false}} component={Notification} />
        <Stack.Screen name="Events" options = {{headerShown :false}} component={Events} />
        <Stack.Screen name="chats" options = {{headerShown :false}} component={ChatGroupScreen} />
        <Stack.Screen name="CardScreen" options={{headerShown:false}} component ={CardScreen}/>
        {/* <Stack.Screen name="HomeScreen" options = {{headerShown :false}} component={HomeScreen} /> */}
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App
