import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNav from './src/components/TabNav';
import Product from './src/screens/Product';
import Auth from './src/screens/Auth';
import Splash from './src/screens/Splash';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#E3DFFD" barStyle="light-content" />
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;

function RootStack() {
  const Stack = createNativeStackNavigator();

  return <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
    <Stack.Screen name='Tabs' component={TabNav} options={{ headerShown: false }} />
    <Stack.Screen
      name="Product"
      component={Product}
      options={({ route }) => ({
        title: (route.params?.product?.name || '').slice(0, 25) + '...' || 'Product Details',
      })}
    />
  </Stack.Navigator>
}
