import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

// Coordinates of the hospitals
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
];

// Function to open the map app for directions
const openDirections = (latitude: number, longitude: number) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  Linking.openURL(url); // Opens Google Maps for directions
};

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: hospitals[0].latitude, // Use the first hospital as the initial view
          longitude: hospitals[0].longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Render markers for all hospitals */}
        {hospitals.map((hospital, index) => (
          <Marker key={index} coordinate={{ latitude: hospital.latitude, longitude: hospital.longitude }}>
            <Callout style={styles.Callout}>
              <View>
                <Text style={styles.title}>{hospital.name}</Text>
                <Text style={styles.address}>{hospital.address}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* "Como chegar" Button */}
      <TouchableOpacity style={styles.button} onPress={() => openDirections(hospitals[0].latitude, hospitals[0].longitude)}>
        <Text style={styles.buttonTitle}>Como chegar</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  },
  address: {
    fontSize: 14,
  },
  button: {
    height: 56,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 24, // Positioned at the bottom of the screen
    left: 24,
    right: 24,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
