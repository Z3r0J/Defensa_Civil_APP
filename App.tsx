import React, {type PropsWithChildren} from 'react';
import {useColorScheme, View} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {NavigationDrawerComponent} from './src/components/navigation/NavigationDrawerComponent';
import {AuthenticatedProvider} from './src/contexts/AuthenticatedContext';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const MyDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: 'rgb(239,121,42)',
    },
  };

  const MyLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(0,74,155)',
    },
  };

  return (
    <React.Suspense
      fallback={
        <View>
          <Text>Cargando...</Text>
        </View>
      }>
      <AuthenticatedProvider>
        <NavigationContainer theme={isDarkMode ? MyDarkTheme : MyLightTheme}>
          <NavigationDrawerComponent />
        </NavigationContainer>
      </AuthenticatedProvider>
    </React.Suspense>
  );
};

export default App;
