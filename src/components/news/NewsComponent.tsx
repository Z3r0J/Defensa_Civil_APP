import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card, Paragraph, Title} from 'react-native-paper';
import {getNewsAsync} from '../../services/getServices';

export function NewsComponent() {
  const [News, setNewsAsync] = useState<any[]>([]);

  useEffect(function () {
    async function getNews() {
      await getNewsAsync().then(r => {
        setNewsAsync(r);
      });
    }

    getNews();
  }, []);

  return (
    <ScrollView>
      {News &&
        News.map(r => {
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
                    }}>{r.titulo}</Title>
                    <Paragraph style={{
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>- {r.fecha} -</Paragraph>
                    <Paragraph>{r.contenido}</Paragraph>
                </Card.Content>
              </Card>
            </View>
          );
        })}
    </ScrollView>
  );
}