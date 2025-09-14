import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/thems'

const pageInitiation = () => {
  return (
       <>
         <ScreenWrapper bg="white">
            <StatusBar style="dark"/>
                    <View style={styles.container}>
                         <View style={{gap:20}}>
                            <Text style={styles.title}>
                                EndyOs
                            </Text>
                        </View>
                   </View>
         </ScreenWrapper>
       </>
  )
}

export default pageInitiation

const styles = StyleSheet.create({
    container:{
        flex: 0.1,
            alignItems: 'center',
            justifyContent:'space-around',
            backgroundColor:'white',
            paddingHorizontal: wp(2)
        },
         title:{
                color: theme.colors.TextGrey,
                fontSize: hp(4),
                textAlign: 'center',
                fontWeight: theme.fonts.extrabold
            }
})