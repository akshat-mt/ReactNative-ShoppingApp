
import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";
import { REMOVE_FROM_CART } from "../actions/cart";
const initalState = {
    items : {

    },
    totalAmount: 0
};


export default (state = initalState , action) => {
    switch(action.type) {
        case ADD_TO_CART :
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;

                let updatedOrNewCartItem;
            if(state.items[addedProduct.id]){
               updatedOrNewCartItem = new CartItem (
                    state.items[addedProduct.id].quantity+1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum+productPrice
                );
              
            }
            else{
                updatedOrNewCartItem = new CartItem(1,productPrice,productTitle,productPrice)
            }
                return {
                    ...state , items : {...state.items,[addedProduct.id]:updatedOrNewCartItem},
                    totalAmount : state.totalAmount+productPrice
                };
                
    case REMOVE_FROM_CART:
        const selectedCartItem = state.items[action.pid];
        const currentQty = selectedCartItem.quantity;
        let updatedCartItems;
        if (currentQty > 1) {
          // need to reduce it, not erase it
          const updatedCartItem = new CartItem(
            selectedCartItem.quantity - 1,
            selectedCartItem.productPrice,
            selectedCartItem.productTitle,
            selectedCartItem.sum - selectedCartItem.productPrice
          );
          updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
        } else {
          updatedCartItems = { ...state.items };
          delete updatedCartItems[action.pid];
        }
        return {
          ...state,
          items: updatedCartItems,
          totalAmount: state.totalAmount - selectedCartItem.productPrice
        };
    }
  
    return state;        
            
    };
   
