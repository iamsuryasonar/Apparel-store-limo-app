import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AddressScreen from '../screens/Account/AddressScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import OrdersScreen from '../screens/Account/OrdersScreen';

function AccountNavigator() {
    const Stack = createNativeStackNavigator();

    return <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
}

export default AccountNavigator