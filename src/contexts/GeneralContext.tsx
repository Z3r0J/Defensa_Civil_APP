import {createContext, useContext, useState} from 'react';

const GeneralContext = createContext({
  changeAuth(token: string) {},
  isAuthenticated: false,
  token: '',
  closeSession() {},
  civilAction: [{}],
});

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};

export const GeneralProvider = ({children}: any) => {
  const [isAuthenticated, setIsAuth] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const civilAction = [
    {
      title:
        'Defensa Civil realiza labores preventivas y de respuesta tras paso del fenómeno atmosférico',
      description:
        'Personal de la Defensa Civil Dominicana realizó desde tempranas horas del miércoles varias acciones preventivas y de respuesta con miras a proteger la vida y propiedades de la ciudadanía, ante los efectos de la tormenta tropical Fred sobre el país.',
      image:
        'https://lanaciondominicana.com/imgs_contenido/noticias/2021/08/whatsapp-image-2021-08-12-at-3-12-22-pm.jpeg',
    },
    {
      title:
        'Defensa Civil inicia amplio programa educativo sobre fenómenos naturales',
      description:
        'Personal de la Defensa Civil Dominicana realizó desde tempranas horas del miércoles varias acciones preventivas y de respuesta con miras a proteger la vida y propiedades de la ciudadanía, ante los efectos de la tormenta tropical Fred sobre el país.',
      image:
        'https://www.ultimasnoticias.com.do/wp-content/uploads/2015/05/pichirilo.jpg',
    },
  ];

  const changeAuth = (token: string) => {
    setIsAuth(true);
    setToken(token);
  };

  const closeSession = () => {
    setIsAuth(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        changeAuth,
        isAuthenticated,
        token,
        closeSession,
        civilAction,
      }}>
      {children}
    </GeneralContext.Provider>
  );
};
