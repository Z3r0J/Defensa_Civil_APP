import React from 'react';
import {Image, useColorScheme, View} from 'react-native';
import {Text} from 'react-native-paper';

export const LoadingComponent = () => {
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Image
        source={require('../../../assets/images/logo_defensa_civil_ultimate.png')}
        resizeMode="contain"
        style={{
          width: '100%',
          flex: 1,
          justifyContent: 'center',
        }}
      />

      <Image
        source={require('../../../assets/images/loading.gif')}
        resizeMode="cover"
        style={{
          width: '115%',
          flex: 0.4,
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          marginTop: 40,
        }}
      />

      <Text
        style={{
          alignContent: 'center',
          textAlign: 'center',
          color: 'black',
          textTransform: 'capitalize',
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 25,
        }}>
        Cargando...
      </Text>
    </View>
  );
};
