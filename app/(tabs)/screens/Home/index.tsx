import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.care}>Care</Text>
        <Text style={styles.mapp}>map</Text>
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
          <Image source={require('../../../../assets/images/icone1.png')} style={styles.serviceIcon} />
          <Text>Doutor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Image source={require('../../../../assets/images/icone2.png')} style={styles.serviceIcon} />
          <Text>Doenças</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Image source={require('../../../../assets/images/icone3.png')} style={styles.serviceIcon} />
          <Text>Hospitais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Image source={require('../../../../assets/images/icone4.png')} style={styles.serviceIcon} />
          <Text>Emergência</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <View style={styles.mapContent}>
          <View style={styles.mapTextContainer}>
            <Text style={styles.mapText}>Encontre hospitais perto de você!</Text>
            <TouchableOpacity style={styles.mapButton}>
              <Text style={styles.mapButtonText}>Ver</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../../../../assets/images/maps.webp')} style={styles.mapImage} />
        </View>
      </View>

      <View style={styles.specialistsContainer}>
        <Text style={styles.specialistsTitle}>Top especialistas</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>ver mais</Text>
        </TouchableOpacity>

        <View style={styles.specialistsList}>
          {specialists.map((specialist, index) => (
            <View key={index} style={styles.specialistCard}>
              <Image source={specialist.image} style={styles.specialistImage} />
              <Text style={styles.specialistName}>{specialist.name}</Text>
              <Text style={styles.specialistSpecialty}>{specialist.specialty}</Text>
              <Text style={styles.specialistDistance}>{specialist.distance}</Text>
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
      paddingVertical: 16,
    },
    care: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#3b8065',
      top: 15,
      right: 29,
    },
    mapp: {
      fontSize: 18,
      fontWeight: '300',
      color: 'black',
      top: -13,
      left: 20,
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
      backgroundColor: '#3b8065',
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
      color: '#fff',
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
      alignSelf: 'flex-end',
      marginVertical: 8,
      top: -60
  
    },
  specialistsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specialistCard: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 18,
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
  },
  specialistDistance: {
    fontSize: 11,
    color: '#999',
  },
});

export default HomeScreen;
