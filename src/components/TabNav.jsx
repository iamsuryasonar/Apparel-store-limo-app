import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shop from '../screens/Shop';
import Cart from '../screens/Cart';
import Account from '../screens/Account';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabNav() {
    const Tab = createBottomTabNavigator();

    return <Tab.Navigator
        initialRouteName="shop"
        screenOptions={{
            activeTintColor: '#e91e63',
        }}
    >
        <Tab.Screen
            name="shop"
            component={Shop}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="cart"
            component={Cart}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cart" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="account"
            component={Account}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>

}
