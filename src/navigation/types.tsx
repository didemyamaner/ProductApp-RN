import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductType} from '../screens/types';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type RootStackParams = {
  TabNavigator: NavigatorScreenParams<TabStackParams>;
  ProductDetailScreen: {data: ProductType};
};

export type TabStackParams = {
  HomeScreen: undefined;
  ProductScreen: undefined;
  CartScreen: {data: ProductType};
};

export type RootStackScreenProps<T extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, T>;

// export type TabStackScreenProps<T extends keyof TabStackParams> =
//   NativeStackScreenProps<TabStackParams, T>;
export type TabStackScreenProps<
  T extends keyof RootStackParams,
  E extends keyof TabStackParams,
> = CompositeScreenProps<
  NativeStackScreenProps<TabStackParams, E>,
  NativeStackScreenProps<RootStackParams, T>
>;
