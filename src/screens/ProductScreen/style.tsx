import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    marginBottom: 100,
  },
  title: {
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  bottom: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
  },
  goToCart: {
    backgroundColor: '#4d4d4d',
    borderRadius: 8,
    width: Dimensions.get('window').width / 6,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  productBar: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    flex: 1,
    borderRadius: 20,
  },
  imageOfProduct: {
    width: 150,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
  nameOfProduct: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  priceOfProduct: {
    color: '#cc80ff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default style;
