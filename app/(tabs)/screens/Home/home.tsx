import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, ImageSourcePropType, Alert, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';

interface Specialist {
  name: string;
  specialty: string;
  distance: string;
  image: ImageSourcePropType; // Tipando a imagem
}

const HomeScreen = () => {
  const specialists: Specialist[] = [
    { name: 'Mariana Carvalho', specialty: 'Geneticista', distance: '10km', image: require('../../../../assets/images/pessoa1.jpg') },
    { name: 'Matheus Castro', specialty: 'Geneticista', distance: '10km', image: require('../../../../assets/images/pessoa2.jpg') },
    { name: 'Caio Graco', specialty: 'Geneticista', distance: '10km', image: require('../../../../assets/images/pessoa3.jpg') },
  ];

  // Função para iniciar a chamada de emergência
  const handleEmergencyCall = () => {
    const emergencyNumber = '192'; // Substitua pelo número de emergência desejado
    Linking.openURL(`tel:${emergencyNumber}`).catch(() => {
      Alert.alert('Erro', 'Não foi possível iniciar a chamada. Verifique as permissões do aplicativo.');
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        {/* Substituindo o texto Care e map por uma imagem */}
        <Image source={require('../../../../assets/images/LOGO CORACÃO PNG.png')} style={styles.logo} />
      </View>
      <Text style={styles.servicesTitle}>Todos os serviços para {'\n'}sua saúde</Text>
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Procure por um doutor, medicamento..."
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.services}>
        <TouchableOpacity style={styles.serviceItem}>
          <Link href="/(tabs)/screens/Home/doctors">
            <Image source={require('../../../../assets/images/icone1.png')} style={styles.serviceIcon} />
          </Link>
            <Text>Doutor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}>
          <Link href="/(tabs)/screens/Home/doencas">
            <Image source={require('../../../../assets/images/icone2.png')} style={styles.serviceIcon} />
          </Link>
            <Text>Doenças</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Link href="/(tabs)/screens/Home/hospitais">
          <Image source={require('../../../../assets/images/icone3.png')} style={styles.serviceIcon} />
          </Link>
          <Text>Hospitais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem} onPress={handleEmergencyCall}>
          <Image source={require('../../../../assets/images/icone4.png')} style={styles.serviceIcon} />
          <Text>Emergência</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <View style={styles.mapContent}>
          <View style={styles.mapTextContainer}>
            <Text style={styles.mapText}>Encontre hospitais perto de você!</Text>
            <TouchableOpacity style={styles.mapButton}>
              <Link href="/screens/Maps/App">
                <Text style={styles.mapButtonText}>Ver</Text>
              </Link>
            </TouchableOpacity>
          </View>
          <Image source={require('../../../../assets/images/maps.webp')} style={styles.mapImage} />
        </View>
      </View>

      <View style={styles.specialistsContainer}>
        <Text style={styles.specialistsTitle}>Top especialistas</Text>
          <TouchableOpacity>
        <Link href="/(tabs)/screens/Home/doctors" style={styles.seeMore}>
            <Text>ver mais</Text>
        </Link>
          </TouchableOpacity>
        <View style={styles.specialistsList}>
          {specialists.map((specialist, index) => (
            <View key={index} style={styles.specialistCard}>
              <Link href="/(tabs)/screens/Home/consultas">
                <Image source={specialist.image} style={styles.specialistImage} />
                <Text style={styles.specialistName}>{specialist.name}</Text>
                <Text style={styles.specialistSpecialty}>{specialist.specialty}</Text>
                <Text style={styles.specialistDistance}>{specialist.distance}</Text>
                </Link>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 35,
  },
    logo: {
      width:53,  // Tamanho ajustado da largura (exemplo: 150)
      height: 51,  // Tamanho ajustado da altura (exemplo: 50)
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#226752', // Cor do título
    marginVertical: 16,
    top: -20,
    left: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginVertical: 15,
    top: -20
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    borderRadius: 20,
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  serviceItem: {
    alignItems: 'center',
    top: -20
  },
  serviceIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  mapContainer: {
    backgroundColor: '#619C95',
    padding: 15,
    width: 390,
    height:190,
    borderRadius: 19,
    marginVertical: 16,
    top: -30,
    right:5
  },
  mapContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapImage: {
    width: '50%',
    height: '201%', // Ajusta a altura proporcionalmente
    borderTopRightRadius: 20, // Apenas o canto superior direito arredondado
    borderBottomRightRadius: 20, // Apenas o canto inferior direito arredondado
    marginBottom: 10,
    left: 17,
    top: 38,
    // Sombra aplicada na imagem
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  
  mapTextContainer: {
    flex: 1,
    marginRight: 10,
    color: "#ffff"
  },
  mapText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 10,
    left: 7,
    top:29,
  },
  mapButton: {
    backgroundColor: '#DCEAE6',
    borderRadius: 20,
    alignSelf: 'flex-start',
    width: 120,
    height: 35,
    justifyContent: 'center', // Adicionando isso para centralizar o conteúdo
    alignItems: 'center', // Adicionando isso para garantir que o texto fique centralizado
    display: 'flex', // Isso é necessário para o uso de justifyContent e alignItems
    top: 40,
    left: 30
  },
  mapButtonText: {
    color: '#619C95',
    textAlign: 'center', // Adicionando para centralizar o texto horizontalmente
    lineHeight: 30, // Definindo a altura da linha igual à altura do botão para centralizar verticalmente
    fontSize: 15
  },
  
  specialistsContainer: {
    marginVertical: 16,
  },
  specialistsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#226752",
    top: -30
  },
  seeMore: {
    color: '#3b8065',
    marginVertical: 8,
    marginLeft: '80%',
    top: -55
  },
  specialistsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%'
  },
  specialistCard: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 20,
    width: '30%',
    backgroundColor: '#f9f9f9', // Cor de fundo dos cards
    top: -50
  },
  specialistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
  specialistName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#226752',
  },
  specialistSpecialty: {
    fontSize: 11,
    color: '#666',
    paddingTop: '4%'
  },
  specialistDistance: {
    fontSize: 11,
    color: '#999',
  },
});

export default HomeScreen;
