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

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:true}}>
        
        <Drawer.Screen name="e-Society" component={TabScreen} />
        <Drawer.Screen name="SplashScreen" component={SplashScreen} />
        <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Drawer.Screen name="SignInScreen" component={SignIn} />
        <Drawer.Screen name="SignUpScreen" component={SignUp} />
        <Drawer.Screen name="ForgetScreen" component={ForgetPassword} />
        <Drawer.Screen name="ForgetPasswordSuccessFul" component={ForgetPasswordSuccessFul} />
        <Drawer.Screen name="Dashboard" component={DashBoard} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

