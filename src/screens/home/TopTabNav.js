// import {
//     StyleSheet,
//     Text,
//     View
// } from 'react-native'
// import React from 'react'
// import { createStackNavigator, createDrawerNavigator } from "react-navigation";
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// import DailyScreen from "./DailyScreen";
// import WeeklyScreen from "./WeeklyScreen";
// import MonthlyScreen from "./MonthlyScreen";

// function HomeScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
  
//   function SettingsScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }

  
// const Tab = createMaterialTopTabNavigator();






// const Navigator = createAppContainer(TabNavigator);
// const TopTabNav = () => {
//     return (
        
//     <NavigationContainer>
//             <Tab.Navigator
//             tabBarOptions={{
//                 labelStyle: { fontSize: 12 },
//                 tabStyle: { flex: 1, justifyContent: 'center'},
//                 indicatorStyle: {
//                     marginHorizontal: '5%',
//                     width: '40%'   
//                 },
//                 style: { backgroundColor: 'powderblue' },
//             }}
//             >
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//     </NavigationContainer>
//     )
// }

// export default TopTabNav

// const styles = StyleSheet.create({})