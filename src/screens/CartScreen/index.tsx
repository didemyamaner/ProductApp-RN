import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {TabStackScreenProps} from '../../navigation/types';
import {ProductType} from '../types';
import style from './style';
import Icon from 'react-native-vector-icons/AntDesign';

const CartScreen = ({
  route,
}: TabStackScreenProps<'TabNavigator', 'CartScreen'>) => {
  const {data} = route?.params || {};
  const [cartList, setCartList] = useState<ProductType[]>([]);

  useEffect(() => {
    if (data) {
      const isProductExist = cartList.some(item => item.id === data.id);
      if (!isProductExist) {
        setCartList(prevItems => [...prevItems, data]);
      }
    }
  }, [data, cartList]);

  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <Text style={style.text}>Cart</Text>
        <View style={style.payContainer}>
          <Text style={{color: 'white'}}>Payment</Text>
          <Icon name="shoppingcart" size={30} color="black" />
        </View>
      </View>

      {data ? (
        <FlatList
          data={cartList}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View key={item.id} style={style.cartBar}>
              <Image
                style={style.image}
                resizeMode="stretch"
                source={{uri: item?.image}}
              />
              <View>
                <Text style={style.titleStyle}>{item?.productName}</Text>
                <Text style={style.priceStyle}>Quantity: {item?.quantity}</Text>
                <Text style={style.priceStyle}>
                  totalPrice: ${item?.totalPrice}
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text>Cartta bir şey yok</Text>
      )}
    </View>
  );
};

export default CartScreen;
