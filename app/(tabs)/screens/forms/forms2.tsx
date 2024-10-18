import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'
import React, { useState } from 'react';
import {MaterialIcons } from '@expo/vector-icons'

const App = () => {
  const [cidade, setCidade] = useState('');
  const [CEP, setCEP] = useState('');
  const [doença, setDoença] = useState('');
  const [tratamentos, setTratamentos] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [medicamentos, setMedicamentos] = useState('');
  const [acompanhamento, setAcompanhamento] = useState('');

  const handleSubmit = () => {
    console.log('Cidade:', cidade);
    console.log('CEP:', CEP);
    console.log('Doença:', doença);
    console.log('Tratamentos:', tratamentos);
    console.log('Frequência:', frequencia);
    console.log('Medicamentos:', medicamentos);
    console.log('Acompanhamento:', acompanhamento);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Care<Text style={styles.map}>Map</Text></Text>
      <MaterialIcons name="arrow-back" size={24} color="black" style={styles.arrow} />
      <Text style={styles.subtitle}>Localização</Text>
      <TextInput
        style={styles.input}
        value={cidade}
        onChangeText={setCidade}
        placeholder="Cidade/Estado"
      />
      <TextInput
        style={styles.input}
        value={CEP}
        onChangeText={setCEP}
        placeholder="CEP"
      />
      
      <Text style={styles.subtitle}>Informações de saúde</Text>
      <TextInput
        style={styles.input}
        value={doença}
        onChangeText={setDoença}
        placeholder="Tipo de Doença ou Síndrome"
      />
      <TextInput
        style={styles.input}
        value={tratamentos}
        onChangeText={setTratamentos}
        placeholder="Tratamentos em Andamento"
      />
      <TextInput
        style={styles.input}
        value={frequencia}
        onChangeText={setFrequencia}
        placeholder="Frequência de Atendimento Médico"
      />
      <TextInput
        style={styles.input}
        value={medicamentos}
        onChangeText={setMedicamentos}
        placeholder="Medicamentos Específicos"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
          <Link href="../forms/forms3">
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    textAlign: 'center',
    paddingVertical: 15,
    color: '#226752',
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
  },
  map: {
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 22,
    color: '#226752',
    marginVertical: 15,
    alignSelf: 'flex-start',
    paddingTop:'3%'
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#226752',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  arrow: {
    marginTop: '-12%',
  }


});

export default App;