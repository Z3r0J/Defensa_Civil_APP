import React, {useState} from 'react';
import {ScrollView, Image, useColorScheme, Alert} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import {useGeneralContext} from '../../contexts/GeneralContext';
import {Login} from '../../services/class/LoginClass';
import {LoginAsync} from '../../services/postServices';

export const LoginComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [volunteer, setVolunteer] = useState<Login>(new Login());
  const context = useGeneralContext();
  const verify = () => {
    if (volunteer?.Documents === '' || volunteer?.Password === '') {
      return false;
    }
    return true;
  };

  const LoginVolunteer = async () => {
    const isComplete = verify();

    if (isComplete) {
      return await LoginAsync(volunteer)
        .then(l => {
          if (l.exito) {
            ClearForm();
            console.log(l);
            context.changeAuth(l.datos.token);
            return Alert.alert('Logueado Correctamente', l.mensaje);
          }
          return Alert.alert('Error', l.mensaje);
        })
        .catch(e => {
          return Alert.alert('Error', e);
        });
    }
    return Alert.alert(
      'Datos Incompletos',
      'Debes completar todos los datos para poder iniciar sesion',
    );
  };

  const ClearForm = () => {
    setVolunteer(new Login());
  };

  return (
    <ScrollView>
      <Card style={{height: '100%'}}>
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
            style={{textAlign: 'center', marginBottom: 9}}>
            Iniciar Sesion
          </Text>
          <Text variant="labelLarge">Cedula: </Text>
          <TextInput
            placeholder="Cedula"
            mode="outlined"
            value={volunteer.Documents}
            onChangeText={e => {
              setVolunteer({...volunteer, Documents: e});
            }}
          />
          <Text variant="labelLarge">Clave: </Text>
          <TextInput
            placeholder="Clave"
            mode="outlined"
            value={volunteer.Password}
            secureTextEntry
            textContentType="password"
            onChangeText={e => {
              setVolunteer({...volunteer, Password: e});
            }}
            right={<TextInput.Icon icon="eye" />}
          />
          <Button
            mode="contained"
            buttonColor={isDarkMode ? '#FA822F' : '#086B9D'}
            style={{marginTop: 15}}
            icon={'account-check-outline'}
            onPress={async () => {
              await LoginVolunteer();
            }}>
            Loguearme
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};
