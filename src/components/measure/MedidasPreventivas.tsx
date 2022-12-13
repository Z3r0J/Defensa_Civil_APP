import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import {getMeasure} from '../../services/getServices';

export function MensuaresComponent() {
  const [medidas, setMedidas] = useState<any[]>([]);
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  useEffect(function () {
    async function getMensuares() {
      await getMeasure().then(r => {
        setMedidas(r);
      });
    }

    getMensuares();
  }, []);

  return (
    <ScrollView>
      {medidas &&
        medidas.map(r => {
          return (
            <View style={{marginStart: 5, marginEnd: 5}} key={r.id}>
              <Text
                style={{
                  marginTop: 2,
                  marginBottom: 10,
                  borderBottomWidth: 3,
                  borderBottomColor: isDarkMode ? '#FA822F' : '#086B9D',
                  color: isDarkMode ? 'white' : 'black',
                  fontSize: 18,
                }}
                onPress={() => {
                  navigation.navigate('detailsprevent', {data: r});
                }}>
                {r.titulo}
              </Text>
            </View>
          );
        })}
    </ScrollView>
  );
}
