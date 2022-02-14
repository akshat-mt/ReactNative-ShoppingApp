import React from "react";
import { ScrollView , View , Text , Button , StyleSheet, Image} from 'react-native';
import Colors from "../../constants/Colors";
import { useSelector } from 'react-redux'; 
import { TransitionPresets } from 'react-navigation-stack';

const ProductsDetailsScreen = props => {
    
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))
    return (
    
        <ScrollView>
        <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
        <View style={styles.actions}>
          <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
        </View>
        <Text style={styles.price}>₹{selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </ScrollView>
  
    )
};


// ProductsDetailsScreen.navigationOptions = {
//   title: 'Profile',
//   ...TransitionPresets.ModalSlideFromBottomIOS
// }

ProductsDetailsScreen.navigationOptions = navData => {
    return {
        // headerTitle: navData.navigation.getParam('productTitle'),
        // ...TransitionPresets.ModalPresentationIOS,
        // headerShown:false
        title: navData.navigation.getParam('productTitle'),
        ...TransitionPresets.ModalPresentationIOS
          
    };
    
}

// ProductsDetailsScreen.screenOptions = () => {
//  return {
//   ...TransitionPresets.ModalPresentationIOS,
//   headerShown:false
// }}

const styles = StyleSheet.create({
    
  image: {
    width: '100%',
    height: 300
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Lato_400Regular'
  },
  description: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  }

});


export default ProductsDetailsScreen