import { StatusBar } from 'expo-status-bar';
import{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore , combineReducers} from 'redux';
import { Provider } from "react-redux";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
// import {AppLoading} from 'expo-app-loading'
import * as Font from 'expo-font';
import ProductsReducer from "./store/reducers/prodcuts";
import Shopnavigator from './navigation/Shopnavigator';
const rootReducer = combineReducers({
  products: ProductsReducer
});

const store = createStore(rootReducer);
export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });
  const [latoLoaded] = useLato({
    Lato_400Regular
  });
  
  if (!oswaldLoaded) {
    return null;
  }
  
  if (!latoLoaded) {
    return null;
  }
  
 
  // const [fontLoaded , setFontLoaded] = useState(false);
    
  //   if(!fontLoaded) {
  //     return ( <AppLoading startAsync={fetchFonts} onFinsih={() => {
  //       setFontLoaded(true);
  //     }}/>
  // )
    
   return (
    <Provider store={store}>
       <Shopnavigator />
    </Provider>
  );
   }



// const fetchFonts = () => {

//   return Font.loadAsync({
//     'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
