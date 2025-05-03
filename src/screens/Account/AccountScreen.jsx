import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

function AccountScreen({ navigation }) {
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <View style={{
            padding: 10,
            flex: 1,
            gap: 20,
        }}>
            <View>
                <Text style={{
                    fontWeight: 'bold'
                }}>Account Settings</Text>
                <Pressable
                    style={{
                        padding: 10,
                        borderRadius: 10,
                    }}
                    onPress={() => navigation.navigate('Address')}>
                    <Text style={{
                    }}>Saved Addresses</Text>
                </Pressable>
                <Pressable
                    style={{
                        padding: 10,
                        borderRadius: 10,
                    }}
                    onPress={() => navigation.navigate('Orders')}>
                    <Text style={{
                    }}>Previous Order</Text>
                </Pressable>
                <Pressable
                    style={{
                        padding: 10,
                        borderRadius: 10,
                    }}>
                    <Text style={{
                    }}>Edit Profile</Text>
                </Pressable>
            </View>
            <Pressable
                style={{
                    backgroundColor: 'red',
                    padding: 10,
                    borderRadius: 10,
                }}
                onPress={logOut}>
                <Text style={{
                    color: 'white',
                    textAlign: 'center'
                }}>Log out</Text>
            </Pressable>
        </View>
    )
}

export default AccountScreen;