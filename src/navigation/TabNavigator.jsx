import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShopScreen from '../screens/Shop/ShopScreen';
import CartScreen from '../screens/Cart/CartScreen';
import AccountNavigator from './AccountNavigator';

function TabNavigator() {
    const Tab = createBottomTabNavigator();

    return <Tab.Navigator
        initialRouteName="shop"
        screenOptions={{
            activeTintColor: '#e91e63',
        }}
    >
        <Tab.Screen
            name="shop"
            component={ShopScreen}
            options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="cart"
            component={CartScreen}
            options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cart" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="account"
            component={AccountNavigator}
            options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>

}


export default TabNavigator;