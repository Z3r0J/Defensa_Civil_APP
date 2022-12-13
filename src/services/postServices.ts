import {ChangePWD} from './class/ChangePasswordClass';
import {Volunteer} from './class/VolunteerClass';
import {Login} from './class/LoginClass';
import {apiUrl} from '../helpers/apiUrl';
import {Alert} from 'react-native';

export const getSituation = async (token: string) => {
  const tk = new FormData();

  tk.append('token', token);

  return await apiUrl
    .post('situaciones.php', tk, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    })
    .then(s => {
      return s.data;
    })
    .catch(e => {
      return e;
    });
};

export const LoginAsync = async (usuario: Login) => {
  const usuarioDatos = new FormData();

  usuarioDatos.append('cedula', usuario.Documents);
  usuarioDatos.append('clave', usuario.Password);

  return await apiUrl
    .post('iniciar_sesion.php', usuarioDatos, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    })
    .then(u => {
      return u.data;
    })
    .catch(e => {
      return e;
    });
};

export const postNewVolunteer = async (volunteer: Volunteer) => {
  const newVolunteer = new FormData();

  console.log(volunteer);
  newVolunteer.append('cedula', volunteer.Documents);
  newVolunteer.append('nombre', volunteer.Name);
  newVolunteer.append('apellido', volunteer.LastName);
  newVolunteer.append('clave', volunteer.Password);
  newVolunteer.append('correo', volunteer.Email);
  newVolunteer.append('telefono', volunteer.Phone);

  return await apiUrl
    .post('registro.php', newVolunteer, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    })
    .then(v => {
      return v.data;
    })
    .catch(e => {
      return e;
    });
};

export const postChangePWD = async (newPWD: ChangePWD) => {
  const changePW = new FormData();

  changePW.append('token', newPWD.token);
  changePW.append('clave_anterior', newPWD.LastPassword);
  changePW.append('clave_nueva', newPWD.NewPassword);

  return await apiUrl
    .post('cambiar_clave.php', changePW, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    })
    .then(pw => {
      return pw.data;
    })
    .catch(e => {
      return console.log(e);
    });
};
