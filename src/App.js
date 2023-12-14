import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogContextProvider } from './contexts/LogContext';
import StackNavigation from './navigations/Stack';
import 'react-native-get-random-values'

const App = () => {
    return (
      <LogContextProvider>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
      </LogContextProvider>
    );
};

export default App;