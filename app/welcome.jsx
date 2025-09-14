import { Text, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import {theme} from '../constants/thems'
import Button from '../components/Buttons'
import { useRouter } from 'expo-router'


const welcome = () => {
    const router = useRouter();
  return (
    <ScreenWrapper bg="gradient">
        <StatusBar style="dark"/>
        {/* contenedor de imagen y texto de bienvenida */}
        <View style={styles.container}>
            <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/chatbot-mensaje-burbuja-vectorart.png')}/>
            <View style={{gap:15}}>
                <Text style={styles.title}>
                    Conoce EndyOs
                </Text>
                <Text style={styles.punchline}>
                    El asistente virtual de confianza
                </Text>

            </View>
                <View style={styles.footer} >
                <Button title='Comencemos'
                buttonStyle={{marginHorizontal: wp(3)}}
                onPress={() => router.push('pageInitiation')}
                />
              
            </View>
        </View>
    </ScreenWrapper>
  )
}

export default welcome

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-around',
        paddingHorizontal: wp(2)
    },
    welcomeImage:{
        height: hp(50),
        width: wp(100),
        alignSelf: 'center'
    },
    title:{
        color: theme.colors.TextWhite,
        fontSize: hp(5),
        textAlign: 'center',
        fontWeight: theme.fonts.extrabold
    },
    punchline:{
        textAlign:'center',
        paddingHorizontal: wp(10),
        fontSize: hp(2),
        color: theme.colors.TextWhiteLight
    },
    footer:{
        gap:30,
        width:'90%',
        justifyContent:'center',
    },
    bottomTextContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        gap: 5
    },
    loginText:{
        textAlign:'center',
        color:theme.colors.text,
        fontSize: hp(1.6)
    }

})

