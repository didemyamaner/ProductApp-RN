import React from 'react';
import ProductScreen from '../screens/ProductScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import {RootStackParams, TabStackParams} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParams>();
const Tab = createBottomTabNavigator<TabStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: () => {
        let iconName;

        if (route.name === 'HomeScreen') {
          iconName = 'home';
        } else if (route.name === 'ProductScreen') {
          iconName = 'isv';
        } else if (route.name === 'CartScreen') {
          iconName = 'shoppingcart';
        }

        return <Icon name={iconName} size={30} color={'#cc80ff'} />;
      },
    })}
    tabBarOptions={{
      labelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#cc80ff',
      },
      style: {
        height: 60,
      },
    }}>
    <Tab.Screen
      name="ProductScreen"
      component={ProductScreen}
      options={{headerShown: false}}
    />
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen
      name="CartScreen"
      component={CartScreen}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

export default Navigation;
