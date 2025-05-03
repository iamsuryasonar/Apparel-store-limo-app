import React from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'

function ProductScreen({ route }) {
  const { product } = route.params;

  const { name, description, image, sizevariants } = product;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 1,
        backgroundColor: '#E3DFFD',
        borderRadius: 10,
      }}>
        <Image source={{ uri: image.url }} style={{ width: '100%', height: '100%', alignSelf: 'center' }} />
      </View>
      <View style={{
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 14,
        marginTop: -14
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text style={{ color: "black", fontWeight: 'bold' }}>{name}</Text>
          <View style={{
            flexDirection: 'column',
          }}>
            <Text style={{ color: "black", textDecorationLine: 'line-through' }}>{'₹' + sizevariants.mrp}</Text>
            <Text style={{ color: "black", }}>{'₹' + sizevariants.selling_price.toFixed(2)}</Text>
          </View>
        </View>
        <Text>
          {description}
        </Text>
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
    </SafeAreaView>
  )
}

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3DFFD",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
})