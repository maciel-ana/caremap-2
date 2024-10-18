import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {MaterialIcons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window');

const App = () => {
  const [acompanhamento, setAcompanhamento] = useState('');
  const [acessibilidade, setAcessibilidade] = useState('');
  const [termoAceito, setTermoAceito] = useState(false);
  const [detalhes, setDetalhes] = useState('');

  const handleSubmit = () => {
    console.log('Acompanhamento:', acompanhamento);
    console.log('Hospitais com Acessibilidade:', acessibilidade);
    console.log('Detalhes:', detalhes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
      <Text style={styles.title}>
        Care
        <Text style={styles.map}>Map</Text>
      </Text>
      </View>

      <View>
      <MaterialIcons name="arrow-back" size={24} color="black" style={styles.arrow} />
      </View>

      <Text style={styles.subtitle}>Necessidade de acompanhamento médico contínuo?</Text>
      <View style={styles.acompanhamentoContainer}>
        <TouchableOpacity onPress={() => setAcompanhamento('sim')} style={styles.option}>
          <View style={[styles.circle, acompanhamento === 'sim' && styles.selectedCircle]} />
          <Text style={styles.optionText}>Sim</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setAcompanhamento('nao')} style={styles.option}>
          <View style={[styles.circle, acompanhamento === 'nao' && styles.selectedCircle]} />
          <Text style={styles.optionText}>Não</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Necessidade de Hospitais com Acessibilidade Específica?</Text>
      <View style={styles.acompanhamentoContainer}>
        <TouchableOpacity onPress={() => setAcessibilidade('sim')} style={styles.option}>
          <View style={[styles.circle, acessibilidade === 'sim' && styles.selectedCircle]} />
          <Text style={styles.optionText}>Sim</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setAcessibilidade('nao')} style={styles.option}>
          <View style={[styles.circle, acessibilidade === 'nao' && styles.selectedCircle]} />
          <Text style={styles.optionText}>Não</Text>
        </TouchableOpacity>
      </View>

      {/* Novo retângulo cinza com campo de texto */}
      <View style={styles.grayRectangle}>
        <Text style={styles.grayRectangleText}>
          Há mais algum detalhe que você {'\n'} gostaria de informar?
        </Text>
        <TextInput
          style={styles.textInput}
          value={detalhes}
          onChangeText={setDetalhes}
          placeholder="Digite aqui..."
          multiline
          placeholderTextColor="#A9A9A9" // Cor do texto do placeholder
        />
      </View>

      {/* Retângulo com o texto */}
      <View style={styles.termoRetangulo}>
        <View style={styles.termoContainer}>
          <TouchableOpacity onPress={() => setTermoAceito(!termoAceito)} style={styles.checkRectangle}>
            {termoAceito && <MaterialIcons name="check" size={20} color="#226752" />}
          </TouchableOpacity>
          <Text style={styles.termoText}>
            Li e estou de acordo com o 
            <Link href="../forms/termoUso">
              <Text style={styles.termHighlight}> Termo de Uso e Política de Privacidade</Text>
            </Link>
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
          <Link href="../">
            <Text style={styles.buttonText}>ENVIAR</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },

  titulo: {
    textAlign: 'center',
    color: '#226752',
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: 20,
  },

  title: {
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 30,
    color: '#226752',
    fontWeight: 'bold',
    width: '100%',
    marginTop: '20%',
    // paddingBottom: '3%',
  },
  map: {
    color: '#ffffff',
  },
  subtitle: {
    fontSize: height * 0.025,
    color: '#226752',
    marginVertical: 8,
    alignSelf: 'flex-start',
  },
  acompanhamentoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
  },
  selectedCircle: {
    backgroundColor: '#d1e7dd',
    borderColor: '#226752',
  },
  optionText: {
    color: '#226752',
  },
  grayRectangle: {
    width: '100%',
    paddingVertical: height * 0.025,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 20,
  },
  grayRectangleText: {
    color: '#226752',
    fontSize: height * 0.02,
    textAlign: 'left',
    left: 15,
  },
  textInput: {
    width: '90%',
    height: 60,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: 'transparent', // Para remover a borda
  },
  termoRetangulo: {
    width: '100%',
    padding: 10,
    backgroundColor: '#d1e7dd',
    borderRadius: 10,
    marginBottom: 20,
  },
  termoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  checkRectangle: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  termoText: {
    color: '#226752',
    fontSize: height * 0.02,
    flex: 1,
  },
  termHighlight: {
    color: '#1134FD',
        textDecorationLine: 'underline',

  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#226752',
    paddingVertical: 12,
    paddingHorizontal: 38,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },

  arrow: {
    marginTop: '-16%',

  },
});

export default App;