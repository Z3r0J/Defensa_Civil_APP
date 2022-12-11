import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, useColorScheme, View, ScrollView} from 'react-native';
import {Paragraph, Text, Title} from 'react-native-paper';

export const NewDetailsComponent = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = route.params?.data;
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
        borderBottomWidth: 4,
        borderBottomColor: isDarkMode ? '#FA822F' : '#086B9D',
      }}>
      <Image
        source={{uri: data.foto}}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '50%',
        }}
      />
      <ScrollView style={{padding: 6}}>
        <Title
          style={{
            fontSize: 23,
            fontWeight: 'bold',
          }}>
          {data.titulo}
        </Title>
        <Paragraph
          style={{
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          - {data.fecha} -
        </Paragraph>
        <Paragraph>{data.contenido}</Paragraph>
      </ScrollView>
    </View>
  );
};
