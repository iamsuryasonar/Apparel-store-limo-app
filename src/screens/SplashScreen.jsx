import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native';

function SplashScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading App...</Text>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default SplashScreen