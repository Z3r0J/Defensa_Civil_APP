import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, Image, useColorScheme, Alert} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import {Volunteer} from '../../services/class/VolunteerClass';
import {postNewVolunteer} from '../../services/postServices';

export const VolunteerFormComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [volunteer, setVolunteer] = useState<Volunteer>(new Volunteer());
  const navigate = useNavigation();

  const verify = () => {
    if (
      volunteer?.Email === '' ||
      volunteer?.Documents === '' ||
      volunteer?.LastName === '' ||
      volunteer?.Name === '' ||
      volunteer?.Password === '' ||
      volunteer?.Phone === ''
    ) {
      return false;
    }
    return true;
  };

  const AddVolunteer = async () => {
    const isComplete = verify();

    if (isComplete) {
      return await postNewVolunteer(volunteer)
        .then(r => {
          if (r.exito) {
            ClearForm();
            Alert.alert('Registrado Correctamente', r.mensaje);
            return navigate.navigate('login');
          }
          return Alert.alert('Error', r.mensaje);
        })
        .catch(e => {
          return Alert.alert('Error', e);
        });
    }
    return Alert.alert(
      'Datos Incompletos',
      'Debes completar todos los datos para poder registrarte',
    );
  };

  const ClearForm = () => {
    setVolunteer(new Volunteer());
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
            style={{textAlign: 'center', marginBottom: 9}}>
            Registro de Voluntarios
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
          <Text variant="labelLarge">Nombre: </Text>
          <TextInput
            placeholder="Nombre"
            mode="outlined"
            value={volunteer.Name}
            onChangeText={e => {
              setVolunteer({...volunteer, Name: e});
            }}
          />
          <Text variant="labelLarge">Apellido: </Text>
          <TextInput
            placeholder="Apellido"
            mode="outlined"
            value={volunteer.LastName}
            onChangeText={e => {
              setVolunteer({...volunteer, LastName: e});
            }}
          />
          <Text variant="labelLarge">Correo: </Text>
          <TextInput
            placeholder="Correo"
            value={volunteer.Email}
            mode="outlined"
            onChangeText={e => {
              setVolunteer({...volunteer, Email: e});
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
          <Text variant="labelLarge">Telefono: </Text>
          <TextInput
            placeholder="Telefono"
            value={volunteer.Phone}
            mode="outlined"
            onChangeText={e => {
              setVolunteer({...volunteer, Phone: e});
            }}
          />
          <Button
            mode="contained"
            buttonColor={isDarkMode ? '#FA822F' : '#086B9D'}
            style={{marginTop: 15}}
            icon={'account-check-outline'}
            onPress={async () => {
              await AddVolunteer();
            }}>
            Registrarme
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};
