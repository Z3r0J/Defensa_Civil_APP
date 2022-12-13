import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useGeneralContext} from '../../contexts/GeneralContext';
import {getSituation} from '../../services/postServices';

export const SituationMapsComponent = () => {
  const context = useGeneralContext();
  const [mySituation, setSituation] = useState<any[]>([]);
  useEffect(() => {
    const getSituationAsync = async () => {
      await getSituation(context.token).then(s =>
        s.exito ? setSituation(s.datos) : Alert.alert('Error', s.mensaje),
      );
    };

    getSituationAsync();
  }, []);

  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 18.484779784091764,
          longitude: -69.93391541708709,
          latitudeDelta: 4.425,
          longitudeDelta: 3.552,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}>
        {mySituation &&
          mySituation.map(ms => {
            return (
              <Marker
                coordinate={{
                  latitude: Number(ms.latitud),
                  longitude: Number(ms.longitud),
                }}
                title={ms.titulo}
                description={ms.descripcion}
                key={ms.id}
              />
            );
          })}
      </MapView>
    </View>
  );
};
