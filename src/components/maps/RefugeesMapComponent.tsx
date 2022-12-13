import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {getRefugees} from '../../services/getServices';

export const RefugeesMapComponent = () => {
  const [refugees, setRefugees] = useState<any[]>([]);

  useEffect(() => {
    const getRefugeesAsync = async () => {
      await getRefugees().then(r => {
        console.log(r);
        setRefugees(r);
      });
    };
    getRefugeesAsync();
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
        {refugees &&
          refugees.map(rf => {
            return (
              <Marker
                coordinate={{
                  latitude: Number(rf.lng),
                  longitude: Number(rf.lat),
                }}
                title={`${rf.edificio} - ${rf.ciudad}`}
                description={`${rf.capacidad && rf.capacidad}`}
                key={rf.id}
              />
            );
          })}
      </MapView>
    </View>
  );
};
