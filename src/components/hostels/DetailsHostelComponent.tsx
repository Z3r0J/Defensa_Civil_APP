import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text, useColorScheme, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

export const DetailsHostelComponent = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = route.params?.data;
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView style={{padding: 16, marginTop: 8}}>
      <Image
        source={require('../../../assets/images/logo_defensa_civil_ultimate.png')}
        resizeMode="contain"
        style={{
          width: 350,
          alignSelf: 'center',
          marginTop: -22,
        }}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          color: isDarkMode ? 'white' : 'black',
          marginTop: -12,
        }}>
        {data.edificio} - {data.codigo}
      </Text>
      <Text
        style={{
          fontSize: 16,
          alignSelf: 'center',
          fontWeight: '500',
          color: isDarkMode ? 'white' : 'black',
          marginTop: 12,
        }}>
        Ciudad - {data.ciudad}
      </Text>
      <Text
        style={{
          marginTop: 14,
          borderBottomWidth: 3,
          borderBottomColor: isDarkMode ? '#FA822F' : '#086B9D',
          color: isDarkMode ? 'white' : 'black',
          fontSize: 18,
        }}>
        <Text style={{fontWeight: 'bold'}}>Coordinador:</Text>{' '}
        {data.coordinador}
      </Text>
      <Text
        style={{
          marginTop: 14,
          borderBottomWidth: 3,
          borderBottomColor: isDarkMode ? '#FA822F' : '#086B9D',
          color: isDarkMode ? 'white' : 'black',
          fontSize: 18,
        }}>
        <Text style={{fontWeight: 'bold'}}>Telefono:</Text> {data.telefono}
      </Text>

      {data.capacidad && (
        <Text
          style={{
            marginTop: 14,
            borderBottomWidth: 3,
            borderBottomColor: isDarkMode ? '#FA822F' : '#086B9D',
            color: isDarkMode ? 'white' : 'black',
            fontSize: 18,
          }}>
          <Text style={{fontWeight: 'bold'}}>Capacidad:</Text> {data.capacidad}
        </Text>
      )}
      <Button
        mode="contained"
        buttonColor={isDarkMode ? '#FA822F' : '#086B9D'}
        style={{marginTop: 15}}
        icon={'chevron-left'}
        onPress={() => {
          navigation.navigate('hostels');
        }}>
        Atras
      </Button>
    </ScrollView>
  );
};
