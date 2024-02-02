import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  basketContainer: {
    flexDirection: 'row',
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 400,
    borderRadius: 10,
    alignSelf: 'center',
  },
  iconOverlay: {
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginVertical: 10,
    marginTop: 30,
  },
  rowContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  descContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#cc80ff',
  },
  textInfo: {
    fontSize: 13,
    color: 'black',
    //fontWeight: 'bold',
  },
  stock: {
    color: '#00ff00',
    fontWeight: 'bold',
  },

  mainContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  decrease: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 8,
    width: Dimensions.get('window').width / 3 + 20,
  },
  count: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },

  total: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  addChart: {
    backgroundColor: '#4d4d4d',
    marginHorizontal: 100,
    borderRadius: 8,
    padding: 18,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
export default style;
