import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import AddressServices from '../../services/address.services';
import { Pressable } from 'react-native';

function AddressScreen() {
    const [addresses, setAddresses] = useState(null);

    const getAddresses = async () => {
        const response = await AddressServices.getAllAddresses();
        setAddresses(response);
    };

    useEffect(() => {
        getAddresses();
    }, []);

    const handleAddressDelete = async (addressToDelete) => {
        await AddressServices.removeAddress({
            id: addressToDelete?._id,
        });
        setAddresses(
            addresses.filter((address) => address._id !== addressToDelete._id)
        );
    };

    return (
        <View>
            {addresses && addresses?.length === 0 ? (
                <View >
                    <Text>No Address Found</Text>
                </View>
            ) : (
                <ScrollView>
                    {
                        addresses?.map((address) => {
                            return (
                                <View
                                    style={{
                                        padding: 10,
                                    }}
                                    key={address._id}
                                >
                                    <View>
                                        <Text>
                                            {address.name}
                                        </Text>
                                        <Text>Phone : {address.contact_number}</Text>
                                        <Text>House no. {address.house_number}</Text>
                                        <Text>{address.landmark}</Text>
                                        <Text>{address.town}, {address.pin}</Text>
                                        <Text>{address.city}, {address.state}, {address.country}</Text>
                                        <View style={{
                                            gap: 10
                                        }}>
                                            <Pressable style={{
                                                backgroundColor: 'red',
                                                borderRadius: 10,
                                                padding: 10,
                                            }} onPress={() => {
                                                handleAddressDelete(address);
                                            }} >
                                                <Text style={{ color: 'white' }}>Remove</Text>
                                            </Pressable>
                                            <Pressable style={{
                                                backgroundColor: 'red',
                                                borderRadius: 10,
                                                padding: 10,
                                            }} onPress={() => { }}>
                                                <Text style={{ color: 'white' }}>Edit</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            )}
        </View >
    )
}

export default AddressScreen