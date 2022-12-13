import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

export const DetailsMeasures = () => {
  const route = useRoute();
  const data = route.params?.data;
  return (
    <ScrollView>
      <Card>
        <Card.Cover source={{uri: data.foto}} resizeMode="contain" />
        <Card.Content>
          <Title
            style={{
              color: '#222',
              fontSize: 28,
              fontWeight: 'bold',
            }}>
            {data.titulo}
          </Title>
          <Paragraph>{data.descripcion}</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};
