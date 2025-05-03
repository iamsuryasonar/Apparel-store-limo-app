import React, { useEffect } from 'react'
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import ProductCard from '../../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_cart_items } from '../../store/slices/cartSlice';
import { get_products } from '../../store/slices/productSlice';

function ShopScreen({ navigation }) {

    const dispatch = useDispatch();
    const { products, pagination } = useSelector(state => state.product);

    console.log(products?.products);

    useEffect(() => {
        dispatch(get_products({
            page: 0,
            sort_type: 'ASCENDING',
            from: 0,
            to: 6000,
        }))
    }, [])

    useEffect(() => {
        dispatch(get_all_cart_items());
    }, [])

    if (!products?.products) return <ActivityIndicator size="large" />

    return (
        <>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={products.products}
                    numColumns={2}
                    keyExtractor={(item, index) => {
                        return `${index}`
                    }}
                    contentContainerStyle={{
                        padding: 6,
                    }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return <TouchableOpacity
                            onPress={() => navigation.navigate('Product', { product: item })}
                            style={
                                {
                                    backgroundColor: "#F5EFFF",
                                    borderRadius: 12,
                                    margin: 4,
                                    padding: 10,
                                    flex: 1,
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: 10,
                                }
                            }>
                            <ProductCard
                                key={index}
                                {...item}
                            />
                        </TouchableOpacity>
                    }}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E3DFFD",
    },
})

export default ShopScreen;
