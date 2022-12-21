import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {useColorScheme, ScrollView, Image, View, Alert} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useGeneralContext} from '../../contexts/GeneralContext';
import {Report} from '../../services/class/ReportClass';
import {ReportSituation} from '../../services/postServices';

export const ReportSituationComponent = () => {
  const context = useGeneralContext();
  const [situation, setSituation] = useState<Report>({
    description: '',
    latitude: '',
    longitude: '',
    photo: '',
    title: '',
    token: context.token,
  });
  const [newPhoto, setNewPhoto] = useState<boolean>(false);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.front;
  const camera = useRef<Camera>(null);
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const handleSubmit = async () => {
    const isComplete = verify();

    if (isComplete) {
      await ReportSituation(situation)
        .then(s => {
          if (s.exito) {
            setSituation(new Report());
            Alert.alert('Agregada Correctamente', s.mensaje);
<<<<<<< HEAD
            return navigation.navigate('myreport');
          }
          return Alert.alert('Error', s.mensaje);
=======
            navigation.navigate('myreport');
          }
          Alert.alert('Error', s.mensaje);
>>>>>>> 640767d26e59606927e45ed7fa48a4497ae0c09b
        })
        .catch(e => Alert.alert('Error', e));
    }
  };

  const verify = () => {
    if (
      situation.title === '' ||
      situation.photo === '' ||
      situation.description === '' ||
      situation.latitude === '' ||
      situation.longitude === ''
    ) {
      Alert.alert(
        'Datos Incompleto',
        'Debes completar todos los datos para poder reportar una situacion',
      );
      return false;
    }
    if (
      Number(situation.latitude).toString() == 'NaN' ||
      Number(situation.longitude).toString() == 'NaN'
    ) {
      Alert.alert(
        'Datos Incongruentes',
        'La latitud y la longitud no son numeros, por favor inserta los datos correctos.',
      );
      return false;
    }
    return true;
  };

  const handleTakePhoto = async () => {
    await camera.current
      ?.takePhoto({
        flash: 'auto',
        qualityPrioritization: 'balanced',
      })
      .then(res => {
        const url = `file://${res.path}`;

        convertToBlob(url).then(r =>
          convertBlobToBase64(r)?.then(x => {
            setSituation({...situation, photo: x.toString()}),
              Alert.alert('Foto', 'Foto Tomada correctamente');
          }),
        );
      });
  };

  const convertToBlob = async (url: string) =>
    await fetch(url).then(response => {
      return response.blob();
    });

  const convertBlobToBase64 = (blob: any) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise(resolve => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    } catch (error) {}
  };

  return (
    <ScrollView>
      <Card>
        <Card.Content>
          <Image
            source={require('../../../assets/images/logoNuevoDefensa.png')}
            resizeMode="cover"
            style={{
              width: 150,
              height: 150,
              alignSelf: 'center',
            }}
          />
          <Text
            variant="titleLarge"
            style={{textAlign: 'center', marginBottom: 9, fontWeight: 'bold'}}>
            Reportar Situacion
          </Text>
          <Text variant="labelLarge">Titulo: </Text>
          <TextInput
            placeholder="Titulo"
            mode="outlined"
            value={situation.title}
            onChangeText={e => {
              setSituation({...situation, title: e});
            }}
          />
          <Text variant="labelLarge" style={{marginTop: 10}}>
            Descripcion:
          </Text>
          <TextInput
            placeholder="Descripcion"
            mode="outlined"
            multiline={true}
            value={situation.description}
            onChangeText={e => {
              setSituation({...situation, description: e});
            }}
            style={{height: 120}}
          />
          <View style={{flex: 2, flexDirection: 'row', marginTop: 10}}>
            <Text
              variant="labelLarge"
              style={{alignSelf: 'flex-start', width: '75%'}}>
              Foto:
            </Text>
            <Button
              mode="contained"
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setNewPhoto(!newPhoto);
              }}>
              Tomar
            </Button>
          </View>
          {newPhoto && (
            <>
              <Camera
                device={device}
                ref={camera}
                isActive={true}
                style={{
                  width: '100%',
                  height: 300,
                  borderRadius: 8,
                  marginTop: 6,
                }}
                photo={true}
              />
              <Button
                mode="contained"
                buttonColor={isDarkMode ? '#FA822F' : '#086B9D'}
                icon="camera"
                style={{
                  width: 38,
                  borderRadius: 18,
                  alignSelf: 'center',
                  marginTop: -50,
                }}
                onPress={async () => {
                  await handleTakePhoto();
                  setNewPhoto(!newPhoto);
                }}></Button>
            </>
          )}
          <Text variant="labelLarge" style={{marginTop: 10}}>
            Latitud:
          </Text>
          <TextInput
            placeholder="Latitud"
            mode="outlined"
            value={situation.latitude}
            onChangeText={e => {
              setSituation({...situation, latitude: e});
            }}
          />
          <Text variant="labelLarge" style={{marginTop: 10}}>
            Longitud:
          </Text>
          <TextInput
            placeholder="Longitud"
            mode="outlined"
            value={situation.longitude}
            onChangeText={e => {
              setSituation({...situation, longitude: e});
            }}
          />
          <Button
            mode="contained"
            buttonColor={isDarkMode ? '#FA822F' : '#086B9D'}
            style={{marginTop: 15}}
            icon={'account-check-outline'}
            onPress={async () => {
              await handleSubmit();
            }}>
            Registrar
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};
