import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

function Auth() {
    const [authMode, setAuthMode] = useState('signin');

    return (
        <View style={{
            flex: 1,
            padding: 10,
            gap: 20,
        }}>
            <View style={{
                flexDirection: 'row',
                gap: 10,
            }}>
                <Pressable
                    onPress={() => setAuthMode('signin')}
                    style={{
                        flex: 1,
                        alignSelf: 'center',
                        padding: 10,
                        borderWidth: 1,
                        backgroundColor: (authMode === 'signin') ? '#8F87F1' : '#fff'
                    }}>
                    <Text style={{
                        alignSelf: 'center',
                    }}> Sign in</Text>
                </Pressable>
                <Pressable onPress={() => setAuthMode('signup')}
                    style={{
                        flex: 1,
                        alignSelf: 'center',
                        padding: 10,
                        borderWidth: 1,
                        backgroundColor: (authMode === 'signup') ? '#8F87F1' : '#fff'
                    }}>
                    <Text style={{
                        alignSelf: 'center'
                    }}> Sign up</Text>
                </Pressable>
            </View>
            {authMode === 'signin' ?
                <SignIn />
                :
                <SignUp />
            }
        </View>
    )
}

export default Auth;

function SignUp() {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });

    function handleChange(field, value) {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }))
    }

    return <View style={{
        flexDirection: 'column',
        gap: 10
    }}>
        <TextInput
            placeholder='First name'
            placeholderTextColor="#333"
            onChangeText={text => handleChange('first_name', text)}
            style={{
                borderWidth: 1,
                color: '#333'
            }}></TextInput>
        <TextInput
            placeholder='Last name'
            placeholderTextColor="#333"
            onChangeText={text => handleChange('last_name', text)}
            style={{
                borderWidth: 1,
                color: '#333'
            }}></TextInput>
        <TextInput
            placeholder='Email'
            placeholderTextColor="#333"
            keyboardType='email'
            onChangeText={text => handleChange('email', text)}
            style={{
                borderWidth: 1,
                color: '#333'
            }}></TextInput>
        <TextInput
            placeholder='Password'
            placeholderTextColor="#333"
            onChangeText={text => handleChange('password', text)}
            style={{
                borderWidth: 1,
                color: '#333'
            }}></TextInput>
        <Pressable style={{
            alignSelf: 'center',
            padding: 10,
            borderWidth: 1,
        }}>
            <Text style={{
                color: '#333',
            }}>Sign up</Text>
        </Pressable>
    </View>
}

function SignIn() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    function handleChange(field, value) {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }))
    }

    return <View style={{
        flexDirection: 'column',
        gap: 10
    }}>
        <TextInput
            placeholder='Email'
            placeholderTextColor="#333"
            keyboardType='email'
            onChangeText={text => handleChange('email', text)}
            style={{
                borderWidth: 1,
                color: '#333'
            }}></TextInput>
        <TextInput
            placeholder='Password'
            placeholderTextColor="#333"
            onChangeText={text => handleChange('password', text)}
            style={{
                borderWidth: 1,
                color: '#333'
            }}></TextInput>
        <Pressable style={{
            alignSelf: 'center',
            borderWidth: 1,
            padding: 10,
        }}>
            <Text style={{
                color: '#333',
            }}>Sign in</Text>
        </Pressable>
    </View>
}