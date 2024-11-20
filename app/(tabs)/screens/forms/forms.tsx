import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'expo-router';

const App = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState('');
  const [genero, setGenero] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  const handleSubmit = () => {
    console.log('Nome:', name);
    console.log('Data:', data);
    console.log('Gênero:', genero);
    console.log('Email:', email);
    console.log('Telefone:', tel);
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>
        Care
        <Text style={styles.map}>map</Text>
      </Text>

      <Text style={styles.subtitle}>Dados pessoais</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nome completo"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
        placeholder="Data de nascimento"
        placeholderTextColor="#aaa"
      />

      <Text style={[styles.subtitle, styles.grayText]}>Gênero</Text>
      <View style={styles.genderContainer}>
        {['feminino', 'masculino', 'outro'].map((g) => (
          <TouchableOpacity
            key={g}
            style={[
              styles.genderBox,
              genero === g && styles.selectedGender,
            ]}
            onPress={() => setGenero(g)}
          >
            <Text
              style={[
                styles.genderText,
                genero === g && styles.selectedGenderText,
              ]}
            >
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subtitle}>Informações de contato</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={tel}
        onChangeText={setTel}
        placeholder="Telefone"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
          <Link href="../forms/forms2" style={styles.link}>
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
  title: {
    textAlign: 'center',
    color: '#226752',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    top: -40
  },
  map: {
    color: '#444',
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 20,
    color: '#226752',
    marginBottom: 10,
    fontWeight: '600',
  },
  grayText: {
    fontSize: 18,
    color: '#226752',
    marginTop: 10,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  genderBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    marginHorizontal: 5,
    backgroundColor: '#f5f5f5',
  },
  selectedGender: {
    backgroundColor: '#d1e7dd',
    borderColor: '#226752',
  },
  genderText: {
    color: '#555',
    fontSize: 16,
  },
  selectedGenderText: {
    color: '#226752',
    fontWeight: 'bold',
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
