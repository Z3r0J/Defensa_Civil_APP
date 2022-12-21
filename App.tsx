import React, {Suspense, useEffect, useState} from 'react';
import {Platform, useColorScheme, View} from 'react-native';
import {handleCamera, handleStorage} from './src/helpers/Permission';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import NavigationDrawerComponent from './src/components/navigation/NavigationDrawerComponent';
import {GeneralProvider} from './src/contexts/GeneralContext';
import {LoadingComponent} from './src/components/loading/LoadingComponent';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  useEffect(() => {

    const getPermission = async() =>{
      if (Platform.OS === 'android' && !(await handleCamera())) {
        return;
      }
      if (Platform.OS === 'android' && !(await handleStorage())) {
        return;
      }
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    getPermission();
  }, []);

  return (
    <GeneralProvider>
      {isLoading && <LoadingComponent />}
      <NavigationContainer theme={isDarkMode ? MyDarkTheme : MyLightTheme}>
        <NavigationDrawerComponent />
      </NavigationContainer>
    </GeneralProvider>
  );
};

export default App;
