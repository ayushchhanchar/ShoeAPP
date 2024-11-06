import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const ProductBox = () => {
  return (
    <View style={styles.Box}>
        <Image
        style={styles.tinyLogo}
        source={{uri: 'https://images-cdn.ubuy.co.in/656b8e66fce2b162f83819f5-nike-men-s-air-max-excee-running.jpg'}}
      />
        {/* <Image source={} style={styles.ProductImage} /> */}
        <View style={styles.ProductDetails}>
            <Text>Product Name</Text>
            <Text>Description</Text>
            <Text>price</Text>
         </View>
      
    </View>
  )
}

export default ProductBox

const styles = StyleSheet.create({
    Box: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        width: 180,
    },
    tinyLogo: {
        width: '100%',
        height: 100,
    },
})