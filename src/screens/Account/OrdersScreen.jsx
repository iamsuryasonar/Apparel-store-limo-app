import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import OrderServices from '../../services/order.services';

function OrdersScreen() {
    const [orders, setOrders] = useState(null);

    const getOrders = async () => {
        const results = await OrderServices.getAllOrders();
        setOrders(results);
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <View>
            {orders && orders?.length < 1 && <Text>You haven't placed any orders yet.</Text>}
            <ScrollView>
                {orders?.map((order) => {
                    return (
                        <View key={order._id}>
                            <View >
                                <Image source={{ uri: order.item.colorvariant.images[0].url }}></Image>
                            </View>
                            <View >
                                <Text>{order.item.product.name}</Text>
                                <View >
                                    <Text>₹ {order.lockedprice}</Text>
                                    <Text>size: {order.item.sizevariant.name}</Text>
                                    <Text>QTY: {order.item.quantity}</Text>
                                </View>
                                <Text> Total: ₹ {order.totalamount}</Text>
                                <Text>Address Info</Text>
                                <Text>{order.name}, </Text>
                                <Text>{order.contact_number}, </Text>
                                <Text>{order.house_number}, </Text>
                                <Text>{order.city}, </Text>
                                <Text>{order.pin}, </Text>
                                <Text>{order.state} ...</Text>
                                <Text>{order.status}</Text>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    )
}

export default OrdersScreen