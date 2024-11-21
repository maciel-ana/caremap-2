import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import HomeScreen from '../Home';

const CareMap: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.bold}>Care</Text>
          <Text style={styles.map}>map</Text>
        </Text>
      </View>

      <Image
        source={require('../../../../assets/images/img.png')} // Substituído por require para evitar problemas
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.diseaseTitle}>Fibrose Cística</Text>
        <Text style={styles.description}>
          Uma doença genética que afeta principalmente os pulmões e o sistema digestivo, causando problemas respiratórios crônicos e dificuldades na digestão.
        </Text>

        <Text style={styles.symptomsTitle}>Sintomas mais comuns:</Text>
        <Text style={styles.symptoms}>
          – Pele/suor de sabor muito salgado;{'\n'}
          – Tosse persistente, muitas vezes com catarro;{'\n'}
          – Infecções pulmonares frequentes, como pneumonia e bronquite;{'\n'}
          – Chiados no peito ou falta de fôlego.
        </Text>

        <Text style={styles.readMore}>Ler mais</Text>
      </View>
      <HomeScreen/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    color: '#226752',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  map: {
    color: '#000000',
    fontWeight: '300',

  },
  image: {
    width: 379,
    height: 230,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: 'cover',
    left:20
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginHorizontal: 15,
    marginTop: -15, // Reduzido para integrar melhor ao header
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  diseaseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#226752',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  symptomsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#226752',
    marginBottom: 10,
  },
  symptoms: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
  readMore: {
    fontSize: 14,
    color: '#619C95',
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline', // Para indicar que é clicável
  },
});

export default CareMap;
