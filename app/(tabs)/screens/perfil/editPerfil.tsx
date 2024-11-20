import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handleSave = () => {
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Editar Perfil</Text>

      {/* Imagem de perfil e botões */}
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('../../../../assets/images/perfil.png')}
        />
        <TouchableOpacity>
          <Image
            style={styles.extraImage}
            source={require('../../../../assets/images/trocarimg.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Campos de texto */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="grey"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="grey"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        placeholderTextColor="grey"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        placeholderTextColor="grey"
        value={birthdate}
        onChangeText={setBirthdate}
        keyboardType="numeric"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="grey"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIconContainer}
          accessibilityLabel="Mostrar ou ocultar senha"
        >
          <Image
            style={styles.eyeIcon}
            source={require('../../../../assets/images/olhos.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Botão de salvar */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>

      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => Alert.alert('Voltando...')}>
        <MaterialIcons name="arrow-back" size={24} color="#226752" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#226752',
    top: 50
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    top: 60

  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  extraImage: {
    width: 24,
    height: 24,
    marginTop: -20,
    alignSelf: 'center',
  },
  input: {
    width: '90%',
    padding: 12,
    paddingLeft: 17,
    borderRadius: 20,
    backgroundColor: '#e2e2e2',
    marginBottom: 20,
    top: 90,
    left: 20

  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 20,
    
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 30,
    top: 100,

  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  saveButton: {
    backgroundColor: '#226752',
    width: 342,
    padding: 15,
    borderRadius: 26,
    alignItems: 'center',
    marginTop: 10,
    top: 80,
    left:18

  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    top: 80

  },
  backButtonText: {
    fontSize: 16,
    color: '#226752',
    marginLeft: 5,
  },
});

export default EditProfileScreen;
