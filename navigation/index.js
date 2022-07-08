import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import SplashScreen from '../src/screens/SplashScreen'
import LoginScreen from '../src/screens/authentication/LoginScreen'
import HomeScreen from '../src/screens/home/HomeScreen'



const Stack = createNativeStackNavigator()


const screenOptions = {
    headerShown: false,
}

const InitialStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions} initialStack={HomeScreen}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}


export default InitialStack