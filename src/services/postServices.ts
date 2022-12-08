import {apiUrl} from '../helpers/apiUrl';

export const getSituation = async (token: string) => {
  const tk = new FormData();

  tk.append('token', token);

  apiUrl
    .post('situaciones.php', tk)
    .then(s => {
      if (s.data.exito) {
        return s.data.datos;
      }

      throw Error(s.data.mensaje);
    })
    .catch(e => console.log(e));
};
