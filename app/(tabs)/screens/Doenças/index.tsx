import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const CareMap: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.bold}>Care</Text><Text style={styles.map}>map</Text>
        </Text>
      </View>

      <Image
        source={{ uri: 'assets/images/img.png' }} 
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
    fontSize: 20,
    color: '#226752',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  map: {
    color: '#000000', 
  },

  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: 'cover',
  },

  content: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginHorizontal: 15,
    marginTop: 60, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  diseaseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#226752',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#000000',
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
    color: '#000000',
    lineHeight: 22,
  },
  readMore: {
    fontSize: 14,
    color: '#999ea3',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default CareMap;
