import Main from './components/main';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/tabs';

export default function App() {

  return (
    <>
      {/* <Main /> */}
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </>
  );
}
