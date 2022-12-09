import {ChangePWD} from './class/ChangePasswordClass';
import {Volunteer} from './class/VolunteerClass';
import {Login} from './class/LoginClass';
import {apiUrl} from '../helpers/apiUrl';

export const getSituation = async (token: string) => {
  const tk = new FormData();

  tk.append('token', token);

  return await apiUrl
    .post('situaciones.php', tk)
    .then(s => {
      if (s.data.exito) {
        return s.data.datos;
      }

      throw Error(s.data.mensaje);
    })
    .catch(e => console.log(e));
};

export const LoginAsync = async (usuario: Login) => {
  const usuarioDatos = new FormData();

  usuarioDatos.append('cedula', usuario.Documents);
  usuarioDatos.append('contraseña', usuario.Password);

  return await apiUrl
    .post('iniciar_sesion.php', usuarioDatos)
    .then(u => {
      if (u.data.exito) {
        return u.data.datos;
      }

      throw Error(u.data.mensaje);
    })
    .catch(e => console.log(e));
};

export const postNewVolunteer = async (volunteer: Volunteer) => {
  const newVolunteer = new FormData();

  newVolunteer.append('cedula', volunteer.Documents);
  newVolunteer.append('nombre', volunteer.Name);
  newVolunteer.append('apellido', volunteer.LastName);
  newVolunteer.append('clave', volunteer.Password);
  newVolunteer.append('correo', volunteer.Email);
  newVolunteer.append('telefono', volunteer.Phone);

  return await apiUrl
    .post('registro.php', newVolunteer)
    .then(v => {
      if (v.data.exito) {
        return v.data.datos;
      }

      throw Error(v.data.mensaje);
    })
    .catch(e => console.log(e));
};

export const postChangePWD = async (newPWD: ChangePWD) => {
  const changePW = new FormData();

  changePW.append('token', newPWD.token);
  changePW.append('clave_anterior', newPWD.LastPassword);
  changePW.append('clave_nueva', newPWD.NewPassword);

  return await apiUrl
    .post('cambiar_clave.php', ChangePWD)
    .then(pw => {
      if (pw.data.exito) {
        return pw.data.datos;
      }
      throw Error(pw.data.mensaje);
    })
    .catch(e => console.log(e));
};
