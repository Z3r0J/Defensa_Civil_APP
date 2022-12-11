import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card, Paragraph, Title} from 'react-native-paper';
import {getServicesAsync} from '../../services/getServices';

export function ServicesComponent() {
  const [Service, setServiceAsync] = useState<any[]>([]);

  useEffect(function () {
    async function getHostels() {
      await getServicesAsync().then(r => {
        setServiceAsync(r);
      });
    }

    getHostels();
  }, []);

  return (
    <ScrollView>
      {Service &&
        Service.map(r => {
          return (
            <View>
              <Card style={{
                    margin: 10
              }}>
                <Card.Cover source={{uri: r.foto}}/>
                <Card.Content>
                    <Title style={{
                        fontSize: 23,
                        fontWeight: 'bold'
                        
                    }}>{r.nombre}</Title>
                    <Paragraph>{r.descripcion}</Paragraph>
                </Card.Content>
              </Card>
            </View>
          );
        })}
    </ScrollView>
  );
}