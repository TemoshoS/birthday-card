import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'



export default function BirthdayCard() {
    const [message, setMessage] = useState('');
    const [displayMessage, setDisplayMesage] = useState('');

    const handleInputChange = (text) => {
        setMessage(text);
    }
    const handleSendWishes = () => {
        setDisplayMesage(message);
    }

    return (


        <View style={styles.container} >
            <View style={styles.happy}>
            <Text style={[styles.header, { color: '#BA55D3' }]}>H </Text>
            <Text style={[styles.header, { color: '#90EE90' }]}>A </Text>
            <Text style={[styles.header, { color: '#FFA07A' }]}>P </Text>
            <Text style={[styles.header, { color: '#87CEFA' }]}>P </Text>
            <Text style={[styles.header, { color: '#FF6347' }]}>Y </Text>
            </View>
            <View style={styles.birthday}>
            <Text style={[styles.header, { color: '#191970' }]}> B</Text>
            <Text style={[styles.header, { color: '#708090' }]}> I</Text>
            <Text style={[styles.header, { color: '#D8BFD8' }]}> R</Text>
            <Text style={[styles.header, { color: '#FFFF00' }]}> T</Text>
            <Text style={[styles.header, { color: '#F5DEB3' }]}> H</Text>
            <Text style={[styles.header, { color: '#800000' }]}> D</Text>
            <Text style={[styles.header, { color: '#7FFFD4' }]}> A</Text>
            <Text style={[styles.header, { color: 'green' }]}> Y</Text>
            <Text style={[styles.header, { color: '#FF7F50' }]}> !</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/cake.jpg')} style={styles.image}/>

            </View>

            <TextInput
                style={styles.input}
                placeholder="Enter message"
                onChangeText={handleInputChange}
                multiline={true}

            />


            <TouchableOpacity
                style={styles.button}
                onPress={handleSendWishes}

            >
                <Text style={styles.buttonText}>Send Wishes</Text>
            </TouchableOpacity>

            {displayMessage ? (
                <View style={styles.msgContainer}>
                    <Text style={styles.msg} multiline={true} >{displayMessage}</Text>
                </View>
            ) : null}
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F0F8FF'



    },
    happy:{
        flexDirection: 'row'
    },
    birthday:{
        flexDirection: 'row',
        
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
    imageContainer:{
        alignItems: 'center',
        marginBottom: 20,
        transform: [{rotate: '-30deg'}]
    },
    image:{
        height: 120,
        marginBottom: 20,
        width: 120,
        borderRadius: 60

    },
    input: {
        width: '100%',
        borderRadius: 20,
        height: 50,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        textAlign: 'center',
        marginBottom: 20,
        color: '#A9A9A9',



    },
    msgContainer: {
        width: 100,
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,


    },
    msg: {
        fontSize: 25,
        fontFamily: 'Handjet-Light',
        textAlign: 'right',


    },
    button: {
        borderRadius: 10,
        backgroundColor: '#5F9EA0',
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'



    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',

    }
})