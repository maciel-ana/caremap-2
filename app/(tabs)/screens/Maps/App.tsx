import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

// Coordenadas dos hospitais
const hospitals = [
  {
    name: 'Hospital Beneficência Portuguesa',
    address: 'Rua dos Três Irmãos, 111 - São Paulo, SP',
    latitude: -23.567618,
    longitude: -46.660894,
  },
  {
    name: 'Hospital de Câncer de São Paulo',
    address: 'Rua dos Três Irmãos, 222 - São Paulo, SP',
    latitude: -23.573618,
    longitude: -46.670894,
  },
  {
    name: 'Hospital Sírio-Libanês',
    address: 'Rua dos Três Irmãos, 333 - São Paulo, SP',
    latitude: -23.577618,
    longitude: -46.690894,
  },
  {
    name: 'Hospital Infantil Sabará',
    address: 'Rua dos Três Irmãos, 444 - São Paulo, SP',
    latitude: -23.587618,
    longitude: -46.670894,
  },
  {
    name: 'Hospital de Coração (HCor)',
    address: 'Rua dos Três Irmãos, 555 - São Paulo, SP',
    latitude: -23.597618,
    longitude: -46.680894,
  },
  {
    name: 'Hospital de Reabilitação de Anomalias Craniofaciais',
    address: 'Rua dos Três Irmãos, 666 - São Paulo, SP',
    latitude: -23.607618,
    longitude: -46.690894,
  },
  {
    name: 'Hospital das Clínicas da USP',
    address: 'Av. Enéas de Carvalho Aguiar, 255 - São Paulo, SP',
    latitude: -23.562444,
    longitude: -46.665988,
  },
  {
    name: 'Hospital de Doenças Tropicais de Goiás',
    address: 'Rua 227, s/n - Setor Universitário, Goiânia, GO',
    latitude: -16.678460,
    longitude: -49.258374,
  },
  {
    name: 'Instituto de Câncer do Estado de São Paulo (ICESP)',
    address: 'Rua Dr. Arnaldo, 251 - São Paulo, SP',
    latitude: -23.557798,
    longitude: -46.675499,
  },
  {
    name: 'Hospital de Câncer de Barretos (Hospital de Câncer de Barretos)',
    address: 'Av. 23, 4700 - Barretos, SP',
    latitude: -20.563182,
    longitude: -48.588956,
  },
  {
    name: 'Hospital de Reabilitação Lucy Montoro',
    address: 'Avenida Doutor Arnaldo, 335 - São Paulo, SP',
    latitude: -23.557587,
    longitude: -46.665445,
  },
  {
    name: 'Hospital de Doenças Raras São Paulo',
    address: 'Rua dos Três Irmãos, 777 - São Paulo, SP',
    latitude: -23.587299,
    longitude: -46.680982,
  },
];

// Função para abrir o aplicativo de mapas para direções
const openDirections = (latitude: number, longitude: number) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  Linking.openURL(url); // Abre o Google Maps para direções
};

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: hospitals[0].latitude, // Usa o primeiro hospital como a região inicial
          longitude: hospitals[0].longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        customMapStyle={mapStyle} // Aplicando estilo customizado ao mapa
      >
        {/* Renderiza os marcadores para todos os hospitais */}
        {hospitals.map((hospital, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: hospital.latitude, longitude: hospital.longitude }}
            pinColor="#226752" // Cor personalizada para os marcadores
          >
            <Callout style={styles.Callout}>
              <View>
                <Text style={styles.title}>{hospital.name}</Text>
                <Text style={styles.address}>{hospital.address}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* Botão "Como chegar" */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => openDirections(hospitals[0].latitude, hospitals[0].longitude)}
      >
        <Text style={styles.buttonTitle}>Como chegar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilo customizado do mapa para um visual mais refinado
const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3e3e3e',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f2f2f',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Callout: {
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#226752', // Cor do título
  },
  address: {
    fontSize: 14,
    color: '#333', // Cor mais suave para o endereço
  },
  button: {
    height: 56,
    backgroundColor: "#226752", // Cor do botão
    position: "absolute",
    bottom: 24, // Posicionado no fundo da tela
    left: 24,
    right: 24,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
