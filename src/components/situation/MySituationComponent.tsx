import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, ScrollView, useColorScheme, View} from 'react-native';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import {useGeneralContext} from '../../contexts/GeneralContext';
import {getSituation} from '../../services/postServices';

export const MySituationComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const context = useGeneralContext();
  const [mySituation, setSituation] = useState<any[]>([]);
  const navigate = useNavigation();

  const focusEffect = useCallback(() => {
    const getSituationAsync = async () => {
      await getSituation(context.token).then(s =>
        s.exito ? setSituation(s.datos) : Alert.alert('Error', s.mensaje),
      );
    };

    getSituationAsync();
  }, []);

  useFocusEffect(focusEffect);

  return (
    <ScrollView>
      {mySituation &&
        mySituation.map(ms => {
          return (
            <View key={ms.id}>
              <Card
                style={{
                  margin: 10,
                  borderBottomWidth: 4,
                  borderBottomColor: isDarkMode ? '#FA822F' : '#086B9D',
                }}>
                <Card.Cover source={{uri: ms.foto}} />
                <Card.Content>
                  <Title
                    style={{
                      fontSize: 23,
                      fontWeight: 'bold',
                    }}>
                    {ms.titulo}
                  </Title>
                  <Button
                    icon="chevron-right"
                    mode="contained"
                    buttonColor={isDarkMode ? '#FA822F' : '#086B9D'}
                    onPress={() => {
                      navigate.navigate('myreportdetails', {data: ms});
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
};
