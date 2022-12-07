import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAuthenticatedContext} from '../../contexts/AuthenticatedContext';

export const HomeComponent = () => {
  const changeAuth = useAuthenticatedContext();
  return (
    <View>
      <Text>Home Page</Text>
      <Button
        onPress={() => {
          !changeAuth.isAuthenticated
            ? changeAuth.changeAuth('aaaa')
            : changeAuth.closeSession();
        }}
        title="Probar authentication"
      />
    </View>
  );
};
