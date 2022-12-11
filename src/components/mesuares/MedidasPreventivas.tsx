import React, {useEffect, useState} from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {getMeasure} from '../../services/getServices';


export function MensuaresComponent() {
    const [medidas, setMedidas] = useState<any[]>([]);
   
    const [search, setSearch] = useState<string>('');
    const isDarkMode = useColorScheme() === 'dark';
  
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
          <View>
            <Text
              placeholder={'Medidas Preventivas'}
              mode="outlined"
              style={{
                marginTop: 9,
                marginStart: 10,
                marginEnd: 10,
              }}
              onChangeText={e => {
                setSearch(e);
              }}
            />

{medidas &&
        medidas.map(r => {
          return (
            <View style={{marginStart: 5, marginEnd: 5}}>
              <Text
                style={{
                  marginTop: 2,
                  marginBottom: 10,
                  color: isDarkMode ? 'white' : 'black',
                }}>
                {r.titulo}
              </Text>
            </View>
          );
        })}
    </ScrollView>
  );
}