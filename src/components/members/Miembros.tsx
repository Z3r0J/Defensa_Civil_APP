import React, {useEffect, useState} from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card, Title} from 'react-native-paper';
import {getMembers} from '../../services/getServices';

export function MembersComponent() {
  const [miembros, setMiembros] = useState<any[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(function () {
    async function getMiembros() {
      await getMembers().then(m => {
        setMiembros(m);
      });
    }

    getMiembros();
  }, []);

  return (
    <ScrollView>
      {miembros &&
        miembros.map(m => {
          return (
            <Card
              style={{marginStart: 5, marginEnd: 5, marginBottom: 10}}
              key={m.id}>
              <Card.Cover source={{uri: m.foto}} />
              <Card.Content>
                <Title
                  style={{
                    marginTop: 2,
                    color: 'black',
                  }}>
                  {m.nombre}
                </Title>
                <Text style={{color: 'black'}}>{m.cargo}</Text>
              </Card.Content>
            </Card>
          );
        })}
    </ScrollView>
  );
}
