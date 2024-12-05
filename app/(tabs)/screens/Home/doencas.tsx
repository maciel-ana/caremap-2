import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, Image } from 'react-native';
import { Link } from 'expo-router';

const diseases = [
  'Fibrose Cística',
  'Doença de Gaucher',
  'Doença de Pompe',
  'Esclerose Lateral',
  'Doença de Huntington',
  'Síndrome de Prader-Willi',
  'Epidermólise Bolhosa',
];

const DiseaseList = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Substituindo o texto por uma imagem */}
          <Image source={require('../../../../assets/images/LOGO CORACÃO PNG.png')} style={styles.logo} />
        <View style={styles.headerLine} />
      </View>
      {diseases.map((disease, index) => {
        const scale = useRef(new Animated.Value(1)).current;

        const handlePressIn = () => {
          Animated.spring(scale, {
            toValue: 1.1,
            friction: 3,
            useNativeDriver: true,
          }).start();
        };

        const handlePressOut = () => {
          Animated.spring(scale, {
            toValue: 1,
            friction: 3,
            useNativeDriver: true,
          }).start();
        };

        return (
          <View key={index} style={styles.buttonContainer}>
            <Animated.View style={{ transform: [{ scale }] }}>
              <TouchableOpacity
                style={styles.button}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => console.log(`Selecionado: ${disease}`)}
                activeOpacity={0.7}
              >
                <Text style={styles.buttonText}>{disease}</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  // Tamanho e estilo da logo
  logo: {
    width: 150,  // Ajuste o tamanho conforme necessário
    height: 50,  // Ajuste a altura conforme necessário
    resizeMode: 'contain', // A imagem se ajusta proporcionalmente ao tamanho definido
  },
  headerLine: {
    width: '90%',
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 30,
  },
  buttonContainer: {
    marginVertical: 9,
  },
  button: {
    backgroundColor: '#619C95',
    borderRadius: 35,
    paddingVertical: 17,
    paddingHorizontal: 30,
    alignItems: 'center',
    overflow: 'hidden',
    minWidth: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default DiseaseList;
