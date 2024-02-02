import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProductType} from '../types';
import style from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {TabStackScreenProps} from '../../navigation/types';

const ProductScreen = ({
  navigation,
}: TabStackScreenProps<'TabNavigator', 'ProductScreen'>) => {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    (async () => {
      fetch('https://65ae163b1dfbae409a73e9c8.mockapi.io/api/v1/products')
        .then(res => res.json())
        .then(json => {
          return setData(json);
        });
    })();
  }, []);

  const handleTouchableOpacityPress = (item: ProductType) => {
    navigation.navigate('ProductDetailScreen', {data: item});
  };

  return (
    <View style={style.container}>
      <View>
        <View>
          <Text style={style.title}>Product</Text>
        </View>
        <Text style={style.bottom}>List</Text>

        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={style.productBar}
              onPress={() => handleTouchableOpacityPress(item)}>
              <View style={{flex: 1}}>
                <Image
                  style={style.imageOfProduct}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>

              <Text style={style.nameOfProduct}>{item.productName}</Text>

              <View style={style.iconContainer}>
                <Text style={style.priceOfProduct}>${item.price}</Text>
                <Icon name="shoppingcart" size={18} color="black" />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ProductScreen;
