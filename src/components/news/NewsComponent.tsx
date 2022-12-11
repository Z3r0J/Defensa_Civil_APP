import React, {useEffect, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import {getNewsAsync} from '../../services/getServices';

export function NewsComponent() {
  const [News, setNewsAsync] = useState<any[]>([]);
  const isDarkMode = useColorScheme() === 'dark';
  
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
                    margin: 10,
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
                  <Button icon="chevron-right" mode="contained" buttonColor={isDarkMode ? '#FA822F' : '#086B9D'} style={{
                    
                  }}>Ver más</Button>
                </Card.Content>
              </Card>
            </View>
          );
        })}
    </ScrollView>
  );
}