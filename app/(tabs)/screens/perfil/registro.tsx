import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      Alert.alert('Login bem-sucedido', 'Bem-vindo!');
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Seta no lado esquerdo */}
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Voltar')}>
          <MaterialIcons name="arrow-back" size={30} color="#1e1e1e" />
        </TouchableOpacity>
      </View>

      {/* CareMap no topo */}
      <View style={styles.careMapContainer}>
        <Text style={styles.careText}>Care</Text>
        <Text style={styles.mapText}>map</Text>
      </View>

      {/* Imagem acima do título */}
      <Image source={require('../../../../assets/images/perfil.png')} style={styles.image} />

      {/* Título */}
      <Text style={styles.title}>Registro</Text>

      {/* Campo de Nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="default"
        autoCapitalize="none"
      />

      {/* Campo de Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo de Senha */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputWithIcon} // Alterando para manter o mesmo tamanho das outras caixas
          placeholder="Senha"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            source={require('../../../../assets/images/olhos.png')}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Campo de Confirmação de Senha */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputWithIcon} // Alterando para manter o mesmo tamanho das outras caixas
          placeholder="Confirme a senha"
          placeholderTextColor="#666"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={showConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Image
            source={require('../../../../assets/images/olhos.png')}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Botão de Registro com borda */}
      <TouchableOpacity style={styles.RegistroButton} onPress={handleLogin}>
        <Link href="../forms/forms">
          <Text style={styles.loginButtonText}>Registrar</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: '9%',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    margin: 10,
  },
  arrowContainer: {
    position: 'absolute',
    left: 20,
    top: 33,
    zIndex: 1,
  },
  careMapContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  careText: {
    color: '#226752',
    fontSize: 19,
    fontWeight: 'bold',
    top: -41,
  },
  mapText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '300',
    top: -41,
  },
  image: {
    top: -18,
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    top: -33,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '105%',
    padding: 8,
    paddingLeft: 17,
    borderRadius: 20,
    backgroundColor: '#e2e2e2',
    marginBottom: 27, // Espaçamento entre os campos
  },
  passwordContainer: {
    width: '105%' ,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
    borderRadius: 20,
    marginBottom: 27,
  },
  inputWithIcon: {
    flex: 1, // Garante que a largura da caixa de texto seja consistente
    padding: 8,
    paddingLeft: 17,
    borderRadius: 20,
    backgroundColor: '#e2e2e2',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 15,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  RegistroButton: {
    backgroundColor: '#226752',
    padding: 6,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#ffffff',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 12,
    width: '85%',
    marginLeft: 33,
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default LoginScreen;