import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
  text: string,
  handleClick: any,
  color: any,
  width: string
}

const PrimaryButton: React.FC<Props> = ({ text, handleClick, color, width }: Props) =>{
  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: color, width: width}]} onPress={() => { handleClick(text)}}>
      <View style={{ flex: 1 }}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
  }
})