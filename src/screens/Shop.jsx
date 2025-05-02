import React, { useEffect, useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Pressable,
    Touchable,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import ProductCard from '../components/ProductCard';

function Shop({ navigation }) {
    let [products, setProducts] = useState();
    const [isActive, setIsActive] = useState('home');
    const API = "https://apparel-store-limo-backend.vercel.app/api/v1/product/public/products?page=0&from=0&to=6000";

    async function fetchProducts() {
        let response = await fetch(API);
        let data = await response.json();
        console.log(data.results);
        setProducts(data.results);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    if (!products) return <ActivityIndicator size="large" />

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

export default Shop;
