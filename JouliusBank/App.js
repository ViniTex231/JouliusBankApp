import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import { AuthProvider } from './src/services/api';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#54007C" barStyle="light-content" />
        <Routes/>
      </NavigationContainer>
    </AuthProvider>
  );
}
