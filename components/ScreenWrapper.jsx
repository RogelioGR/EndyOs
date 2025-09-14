import { View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

const ScreenWrapper = ({ children, bg }) => {
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 5 : 30;

    // Si bg es "gradient", aplicar gradiente
    if (bg === 'gradient') {
        return (
            <LinearGradient
                colors={['rgba(14, 46, 204, 1)', 'rgba(43, 0, 88, 1)' ]}
                style={{ flex: 1, paddingTop }}
                start={{ x: 0.2, y: 0.4 }}
                end={{ x: 1, y: 1 }}
            >
                {children}
            </LinearGradient>
        )
    }

    // Si no, usar View normal
    return (
        <View style={{ flex: 1, paddingTop, backgroundColor: bg }}>
            {children}
        </View>
    )
}

export default ScreenWrapper