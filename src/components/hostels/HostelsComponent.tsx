import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import {getRefugees} from '../../services/getServices';

export function HostelsComponent() {
  const [refugees, setRefugees] = useState<any[]>([]);
  const [allRefugees, setAllRefugees] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');
  const isDarkMode = useColorScheme() === 'dark';
  const navigate = useNavigation();

  useEffect(function () {
    async function getHostels() {
      await getRefugees().then(r => {
        setRefugees(r);
        setAllRefugees(r);
      });
    }

    getHostels();
  }, []);

  function buscar() {
    const newrf = allRefugees.filter(x => x.edificio.includes(search));
    setRefugees(newrf);
  }

  return (
    <ScrollView>
      <View>
        <TextInput
          placeholder={'Buscar Refugio'}
          mode="outlined"
          style={{
            marginTop: 9,
            marginBottom: 10,
            marginStart: 10,
            marginEnd: 10,
          }}
          onChangeText={e => {
            setSearch(e);
          }}
        />
        <Button
          mode="contained"
          onPress={() => {
            buscar();
          }}
          buttonColor={isDarkMode ? '#FA822F' : '#086B9D'}
          style={{marginBottom: 8, width: '90%', alignSelf: 'center'}}>
          Buscar
        </Button>
      </View>
      {refugees &&
        refugees.map(r => {
          return (
            <View style={{marginStart: 5, marginEnd: 5}}>
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
                  navigate.navigate('refugeeDetails', {data: r});
                }}>
                {r.edificio}
              </Text>
            </View>
          );
        })}
    </ScrollView>
  );
}
