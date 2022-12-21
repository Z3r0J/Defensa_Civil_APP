import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {useColorScheme, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import {getNewsAsync} from '../../services/getServices';

export function NewsComponent() {
  const [News, setNewsAsync] = useState<any[]>([]);
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  const focusEffect = useCallback(function () {
    async function getNews() {
      await getNewsAsync().then(r => {
        setNewsAsync(r);
      });
    }

    getNews();
  }, []);

  useFocusEffect(focusEffect);

  return (
    <ScrollView>
      {News &&
        News.map(r => {
          return (
            <View key={r.id}>
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
                    {r.titulo}
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    - {r.fecha} -
                  </Paragraph>
                  <Button
                    icon="chevron-right"
                    mode="contained"
                    buttonColor={isDarkMode ? '#FA822F' : '#086B9D'}
                    onPress={() => {
                      navigation.navigate('newDetails', {data: r});
                    }}>
                    Ver más
                  </Button>
                </Card.Content>
              </Card>
            </View>
          );
        })}
    </ScrollView>
  );
}
