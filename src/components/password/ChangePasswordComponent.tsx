import React, {useState} from 'react';
import {ScrollView, Image, useColorScheme, Alert} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import {useGeneralContext} from '../../contexts/GeneralContext';
import {ChangePWD} from '../../services/class/ChangePasswordClass';
import {postChangePWD} from '../../services/postServices';

export const ChangePasswordComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const context = useGeneralContext();
  const [changePassword, setChangePassword] = useState<ChangePWD>({
    token: context.token,
    LastPassword: '',
    NewPassword: '',
  });
  const verify = () => {
    if (
      changePassword?.NewPassword === '' ||
      changePassword?.LastPassword === ''
    ) {
      return false;
    }
    return true;
  };

  const ChangePass = async () => {
    const isComplete = verify();

    if (isComplete) {
      return await postChangePWD(changePassword)
        .then(cp => {
          ClearForm();
          cp.exito
            ? Alert.alert('Cambio de Contraseña', cp.mensaje)
            : Alert.alert('Error', cp.mensaje);
        })
        .catch(e => {
          return Alert.alert('Error', e);
        });
    }
    return Alert.alert(
      'Datos Incompletos',
      'Debes completar todos los datos para poder poner una nueva contraseña',
    );
  };

  const ClearForm = () => {
    setChangePassword(new ChangePWD());
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
            Cambiar Clave
          </Text>
          <Text variant="labelLarge">Clave Actual: </Text>
          <TextInput
            placeholder="Clave"
            mode="outlined"
            value={changePassword.LastPassword}
            secureTextEntry
            textContentType="password"
            onChangeText={e => {
              setChangePassword({...changePassword, LastPassword: e});
            }}
            right={<TextInput.Icon icon="eye" />}
          />
          <Text variant="labelLarge">Clave Nueva: </Text>
          <TextInput
            placeholder="Clave"
            mode="outlined"
            value={changePassword.NewPassword}
            secureTextEntry
            textContentType="password"
            onChangeText={e => {
              setChangePassword({...changePassword, NewPassword: e});
            }}
            right={<TextInput.Icon icon="eye" />}
          />
          <Button
            mode="contained"
            buttonColor={isDarkMode ? '#FA822F' : '#086B9D'}
            style={{marginTop: 15}}
            icon={'account-check-outline'}
            onPress={async () => {
              await ChangePass();
            }}>
            Cambiar Clave
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};
