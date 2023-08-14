import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'



export default function BirthdayCard() {
    const [message, setMessage] = useState('');

    const handleInputChange = (text) => {
        setMessage(text);
    }
    return (
        <ImageBackground source={require('../assets/back.jpg')} style={styles.background}>
            <View style={styles.container} >

                <Text style={styles.header}>Happy Birthday!</Text>


                <TextInput
                    style={styles.input}
                    placeholder="Enter message"
                    onChangeText={handleInputChange}
                />
                <Text style={styles.msg}>{message}</Text>

                <TouchableOpacity
                    style={styles.button}
                    title="Send Wishes"
                    onPress={() => alert(message)}
                >
                    <Text style={styles.buttonText}>Send Wishes</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,


    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Handjet-VariableFont_ELGR,ELSH,wght',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: -5, height: 5 },
        textShadowRadius: 5,

    },
    input: {
        width: '100%',
        borderRadius: 20,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        textAlign: 'center',
        marginBottom: 20,


    },
    msg: {
        fontSize: 25,
        fontFamily: 'Handjet-Light',
        textAlign: 'center',


    },
    button: {
        borderRadius: 10,
        backgroundColor: '#5F9EA0',
        width: '80%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'



    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',

    }
})