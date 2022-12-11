import {apiUrl} from './../helpers/apiUrl';

export const getVideosAsync = async () => {
  return await apiUrl
    .get('videos.php', {})
    .then(x => {
      console.log(x.data);
      return x.data.datos;
    })
    .catch(x => console.log(x));
};

export const getNewsAsync = async () => {
  return await apiUrl
    .get('noticias.php', {})
    .then(x => {
      return x.data.datos;
    })
    .catch(x => console.log(x));
};

export const getServicesAsync = async () => {
  return await apiUrl
    .get('servicios.php', {})
    .then(x => {
      return x.data.datos;
    })
    .catch(x => console.log(x));
};

export const getRefugees = async () => {
  return await apiUrl
    .get('albergues.php', {})
    .then(a => {
      return a.data.datos;
    })
    .catch(e => console.log(e));
};

export const getMeasure = async () => {
  return await apiUrl
    .get('medidas_preventivas.php', {})
    .then(mp => {
      return mp.data.datos;
    })
    .catch(e => console.log(e));
};

export const getMembers = async () => {
  return await apiUrl
    .get('miembros.php', {})
    .then(mb => {
      return mb.data.datos;
    })
    .catch(e => console.log(e));
};
