/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RootStackScreenProps} from '../../navigation/types';
import style from './style';
import Icon from 'react-native-vector-icons/AntDesign';

const ProductDetailScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'ProductDetailScreen'>) => {
  const {data} = route.params;

  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    const newTotalPrice = data.price * (count + 1);
    setTotalPrice(newTotalPrice);
  };

  const onDecrease = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
      const newTotalPrice = totalPrice - data.price;
      setTotalPrice(newTotalPrice);
    }
  };

  const onReset = () => {
    const newItem = {...data, quantity: count, totalPrice: totalPrice};

    navigation.navigate('TabNavigator', {
      screen: 'CartScreen',
      params: {data: newItem},
    });
    setCount(0);
    setTotalPrice(0);
  };

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.closeIcon}
        onPress={() => navigation.goBack()}>
        <Icon
          name="closecircleo"
          size={30}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: 20,
          }}
          color="gray"
        />
      </TouchableOpacity>

      <Image
        style={style.image}
        resizeMode="stretch"
        source={{
          uri: data.image,
        }}
      />
      <View style={style.descContainer}>
        <View style={style.rowContainer}>
          <Text style={[style.textInfo, {fontSize: 20, fontWeight: 'bold'}]}>
            {data.productName}
          </Text>
          <Text style={style.price}>${data.price}</Text>
        </View>
        <View style={style.rowContainer}>
          <Text style={[style.textInfo]}>Availability</Text>
          <Text style={style.stock}>In Stock</Text>
        </View>
        <View style={style.rowContainer}>
          <Text style={[style.textInfo, {marginRight: 250}]}>Rating</Text>
          <Icon name="star" size={16} color="#ffcc00" />
          <Icon name="star" size={16} color="#ffcc00" />
          <Icon name="star" size={16} color="#ffcc00" />
          <Icon name="star" size={16} color="#ffcc00" />
          <Icon name="star" size={16} color="#ffcc00" />
        </View>

        <View style={style.line} />

        <View style={style.mainContainer}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            Quantity
          </Text>
          <View style={style.decrease}>
            <TouchableOpacity style={{flex: 1}} onPress={onDecrease}>
              <Text style={{fontSize: 25, color: 'black', textAlign: 'center'}}>
                -
              </Text>
            </TouchableOpacity>

            <Text style={style.count}>{count}</Text>

            <TouchableOpacity style={{flex: 1}} onPress={onPress}>
              <Text style={{fontSize: 25, color: 'black', textAlign: 'center'}}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.rowContainer}>
          <Text style={{fontSize: 25, color: 'black'}}>Total</Text>
          <Text style={style.price}>${totalPrice}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => onReset()}>
        <View style={style.addChart}>
          <Icon name="shoppingcart" size={20} color="white" />
          <Text style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
            Add to cart
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;
