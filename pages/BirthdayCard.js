import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'



export default function BirthdayCard() {
    const [message, setMessage] = useState('');
    const [displayMessage, setDisplayMesage] = useState('');

    const handleInputChange = (text) => {
        setMessage(text);
    }
    const handleSendWishes =()=>{
        setDisplayMesage(message);
    }
    
    return (
        <ImageBackground source={require('../assets/back.jpg')} style={styles.background} resizeMode='cover'>
            
            <View style={styles.container} >

                <Text style={styles.header}>Happy Birthday!</Text>


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
                ):null}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
       
       
       
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '100%'


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
        height: 100,
        borderWidth: 1,
        borderColor: 'gray',
        textAlign: 'center',
        marginBottom: 20,


    },
    msgContainer:{
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,


    },
    msg: {
        fontSize: 25,
        fontFamily: 'Handjet-Light',
        textAlign: 'left',


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