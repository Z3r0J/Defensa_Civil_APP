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
import {ReportSituationComponent} from '../situation/ReportSituationComponent';
import {AboutUsComponent} from '../AboutUs/AboutUsComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
            options={{
              title: 'Inicio',
              drawerIcon: () => (
                <Icon
                  name="home-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="stories"
            component={HistoyComponent}
            options={{
              title: 'Historia',
              drawerIcon: () => (
                <Icon
                  name="reader-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="services"
            component={ServicesComponent}
            options={{
              title: 'Servicios',
              drawerIcon: () => (
                <Icon
                  name="list-circle-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="news"
            component={NewsComponent}
            options={{
              title: 'Noticias',
              drawerIcon: () => (
                <Icon
                  name="newspaper-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
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
            options={{
              title: 'Albergues',
              drawerIcon: () => (
                <MaterialIcon
                  name="warehouse"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
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
            options={{
              title: 'Videos',
              drawerIcon: () => (
                <Icon
                  name="videocam-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="maps"
            component={RefugeesMapComponent}
            options={{
              title: 'Mapa',
              drawerIcon: () => (
                <Icon
                  name="location-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="prevent"
            component={MensuaresComponent}
            options={{
              title: 'Medidas Preventivas',
              drawerIcon: () => (
                <Icon
                  name="warning-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
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
            options={{
              title: 'Miembros',
              drawerIcon: () => (
                <Icon
                  name="person-circle-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="beavolunteer"
            component={VolunteerFormComponent}
            options={{
              title: 'Quiero ser voluntario',
              drawerIcon: () => (
                <Icon
                  name="people-circle-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="aboutus"
            component={AboutUsComponent}
            options={{
              title: 'Acerca de',
              drawerIcon: () => (
                <Icon
                  name="information-circle-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="login"
            component={LoginComponent}
            options={{
              title: 'Iniciar Sesión',
              drawerIcon: () => (
                <Icon
                  name="log-in-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />
        </>
      )}

      {auth.isAuthenticated && (
        <>
          <Drawer.Screen
            name="name"
            component={NewsComponent}
            options={{
              title: 'Noticias',
              drawerIcon: () => (
                <Icon
                  name="newspaper-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
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
            component={ReportSituationComponent}
            options={{
              title: 'Reportar Situación',
              drawerIcon: () => (
                <Icon
                  name="clipboard-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="myreport"
            component={MySituationComponent}
            options={{
              title: 'Mis Situaciones',
              drawerIcon: () => (
                <Icon
                  name="flag-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
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
            options={{
              title: 'Mapa de Situaciones',
              drawerIcon: () => (
                <Icon
                  name="location-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="changepass"
            component={ChangePasswordComponent}
            options={{
              title: 'Cambiar Contraseña',
              drawerIcon: () => (
                <Icon
                  name="lock-closed-outline"
                  color={isDarkMode ? '#FA822F' : '#086B9D'}
                  size={18}
                />
              ),
            }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default NavigationDrawerComponent;
