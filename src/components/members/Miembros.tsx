import React, {useEffect, useState} from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {getMiembros} from '../../services/getServices';


export function MembersComponent() {
    const [miembros, setMiembros] = useState<any[]>([]);
    const [allMiembros, setAllMiembros] = useState<any[]>([]);
    const [search, setSearch] = useState<string>('');
    const isDarkMode = useColorScheme() === 'dark';
  
    useEffect(function () {
      async function getMembers() {
        await getMiembros().then(m => {
          setMiembros(m);
          setAllMiembros(m);
        });
      }
  
      getMiembros();
    }, []);

    return (
        <ScrollView>
          <View>
            <Text
              placeholder={'Miembros'}
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

{miembros &&
        miembros.map(m => {
          return (
            <View style={{marginStart: 5, marginEnd: 5}}>
              <Text
                style={{
                  marginTop: 2,
                  //marginBottom: 10,
                  color: isDarkMode ? 'white' : 'black',
                }}>
                {m.id}
              </Text>
            </View>
          );
        })}
    </ScrollView>
  );
}