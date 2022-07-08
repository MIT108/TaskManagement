import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { PrimaryColor } from './colors'
import { StatusBar } from 'expo-status-bar';

const GlobalHeader: any = () => {
    const [searchText, setSearchText] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.containerHead}>
                <TouchableOpacity>
                    <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/ios-glyphs/100/ffffff/menu--v1.png' }} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>
                            BOUY TASK
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.iconsContainer}>
                    <TouchableOpacity>
                        <View style={styles.unreadBadge}>
                            <Text></Text>
                        </View>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/carbon-copy/100/ffffff/bell--v1.png' }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={styles.searchContainer}>
                    <TextInput value={searchText} onChangeText={setSearchText} placeholder="Search any thing" style={{ fontSize: 20, flex: 1 }} />
                    <TouchableOpacity
                        onPress={() => { alert(searchText) }}
                    >
                        <Image style={styles.logo} source={{ uri: "https://img.icons8.com/external-outline-kendis-lasman/64/000000/external-search-graphic-design-line-outline-kendis-lasman.png" }} />
                    </TouchableOpacity>
                </View>

            </View>
            <StatusBar style="light" />
        </View>
    )
}

export default GlobalHeader

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 30,
        backgroundColor: PrimaryColor
    },
    containerHead: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    iconsContainer: {
        flexDirection: 'row',
    },

    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },

    icon: {
        width: 50,
        height: 50,
        marginLeft: 10,
        resizeMode: 'contain'
    },

    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 35,
        bottom: 30,
        width: 15,
        height: 15,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    searchContainer: {
        backgroundColor: 'white',
        borderRadius: 25,
        width: "100%",
        height: 50,
        marginVertical: 30,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }

})