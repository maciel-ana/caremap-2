import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

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

  const OptionButton = ({ text, isSelected, onPress }) => (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <View style={[styles.circle, isSelected && styles.selectedCircle]} />
      <Text style={styles.optionText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={28}
          color="#226752"
          style={styles.arrow}
        />
        <Text style={styles.title}>
          Care<Text style={styles.map}>Map</Text>
        </Text>
      </View>

      {/* Acompanhamento médico */}
      <Text style={styles.subtitle}>Necessidade de acompanhamento médico contínuo?</Text>
      <View style={styles.acompanhamentoContainer}>
        <OptionButton
          text="Sim"
          isSelected={acompanhamento === 'sim'}
          onPress={() => setAcompanhamento('sim')}
        />
        <OptionButton
          text="Não"
          isSelected={acompanhamento === 'nao'}
          onPress={() => setAcompanhamento('nao')}
        />
      </View>

      {/* Hospitais com acessibilidade */}
      <Text style={styles.subtitle}>
        Necessidade de Hospitais com Acessibilidade Específica?
      </Text>
      <View style={styles.acompanhamentoContainer}>
        <OptionButton
          text="Sim"
          isSelected={acessibilidade === 'sim'}
          onPress={() => setAcessibilidade('sim')}
        />
        <OptionButton
          text="Não"
          isSelected={acessibilidade === 'nao'}
          onPress={() => setAcessibilidade('nao')}
        />
      </View>

      {/* Campo para mais detalhes */}
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
          placeholderTextColor="#A9A9A9"
        />
      </View>

      {/* Termo de uso */}
      <View style={styles.termoRetangulo}>
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

      {/* Botão de enviar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.continueButton, !termoAceito && styles.disabledButton]}
          onPress={handleSubmit}
          disabled={!termoAceito}
        >
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
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  arrow: {
    marginRight: 15,
  },
  title: {
    textAlign: 'center',
    color: '#226752',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    top: 40,
    left: 80
  },
  map: {
    color: '#444',
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 18,
    color: '#226752',
    marginBottom: 10,
    fontWeight: '600',
    top: 60

  },
  acompanhamentoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    top: 60
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
    borderColor: '#ddd',
    marginRight: 10,
  },
  selectedCircle: {
    backgroundColor: '#d1e7dd',
    borderColor: '#226752',
  },
  optionText: {
    color: '#226752',
    fontSize: 16,
  },
  grayRectangle: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 30,
    top: 100

  },
  grayRectangleText: {
    color: '#226752',
    fontSize: 16,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f7f7f7',
    fontSize: 14,
  },
  termoRetangulo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    top: 110

    
  },
  checkRectangle: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    
  },
  termoText: {
    fontSize: 14,
    color: '#226752',
    flexShrink: 1,
  },
  termHighlight: {
    color: '#1134FD',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#226752',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    top: 130

  },
  disabledButton: {
    backgroundColor: '#b5b5b5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
