import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
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
    <View style={styles.container}>
      {/* Título da página acima da imagem de perfil */}
      <Text style={styles.title}>Editar Perfil</Text>

      {/* Container para imagem de perfil e as novas imagens */}
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('../../../../assets/images/perfil.png')} // Imagem local
        />
        <View style={styles.extraImagesContainer}>
          <View>
            <Image
              style={styles.extraImage14}
              source={require('../../../../assets/images/circulo2.png')} // Imagem adicional
            />
            <Image
              style={styles.extraImage46}
              source={require('../../../../assets/images/trocarimg.png')} // Outra imagem adicional
            />
          </View>
        </View>
      </View>

      {/* Campo de Nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#226752" // Cor do placeholder
        value={name}
        onChangeText={setName}
        keyboardType="default"
      />

      {/* Campo de Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#226752" // Cor do placeholder
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Campo de Nome de Usuário */}
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        placeholderTextColor="#226752" // Cor do placeholder
        value={username}
        onChangeText={setUsername}
        keyboardType="default"
      />

      {/* Campo de Data de Nascimento */}
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        placeholderTextColor="#226752" // Cor do placeholder
        value={birthdate}
        onChangeText={setBirthdate}
        keyboardType="numeric"
      />

      {/* Campo de Senha com ícone de olho */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#226752" // Cor do placeholder
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            source={require('../../../../assets/images/olhos.png')} // Ícone de olho
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Botão de Salvar */}
      <TouchableOpacity style={styles.SalvarButton} onPress={handleSave}>
        <Text style={styles.loginButtonText}>Salvar</Text>
      </TouchableOpacity>

      {/* Opção Sair com imagem sobreposta */}
      <TouchableOpacity style={styles.formContainer}>
        <View style={styles.imageContainer}>
          {/* Imagem de fundo */}
          <Image
            style={styles.formImageset}
            source={require('../../../../assets/images/retangulo.png')} // Imagem de fundo
          />
          {/* Seta sobreposta */}
          <MaterialIcons
            style={styles.arrowImage}
            name="arrow-forward"
          />
        </View>
        <Text style={styles.optionText2}> Voltar </Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    marginBottom: -10,
    borderRadius: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
    top: -30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    left: 128,
  },
  extraImagesContainer: {
    right: -12,
    top: 15,
    marginLeft: 40, // Espaço entre a imagem de perfil e as imagens adicionais
  },
  extraImage14: {
    width: 25,
    top: 27,
    left: 50,
    height: 25,
    borderRadius: 15, // Para imagens circulares
  },
  extraImage46: {
    width: 16, // Ajuste o tamanho conforme necessário
    height: 16,
    position: 'absolute',
    top: 31,
    left: 54.5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'medium',
    marginBottom: 20,
    textAlign: 'center',
    top: -27,
  },
  input: {
    width: '100%',
    top: 7,
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#e2e2e2',
    marginBottom: 18,
    paddingLeft: 13, // Espaço adicional à esquerda
    color: '#000000', // Cor do texto dentro da caixa de texto
  },
  passwordContainer: {
    width: '100%',
    marginBottom: 20,
    position: 'relative',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: 15, // Ajuste o alinhamento vertical
  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  SalvarButton: {
    backgroundColor: '#226752',
    padding: 7,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#ffffff',
    alignItems: 'center',
    marginBottom: 3,
    marginTop: 12,
    top: 10,
    width: '32%',
    marginLeft: 124,
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowImage: {
    width: 20, // Ajuste o tamanho conforme necessário
    left: 103.8,
    top: 15,
    height: 20,
    alignSelf: 'center', // Centraliza a seta horizontalmente
    marginTop: 10, // Espaçamento acima da seta
    transform: [{ rotate: '180deg' }], // Gira a seta para a esquerda
  },
  formContainer: {
    flexDirection: 'row',
    marginLeft: 32,
    alignItems: 'center',
    marginBottom: 22,
    top: -28,
  },
  imageContainer: {
    position: 'relative', // Container relativo para permitir posicionamento absoluto
    width: 35,
    height: 35,
  },
  formImageset: {
    top: 52,
    left: 103,
    width: '95%',
    height: '95%',
  },
  optionText2: {
    top: 50,
    left: 110,
    fontSize: 17,
    fontWeight: 'medium',
    backgroundColor: 'transparent',
    padding: 0,
    alignSelf: 'center',
  },
});

export default EditProfileScreen;