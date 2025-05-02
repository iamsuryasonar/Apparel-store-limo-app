import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

function Splash() {
    const isLoggedIn = false;
    console.log(useSelector((state) => state.auth));

    const navigation = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isLoggedIn) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Tabs' }],
                })
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Auth' }],
                })
            }
        }, 1500);
        return () => clearTimeout(timeout);
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading App...</Text>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default Splash