import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProductType} from '../types';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const ProductScreen = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      fetch('https://65ae163b1dfbae409a73e9c8.mockapi.io/api/v1/products')
        .then(res => res.json())
        .then(json => {
          return setData(json);
        });
    })();
  }, []);

  const handleTouchableOpacityPress = () => {
    navigation.navigate('SecondScreen');
  };

  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Hoşgeldiniz</Text>
        <Text style={style.bottom}>Liste</Text>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                backgroundColor: 'pink',
                padding: 10,
                margin: 10,
                flex: 1,
              }}
              onPress={handleTouchableOpacityPress}>
              <View
                style={{
                  backgroundColor: 'red',
                  flex: 1,
                }}>
                <Image
                  style={{
                    backgroundColor: 'blue',
                    flex: 1,
                    //resizeMode: 'cover',
                    //width: 100,
                    height: 100,
                  }}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>

              <Text>{item.productName}</Text>
              <Text>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ProductScreen;
