import {Link} from '@react-navigation/native';
import React from 'react';
import {Linking, ScrollView, useColorScheme} from 'react-native';
import {Button, Card, Text, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Awesome from 'react-native-vector-icons/FontAwesome';

export const AboutUsComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView>
      <Card style={{marginBottom: 15}}>
        <Card.Cover
          source={require('../../../assets/images/85190332.jpg')}
          resizeMode="contain"
        />
        <Card.Content>
          <Title>Jean Carlos Reyes - 20210546</Title>
          <Text>Lider del Equipo</Text>
          <Button
            mode="outlined"
            style={{width: 330, marginTop: 8}}
            onPress={() => {
              Linking.openURL('tel:8299350913');
            }}
            textColor={isDarkMode ? '#FA822F' : '#086B9D'}>
            <Awesome name="phone" size={13}></Awesome> {'   '}+1 829-935-0913
          </Button>

          <Button
            mode="outlined"
            style={{width: 330, marginTop: 8}}
            onPress={() => {
              Linking.openURL('https://t.me/NiggaRich');
            }}
            textColor={isDarkMode ? '#FA822F' : '#086B9D'}>
            <Awesome name="telegram" size={13}></Awesome> {'   '}Telegram
          </Button>
        </Card.Content>
      </Card>

      <Card style={{marginBottom: 15}}>
        <Card.Cover
          source={require('../../../assets/images/photo_2022-12-13_18-40-54.jpg')}
          resizeMode="contain"
        />
        <Card.Content>
          <Title>Yolainee Joseli Cesar Portorreal - 20198298</Title>
          <Text>Integrante del Equipo</Text>
          <Button
            mode="outlined"
            style={{width: 330, marginTop: 8}}
            onPress={() => {
              Linking.openURL('tel:8292856803');
            }}
            textColor={isDarkMode ? '#FA822F' : '#086B9D'}>
            <Awesome name="phone" size={13}></Awesome> {'   '}+1 829-285-6803
          </Button>
          <Button
            mode="outlined"
            style={{width: 330, marginTop: 8}}
            onPress={() => {
              Linking.openURL('https://t.me/yolaineecesar14');
            }}
            textColor={isDarkMode ? '#FA822F' : '#086B9D'}>
            <Awesome name="telegram" size={13}></Awesome> {'   '}Telegram
          </Button>
        </Card.Content>
      </Card>

      <Card>
        <Card.Cover
          source={require('../../../assets/images/photo_2022-12-13_18-40-37.jpg')}
          resizeMode="contain"
        />
        <Card.Content>
          <Title>Juan Niemen - 20198547</Title>
          <Text>Integrante del Equipo</Text>
          <Button
            mode="outlined"
            style={{width: 330, marginTop: 8}}
            onPress={() => {
              Linking.openURL('tel:8092224987');
            }}
            textColor={isDarkMode ? '#FA822F' : '#086B9D'}>
            <Awesome name="phone" size={13}></Awesome> {'   '}+1 809-222-4987
          </Button>
          <Button
            mode="outlined"
            style={{width: 330, marginTop: 8}}
            onPress={() => {
              Linking.openURL('https://t.me/juannp29');
            }}
            textColor={isDarkMode ? '#FA822F' : '#086B9D'}>
            <Awesome name="telegram" size={13}></Awesome> {'   '}Telegram
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};
