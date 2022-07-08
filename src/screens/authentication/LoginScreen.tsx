import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton, PrimaryBackgroundColor, PrimaryButton, PrimaryColor, PrimaryInput } from '../../components'

const LoginScreen = ({ navigation }: any) => {
  return (
    <View style={{ backgroundColor: PrimaryBackgroundColor, width: '100%', height: '100%' }}>
      <Logo />
      <FormInput navigation={navigation} />
      <Footer />
    </View>
  )
}

const Logo = () => {
  return (
    <View style={{ width: '100%', height: '40%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://img.icons8.com/color/600/000000/disney-logo.png' }} />
    </View>
  )
}

const FormInput = ({navigation} :any) => {
  const [email, setEmail] = useState("")
  const inputIcon = "https://img.icons8.com/fluency/48/000000/apple-mail.png"

  const Login = (page: string) => {
    navigation.push("HomeScreen")
  }
  return (
    <View style={{ width: '100%', height: '20%', display: 'flex', alignItems: 'center' }}>
      <PrimaryInput value={email} keyboardType="default" placeholder="Enter Your email" onChangeText={setEmail} icon={inputIcon} width="70%" />
      <View style={{ marginTop: 50 }}>
        <PrimaryButton text="Get Started" handleClick={Login} color={PrimaryColor} width="40%" />
      </View>
    </View>
  )
}

const Footer = () => {
  const facebook = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAArklEQVRIie2TsQ3CMBBFv+kQDWIGCjoqGiZgBJZgAWZghiwTGIAKCpAQC9BQJcWjigSRLZ0dFwjy2tO/923Z0l8BjIEdcAFqoAJuwDzH8glwws8mlBtEOLaSZoHZI6qtD+Daal0Aa2AFxBQNCqqWYGjJuQgBH0HnTNnuR+siAA7NfXhmDU9gkSSQtDSUHEmapgqs3FMFe8Pys6RjaPjjr6gX9ILsgvdPV+Yu8r28AFjDkVenGKc6AAAAAElFTkSuQmCC"
  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 50 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
        <View>
          <Text style={{ width: 60, textAlign: 'center', fontSize: 25, color: 'gray' }}>OR</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 50 }}>
        <Text style={{ color: 'gray' }}>
          Login using social media
        </Text>
      </View>
      <View style={{ marginTop: 50, paddingHorizontal: 50, flexDirection: 'row', display: 'flex', justifyContent: 'space-around' }}>
        <IconButton text={facebook} handleClick={() => { alert("ok") }} color={PrimaryColor} widths={70} />
        <IconButton text={facebook} handleClick={() => { alert("ok") }} color={PrimaryColor} widths={70} />
        <IconButton text={facebook} handleClick={() => { alert("ok") }} color={PrimaryColor} widths={70} />

      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})