import React, {useEffect} from 'react';
import {Button, Dimensions, Image, Text, View} from 'react-native';
import {useGeneralContext} from '../../contexts/GeneralContext';
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-reanimated';

export const HomeComponent = () => {
  const context = useGeneralContext();
  const {width} = Dimensions.get('window');
  return (
    <View>
      <Carousel
        data={context.civilAction}
        renderItem={({item}: any) => {
          const image = item.image;
          return (
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                height: '95%',
                width: '80%',
                marginEnd: 9,
              }}>
              <Image
                source={{uri: image}}
                style={{width: 390, height: 300, resizeMode: 'cover'}}
              />
              <Text
                style={{
                  color: '#222',
                  fontSize: 28,
                  fontWeight: 'bold',
                  paddingTop: 20,
                  paddingStart: 18,
                  width: '58%',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: '#222',
                  fontSize: 17,
                  width: '65%',
                  textAlign: 'auto',
                  paddingTop: 6,
                  paddingStart: 17,
                  marginBottom: 10,
                }}>
                {item.description}
              </Text>
            </View>
          );
        }}
        width={600}
        height={700}
      />
    </View>
  );
};
