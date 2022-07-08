import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PrimaryBackgroundColor, PrimaryButton, PrimaryColor } from '../components'

const SplashScreen: any = ({navigation}: any) => {
    return (
        <View style={{ backgroundColor: PrimaryBackgroundColor, width: '100%', height: '100%' }}>
            <Header />
            <Logo />
            <WelcomeMessage />
            <GetStarted navigation={navigation}/>
        </View>
    )
}

const Header: any = () => {
    return (
        <View style={{ width: '100%', height: '25%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 50, fontWeight: 'bold'}}>Header</Text>
        </View>
    )
}

const Logo: any = () => {
    return (
        <View style={{ width: '100%', height: '25%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{ width: 200, height: 200}} source={{ uri: 'https://img.icons8.com/cotton/1000/000000/touchscreen-smartphone--v2.png'}} />
        </View>
    )
}

const WelcomeMessage: any = () => {
    return (
        <View style={{ paddingHorizontal: 30, paddingVertical:10, width: '100%', height: '30%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
                Hey guys welcome to our task management application for enterprise
            </Text>
        </View>
    )
}

const GetStarted: any = ({navigation}: any) => {
    
    const start = (page: string) => {
        navigation.push("LoginScreen")
    }

    return (
        <View style={{ width: '100%', height: '20%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
            <PrimaryButton  text="Get Started" handleClick={start} color={PrimaryColor} width="50%" />
        </View>
    )
}

const styles = StyleSheet.create({})


export default SplashScreen
