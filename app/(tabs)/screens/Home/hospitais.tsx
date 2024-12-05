import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import { Link } from 'expo-router';

interface HospitaisProps {
  navigation: NavigationProp<any>;
}

// Coordenadas para cada hospital
const data = [
  { 
    id: '1', 
    title: 'Hospital Beneficência Portuguesa', 
    imageUri: require('../../../../assets/images/hosp1.jpg'),
    coordinate: { latitude: -23.567618, longitude: -46.660894 }
  },
  { 
    id: '2', 
    title: 'Hospital das Clínicas FMUSP', 
    imageUri: require('../../../../assets/images/hosp2.jpg'),
    coordinate: { latitude: -23.557618, longitude: -46.669894 }
  },
  { 
    id: '3', 
    title: 'Hospital de Câncer de São Paulo', 
    imageUri: require('../../../../assets/images/hosp3.jpg'),
    coordinate: { latitude: -23.573618, longitude: -46.670894 }
  },
  { 
    id: '4', 
    title: 'Hospital Sírio-Libanês', 
    imageUri: require('../../../../assets/images/hosp4.jpg'),
    coordinate: { latitude: -23.577618, longitude: -46.690894 }
  },
  { 
    id: '5', 
    title: 'Hospital Infantil Sabará', 
    imageUri: require('../../../../assets/images/hosp5.webp'),
    coordinate: { latitude: -23.587618, longitude: -46.670894 }
  },
  { 
    id: '6', 
    title: 'Hospital de Coração (HCor)', 
    imageUri: require('../../../../assets/images/hosp1.jpg'),
    coordinate: { latitude: -23.597618, longitude: -46.680894 }
  },
  { 
    id: '7', 
    title: 'Hospital de Reabilitação de Anomalias Craniofaciais', 
    imageUri: require('../../../../assets/images/hosp1.jpg'),
    coordinate: { latitude: -23.607618, longitude: -46.690894 }
  },
];

const Hospitais: React.FC<HospitaisProps> = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Função para abrir o Google Maps com as coordenadas do hospital
  const openDirections = (coordinate: { latitude: number; longitude: number }) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinate.latitude},${coordinate.longitude}`;
    Linking.openURL(url); // Abre o Google Maps com as direções
  };

  // Renderizando cada hospital na lista
  const renderItem = ({ item }: { item: { title: string; subtitle: string; imageUri: any, coordinate: { latitude: number, longitude: number } } }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imageUri} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => openDirections(item.coordinate)} // Abrir mapa ao clicar
        >
          <Text style={styles.buttonText}>Abrir no Google Maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="arrow-back" size={24} color="#226752" />
        </TouchableOpacity>
      <Text style={styles.headerTitle}>Hospitais</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 70,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#226752',
    textAlign: 'center',
    marginBottom: 20,
    top: 20
  },
  list: {
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#226752',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent', // Removendo fundo colorido
    borderWidth: 1, // Adicionando uma borda fina
    borderColor: '#226752', // Cor da borda (verde)
    borderRadius: 15, // Bordas arredondadas
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
  buttonText: {
    color: '#226752', // Cor do texto (verde)
    fontSize: 12, // Tamanho de fonte menor
    fontWeight: '600', // Peso de fonte mais leve
  },
});

export default Hospitais;
