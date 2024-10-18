import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Link } from 'expo-router';
import React, { useState } from 'react';

const MyComponent = () => {
  const navigation = useNavigation();
}

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
        <Text style={styles.map}>
          Map
        </Text>
      </Text>

      <Text style={styles.subtitle}>Dados pessoais</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nome completo"
      />
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
        placeholder="Data de nascimento"
      />
      
      <Text style={[styles.subtitle, styles.grayText]}>Gênero</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderBox, genero === 'feminino' && styles.selectedGender]}
          onPress={() => setGenero('feminino')}
        >
          <Text style={styles.genderText}>Feminino</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.genderBox, genero === 'masculino' && styles.selectedGender]}
          onPress={() => setGenero('masculino')}
        >
          <Text style={styles.genderText}>Masculino</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.genderBox, genero === 'outro' && styles.selectedGender]}
          onPress={() => setGenero('outro')}
        >
          <Text style={styles.genderText}>Outro</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Informações de contato</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={tel}
        onChangeText={setTel}
        placeholder="Telefone"
      />

      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
            <Link href="../forms/forms2" >
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
    paddingVertical: 15, // Aumentado para mais espaçamento
    color: '#226752',
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
  },
  map: {
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 22, // Aumentado o tamanho da fonte
    color: '#226752',
    marginVertical: 15, // Aumentado o espaçamento
    alignSelf: 'flex-start',
  },
  grayText: {
    fontSize: 18, // Aumentado o tamanho da fonte
    color: '#888',
  },
  input: {
    height: 50, // Aumentado para mais espaço interno
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20, // Aumentado o espaçamento entre inputs
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 25, // Aumentado o espaçamento
  },
  genderBox: {
    width: '30%',
    height: 60, // Aumentado para mais espaço interno
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  selectedGender: {
    backgroundColor: '#d1e7dd',
  },
  genderText: {
    color: '#226752',
  },
  buttonContainer: {
    marginTop: 30, // Aumentado para mais espaço acima do botão
    width: '100%',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#226752',
    paddingVertical: 12, // Aumentado para mais espaço interno
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;