import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useColorScheme} from 'react-native';
import {HomeComponent} from '../home/HomeComponent';
import {DrawerCustomComponent} from './DrawerCustomComponent';
import {useGeneralContext} from '../../contexts/GeneralContext';
import {LoadingComponent} from '../loading/LoadingComponent';

const Drawer = createDrawerNavigator();
const NavigationDrawerComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const auth = useGeneralContext();
  return (
    <Drawer.Navigator
      screenOptions={{headerTintColor: isDarkMode ? 'white' : 'black'}}
      drawerContent={props => {
        return <DrawerCustomComponent {...props} />;
      }}>
      {!auth.isAuthenticated && (
        <>
          <Drawer.Screen
            name="home"
            component={HomeComponent}
            options={{title: 'Inicio'}}
          />
          <Drawer.Screen
            name="stories"
            component={LoadingComponent}
            options={{title: 'Historia'}}
          />

          <Drawer.Screen
            name="services"
            component={HomeComponent}
            options={{title: 'Servicios'}}
          />
          <Drawer.Screen
            name="news"
            component={HomeComponent}
            options={{title: 'Noticias'}}
          />
          <Drawer.Screen
            name="maps"
            component={HomeComponent}
            options={{title: 'Mapa'}}
          />

          <Drawer.Screen
            name="prevent"
            component={HomeComponent}
            options={{title: 'Medidas Preventivas'}}
          />

          <Drawer.Screen
            name="members"
            component={HomeComponent}
            options={{title: 'Miembros'}}
          />

          <Drawer.Screen
            name="beavolunteer"
            component={HomeComponent}
            options={{title: 'Quiero ser voluntario'}}
          />

          <Drawer.Screen
            name="aboutus"
            component={HomeComponent}
            options={{title: 'Acerca de'}}
          />

          <Drawer.Screen
            name="login"
            component={HomeComponent}
            options={{title: 'Iniciar Sesión'}}
          />
        </>
      )}

      {auth.isAuthenticated && (
        <>
          <Drawer.Screen
            name="name"
            component={HomeComponent}
            options={{title: 'Noticias'}}
          />
          <Drawer.Screen
            name="report"
            component={HomeComponent}
            options={{title: 'Reportar Situación'}}
          />
          <Drawer.Screen
            name="myreport"
            component={HomeComponent}
            options={{title: 'Mis Situaciones'}}
          />
          <Drawer.Screen
            name="mapreport"
            component={HomeComponent}
            options={{title: 'Mapa de Situaciones'}}
          />
          <Drawer.Screen
            name="changepass"
            component={HomeComponent}
            options={{title: 'Cambiar Contraseña'}}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default NavigationDrawerComponent;
