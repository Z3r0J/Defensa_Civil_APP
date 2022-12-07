import React from 'react';
import {Image, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export const DrawerCustomComponent = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{marginBottom: 0}}>
          <Image
            source={require('../../../assets/images/logo_defensa_civil_ultimate.png')}
            resizeMode="contain"
            style={{width: '100%'}}></Image>
        </View>
        <View style={{flexDirection: 'column', paddingTop: 20}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
