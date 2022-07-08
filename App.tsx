import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InitialStack from './navigation/index.js'


export default function App(){
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  )
}