import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalHeader, PrimaryBackgroundColor, PrimaryColor } from '../../components'
// import TopTabNav from './TopTabNav'


const HomeScreen: any = () => {
  
  return (
    <View style={{ backgroundColor: PrimaryBackgroundColor, width: '100%', height: '100%' }}>
        <View>
            <GlobalHeader />
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})