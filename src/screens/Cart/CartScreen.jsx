import React, { useMemo } from 'react'
import { Image, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { updateItemQuantity, remove_item_from_cart, incrementQuantity, decrementQuantity } from '../../store/slices/cartSlice'
import { ScrollView } from 'react-native-gesture-handler';

function CartScreen() {

    const cartItems = useSelector((state) => state.cart.cart);

    const totalPrice = useMemo(() => {
        return cartItems?.reduce((acc, item) => {
            return acc + item?.sizevariant?.selling_price * item?.quantity;
        }, 0);
    }, [cartItems]);

    console.log(cartItems)

    return (
        <View>
            {
                cartItems.map((item) => {
                    return <ScrollView key={item._id}>
                        <View style={{
                            padding: 10,
                        }}>
                            <Image style={{
                                width: 120,
                                height: 120,
                            }}
                                source={{ uri: item.colorvariant.images[0].url }}>
                            </Image>
                            <Text>
                                {item.product.name}
                            </Text>
                        </View>
                    </ScrollView>
                })
            }
            <View>
                <Text>Total price</Text>
                <Text>Rupees {totalPrice}</Text>
            </View>
        </View>
    )
}

export default CartScreen