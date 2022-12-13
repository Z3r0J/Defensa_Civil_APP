import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView, useColorScheme, View} from 'react-native';
import {Button, Card, Paragraph, Title} from 'react-native-paper';

export const DetailsSituationComponent = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = route.params?.data;
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView>
      <Card>
        <Card.Cover source={{uri: data.foto}} resizeMode="contain" />
        <Card.Content>
          <Title>{data.titulo}</Title>
          <Paragraph>{data.descripcion}</Paragraph>
          <Button
            mode="contained"
            buttonColor={isDarkMode ? '#FA822F' : '#086B9D'}
            style={{marginTop: 15}}
            icon={'chevron-left'}
            onPress={() => {
              navigation.navigate('myreport');
            }}>
            Atras
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};
