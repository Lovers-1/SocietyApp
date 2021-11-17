//import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
//screens
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




export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
        
        <Stack.Screen name="TabScreen" component={TabScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignIn} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
        <Stack.Screen name="ForgetScreen" component={ForgetPassword} />
        <Stack.Screen name="ForgetPasswordSuccessFul" component={ForgetPasswordSuccessFul} />
        <Stack.Screen name="Dashboard" component={DashBoard} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

