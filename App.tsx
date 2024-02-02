import 'react-native-gesture-handler';
import React from 'react';
//import {Text, View} from 'react-native';

import Navigation from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
export default App;
