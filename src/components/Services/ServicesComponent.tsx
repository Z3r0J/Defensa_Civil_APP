import React, {useEffect, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card, Paragraph, Title} from 'react-native-paper';
import {getServicesAsync} from '../../services/getServices';

export function ServicesComponent() {
  const [Service, setServiceAsync] = useState<any[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(function () {
    async function getServices() {
      await getServicesAsync().then(r => {
        setServiceAsync(r);
      });
    }

    getServices();
  }, []);

  return (
    <ScrollView>
      {Service &&
        Service.map(r => {
          return (
            <View>
              <Card
                style={{
                  margin: 10,
                  borderBottomWidth: 4,
                  borderBottomColor: isDarkMode ? '#FA822F' : '#086B9D',
                }}>
                <Card.Cover source={{uri: r.foto}} />
                <Card.Content>
                  <Title
                    style={{
                      fontSize: 23,
                      fontWeight: 'bold',
                    }}>
                    {r.nombre}
                  </Title>
                  <Paragraph>{r.descripcion}</Paragraph>
                </Card.Content>
              </Card>
            </View>
          );
        })}
    </ScrollView>
  );
}
