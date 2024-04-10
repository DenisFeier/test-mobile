import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import MainStack from './src/router/MainStack';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
