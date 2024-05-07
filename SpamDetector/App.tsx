import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import StackNavigator from './StackNavigator';

function App(): React.JSX.Element {

  return (
    <>
      <StatusBar style="auto" />
      <StackNavigator />
    </>
  );
}

export default App;