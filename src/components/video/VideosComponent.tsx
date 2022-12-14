import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, Text, View, useColorScheme} from 'react-native';
import {getVideosAsync} from '../../services/getServices';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Card} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';

export const VideosComponent = () => {
  const [videos, setVideos] = useState<[]>([]);
  const isDarkMode = useColorScheme() === 'dark';
  const focusEffect = useCallback(() => {
    const getVideos = async () => {
      await getVideosAsync().then(r => setVideos(r));
    };

    getVideos();
  }, []);

  useFocusEffect(focusEffect);

  return (
    <ScrollView>
      {videos &&
        videos.map(v => {
          return (
            <Card
              style={{
                padding: 5,
                borderRadius: 5,
                backgroundColor: 'white',
                borderBottomWidth: 2,
                borderBottomColor: isDarkMode ? '#FA822F' : '#086B9D',
                margin: 8,
              }}
              key={v.id}>
              <Card.Content>
                <YoutubePlayer height={300} videoId={v?.link} key={v?.id} />
                <Text
                  style={{
                    color: isDarkMode ? '#FA822F' : '#086B9D',
                    width: '100%',
                    fontSize: 18,
                    margin: 6,
                    fontWeight: '700',
                  }}>
                  {v?.titulo}
                </Text>
                {v?.descripcion && (
                  <Text
                    style={{
                      color: isDarkMode ? '#FA822F' : '#086B9D',
                      margin: 5,
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    {v?.descripcion}
                  </Text>
                )}
              </Card.Content>
            </Card>
          );
        })}
    </ScrollView>
  );
};
