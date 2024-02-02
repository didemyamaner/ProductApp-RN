import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 26,
  },
  payContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  cartBar: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    flex: 1,
    borderRadius: 20,
  },
  titleStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
  },
  priceStyle: {
    color: '#cc80ff',
    fontSize: 18,
    alignSelf: 'flex-end',
  },
});

export default style;
