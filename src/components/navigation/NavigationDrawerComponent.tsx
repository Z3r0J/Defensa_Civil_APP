import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useColorScheme} from 'react-native';
import {HomeComponent} from '../home/HomeComponent';
import {DrawerCustomComponent} from './DrawerCustomComponent';
import {useGeneralContext} from '../../contexts/GeneralContext';
import {VideosComponent} from '../video/VideosComponent';
import {HostelsComponent} from '../hostels/HostelsComponent';
import {DetailsHostelComponent} from '../hostels/DetailsHostelComponent';
import {HistoyComponent} from '../history/HistoryComponent';
import {ServicesComponent} from '../Services/ServicesComponent';
import {NewsComponent} from '../news/NewsComponent';
import {NewDetailsComponent} from '../news/NewDetailsComponent';
import {MensuaresComponent} from '../measure/MedidasPreventivas';
import {MembersComponent} from '../members/Miembros';
import {RefugeesMapComponent} from '../maps/RefugeesMapComponent';
import {DetailsMeasures} from '../measure/DetailsMeasures';
import {VolunteerFormComponent} from '../volunteer/VolunteerFormComponent';
import {LoginComponent} from '../login/LoginComponent';
import {Button} from 'react-native-paper';
import {ChangePasswordComponent} from '../password/ChangePasswordComponent';
import {SituationMapsComponent} from '../maps/SituationMapsComponent';
import {MySituationComponent} from '../situation/MySituationComponent';
import {DetailsSituationComponent} from '../situation/DetailsSituationComponent';

const Drawer = createDrawerNavigator();
const NavigationDrawerComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const auth = useGeneralContext();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: isDarkMode ? 'white' : 'black',
        headerRight: () =>
          auth.isAuthenticated && (
            <Button
              mode="contained"
              icon={'power'}
              buttonColor={isDarkMode ? '#FA822F' : '#086B9D'}
              style={{width: 16, marginEnd: 6}}
              onPress={() => auth.closeSession()}>
              {''}
            </Button>
          ),
      }}
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
            component={HistoyComponent}
            options={{title: 'Historia'}}
          />

          <Drawer.Screen
            name="services"
            component={ServicesComponent}
            options={{title: 'Servicios'}}
          />
          <Drawer.Screen
            name="news"
            component={NewsComponent}
            options={{title: 'Noticias'}}
          />
          <Drawer.Screen
            name="newDetails"
            component={NewDetailsComponent}
            options={{
              title: 'Detalles Noticias',
              drawerItemStyle: {display: 'none'},
            }}
          />
          <Drawer.Screen
            name="hostels"
            component={HostelsComponent}
            options={{title: 'Albergues'}}
          />
          <Drawer.Screen
            name="refugeeDetails"
            component={DetailsHostelComponent}
            options={{
              title: 'Detalles Albergues',
              drawerItemStyle: {display: 'none'},
            }}
          />
          <Drawer.Screen
            name="video"
            component={VideosComponent}
            options={{title: 'Videos'}}
          />
          <Drawer.Screen
            name="maps"
            component={RefugeesMapComponent}
            options={{title: 'Mapa'}}
          />

          <Drawer.Screen
            name="prevent"
            component={MensuaresComponent}
            options={{title: 'Medidas Preventivas'}}
          />

          <Drawer.Screen
            name="detailsprevent"
            component={DetailsMeasures}
            options={{
              title: 'Detalles de Medidas Preventivas',
              drawerItemStyle: {display: 'none'},
            }}
          />

          <Drawer.Screen
            name="members"
            component={MembersComponent}
            options={{title: 'Miembros'}}
          />

          <Drawer.Screen
            name="beavolunteer"
            component={VolunteerFormComponent}
            options={{title: 'Quiero ser voluntario'}}
          />

          <Drawer.Screen
            name="aboutus"
            component={HomeComponent}
            options={{title: 'Acerca de'}}
          />

          <Drawer.Screen
            name="login"
            component={LoginComponent}
            options={{title: 'Iniciar Sesión'}}
          />
        </>
      )}

      {auth.isAuthenticated && (
        <>
          <Drawer.Screen
            name="name"
            component={NewsComponent}
            options={{title: 'Noticias'}}
          />
          <Drawer.Screen
            name="newDetails"
            component={NewDetailsComponent}
            options={{
              title: 'Detalles Noticias',
              drawerItemStyle: {display: 'none'},
            }}
          />
          <Drawer.Screen
            name="report"
            component={HomeComponent}
            options={{title: 'Reportar Situación'}}
          />
          <Drawer.Screen
            name="myreport"
            component={MySituationComponent}
            options={{title: 'Mis Situaciones'}}
          />
          <Drawer.Screen
            name="myreportdetails"
            component={DetailsSituationComponent}
            options={{
              title: 'Detalles de Mis Situaciones',
              drawerItemStyle: {display: 'none'},
            }}
          />
          <Drawer.Screen
            name="mapreport"
            component={SituationMapsComponent}
            options={{title: 'Mapa de Situaciones'}}
          />
          <Drawer.Screen
            name="changepass"
            component={ChangePasswordComponent}
            options={{title: 'Cambiar Contraseña'}}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default NavigationDrawerComponent;
