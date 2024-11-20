import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const App = () => {
  const [cidade, setCidade] = useState('');
  const [CEP, setCEP] = useState('');
  const [doença, setDoença] = useState('');
  const [tratamentos, setTratamentos] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [medicamentos, setMedicamentos] = useState('');

  const handleSubmit = () => {
    console.log('Cidade:', cidade);
    console.log('CEP:', CEP);
    console.log('Doença:', doença);
    console.log('Tratamentos:', tratamentos);
    console.log('Frequência:', frequencia);
    console.log('Medicamentos:', medicamentos);
  };

  return (
    <View style={styles.container}>
      <MaterialIcons
        name="arrow-back"
        size={28}
        color="#226752"
        style={styles.arrow}
      />
      <Text style={styles.title}>
        Care<Text style={styles.map}>Map</Text>
      </Text>

      <Text style={styles.subtitle}>Localização</Text>
      <TextInput
        style={styles.input}
        value={cidade}
        onChangeText={setCidade}
        placeholder="Cidade/Estado"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        value={CEP}
        onChangeText={setCEP}
        placeholder="CEP"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
      />

      <Text style={styles.subtitle}>Informações de saúde</Text>
      <TextInput
        style={styles.input}
        value={doença}
        onChangeText={setDoença}
        placeholder="Tipo de Doença ou Síndrome"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        value={tratamentos}
        onChangeText={setTratamentos}
        placeholder="Tratamentos em Andamento"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        value={frequencia}
        onChangeText={setFrequencia}
        placeholder="Frequência de Atendimento Médico"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        value={medicamentos}
        onChangeText={setMedicamentos}
        placeholder="Medicamentos Específicos"
        placeholderTextColor="#aaa"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
          <Link href="../forms/forms3" style={styles.link}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f9f9f9',
  },
  arrow: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    textAlign: 'center',
    color: '#226752',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    top: -30
  },
  map: {
    color: '#444',
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 20,
    color: '#226752',
    marginVertical: 10,
    fontWeight: '600',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#226752',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    textDecorationLine: 'none',
  },
});

export default App;
