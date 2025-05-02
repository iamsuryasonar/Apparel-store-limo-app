import React from 'react'
import {
    Image,
    Pressable,
    Text,
    View,
} from 'react-native';

function ProductCard({ name, image, sizevariants }) {

    let { mrp, selling_price } = sizevariants;

    return <>
        <View style={{
            backgroundColor: '#E3DFFD',
            borderRadius: 10,
        }}>
            <Image source={{ uri: image.url }} style={{ width: '100%', aspectRatio: 1, alignSelf: 'center' }} />
        </View>
        <View style={{
            gap: 6,
        }}>
            <Text style={{ color: "black", fontWeight: 'bold' }}>{name}</Text>
            <View style={{
                flexDirection: 'row',
                gap: 10,
            }}>
                <Text style={{ color: "black", textDecorationLine: 'line-through' }}>{'₹' + mrp}</Text>
                <Text style={{ color: "black", }}>{'₹' + selling_price}</Text>
            </View>
            <Pressable
                style={({ pressed }) => [
                    {
                        padding: 8,
                        borderRadius: 10,
                    },
                    { backgroundColor: pressed ? '#A594F9' : '#CDC1FF' },
                ]}>
                <Text style={{
                    alignSelf: 'center',
                    color: 'black',
                }}>
                    Add to cart
                </Text>
            </Pressable>
        </View>
    </>
}

export default ProductCard;