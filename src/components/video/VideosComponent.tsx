import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {getVideosAsync} from '../../services/getServices';
import YoutubePlayer from 'react-native-youtube-iframe';

export const VideosComponent = () => {
  const [videos, setVideos] = useState<[]>([]);

  useEffect(() => {
    const getVideos = async () => {
      await getVideosAsync().then(r => setVideos(r));
    };

    getVideos();
  }, []);

  return (
    <ScrollView>
      {videos &&
        videos.map(v => {
          return (
            <View
              style={{
                padding: 5,
                borderRadius: 5,
                backgroundColor: 'orange',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                margin: 8,
              }}>
              <YoutubePlayer height={300} videoId={v?.link} key={v?.id} />
              <Text style={{color: 'black'}}>{v?.titulo}</Text>
              {v?.descripcion && (
                <Text style={{color: 'black'}}>{v?.descripcion}</Text>
              )}
            </View>
          );
        })}
    </ScrollView>
  );
};
