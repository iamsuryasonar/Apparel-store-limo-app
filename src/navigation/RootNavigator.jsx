import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { useSelector } from 'react-redux';
import SplashScreen from '../screens/SplashScreen';
import TabNavigator from './TabNavigator';
import AuthScreen from '../screens/Auth/AuthScreen';
import ProductScreen from '../screens/ProductScreen';

function RootNavigator() {
    const Stack = createNativeStackNavigator();

    const { loading, isAuthenticated } = useSelector((state) => state.auth);

    return <Stack.Navigator>
        {loading ? (
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        ) : isAuthenticated ? (
            <>
                <Stack.Screen name='Tabs' component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Product"
                    component={ProductScreen}
                    options={({ route }) => ({
                        title: (route.params?.product?.name || '').slice(0, 25) + '...' || 'Product Details',
                    })}
                />
            </>
        ) : (
            <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }} />
        )}
    </Stack.Navigator>
}

export default RootNavigator