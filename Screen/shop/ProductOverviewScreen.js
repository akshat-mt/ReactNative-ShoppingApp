import React from "react";
import { FlatList , Text } from 'react-native';
import { TransitionPresets } from "react-navigation-stack";
import { useSelector , useDispatch} from "react-redux";
import * as cartActions from "../../store/actions/cart"
import ProductItem from "../../components/shop/ProductItem";
import { HeaderButtons , Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton"
const ProductsOverviewScreen  = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    return ( <FlatList data={products} 
    keyExtractor={item => item.id} 
    renderItem={itemData => <ProductItem image ={itemData.item.imageUrl} title={itemData.item.title} price={itemData.item.price} onViewDetail={() => {
        props.navigation.navigate('productDetail' , {productId : itemData.item.id,
            productTitle : itemData.item.title
        });
    }} onAddToCart={() => {
        dispatch(cartActions.addToCart(itemData.item));
    }}/>} 
    />
    ) 
};

ProductsOverviewScreen.navigationOptions = (navData) => {
    return {
         headerTitle:"All Products",
        headerLeft : (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' 
            iconName='md-menu' 
            onPress={() => {
                navData.navigation.toggleDrawer();
            }}/ >
            </HeaderButtons>
       ) ,
        headerRight :(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Cart' 
            iconName='ios-cart' 
            onPress={() => {
                navData.navigation.navigate('Cart')
            }}/ >
        </HeaderButtons>
        )
    };
    };



export default ProductsOverviewScreen;