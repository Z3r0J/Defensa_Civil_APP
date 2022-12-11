import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Card, Paragraph, Title} from 'react-native-paper';

export function HistoyComponent() {

  return (
    <ScrollView>
      <Card>
        <Card.Cover source={require('../../../assets/images/logoNuevoDefensa.png')} resizeMode="contain"/>
        <Card.Content>
        <Title style={{
                  color: '#222',
                  fontSize: 28,
                  fontWeight: 'bold',
                }}>Historia Defensa Civil</Title>
        <Paragraph>Antes del año 1966, cuando llegaba la temporada de huracanes, un grupo de radioaficionados se reunía en la Cruz Roja para estar atentos por si surgía algún tipo de emergencia, inmediatamente ponerse a disposición y ayudar en todo lo posible, inclusive, usando sus propios equipos de comunicación para así tener contacto con el exterior en caso de que las redes telefónicas resultaran afectadas.
            Al surgir el triunvirato fue designado el Dr. Rafael Cantizano Arias, como presidente de la Cruz Roja y al mismo tiempo nombraron al Ing. Carlos D´ Franco como director de la Defensa Civil, quien con un grupo compuesto por seis personas, se instaló en la calle Francia esquina Galván, siendo esa la primera oficina de la Defensa Civil.
            Al surgir el Gobierno Provisional, presidido por el Dr. Héctor García Godoy, a los diecisiete días del mes de junio de 1966, fue promulgada la Ley 257, mediante la cual fue creada la Defensa Civil, institución dependiente de la Secretaría Administrativa de la Presidencia (ahora Ministerio de la Presidencia) y quien en la actualidad preside la Comisión Nacional de Emergencias.
            Más adelante, el local fue trasladado a la calle Dr. Delgado No. 164 y luego en la gestión del Contralmirante Radhamés Lora Salcedo se reubicó a la Plaza de la Salud, donde aún permanece.</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
