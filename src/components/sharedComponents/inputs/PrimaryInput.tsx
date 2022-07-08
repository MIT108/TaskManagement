import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

   
type Props = {
    value: any,
    keyboardType: any,
    placeholder: string,
    onChangeText: any,
    icon: string,
    width: string,
}

const PrimaryInput: React.FC<Props> = ({value, keyboardType, placeholder, onChangeText, icon, width}: Props) => {

    return (
        <View style={[styles.container, { width: width}]}>
            <Image source={{ uri: icon }} style={{ width:30, height:30}}/>
            <TextInput 
            style={[styles.inputContainer]}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(text) => onChangeText(text)}
            value={value}/>
        </View>
    )
}

export default PrimaryInput

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 25,
        paddingHorizontal: 10,
        height: 45,
        borderWidth: 1,
        borderColor: 'gray'
    },
    inputContainer: {
        paddingLeft: 10,
        width: '100%',
        padding: 0,
        flex: 1,
    }
})