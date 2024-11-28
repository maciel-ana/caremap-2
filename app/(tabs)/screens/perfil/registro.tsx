import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { auth, db } from '@/firebase_config';
import { Email } from '@mui/icons-material';
import { collection, addDoc, Timestamp, doc, setDoc } from 'firebase/firestore';
import { Link, useNavigation } from 'expo-router';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();

  const limparInputs = () => {
    setName(''),
    setEmail(''),
    setDataNascimento(''),
    setConfirmPassword(''),
    setPassword('')
  }

  const handleRegistro = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    
    // Simulação de login com dados fixos
    if (email != '' && password != '') {
      try {
        const userCredentials = await auth.createUserWithEmailAndPassword(email, password);

        const user = userCredentials.user;

        const userDocRef = doc(db, "Users", user.uid);

        await setDoc(userDocRef, {
          Email: user.email,
          Nome: name,
          DataNascimento: dataNascimento
        })

        limparInputs();

        const userInfo = {
          email: user.email,
          uid: user.uid,
        };

        Alert.alert('Bem vindo', `Usuário "${email}" cadastrado com sucesso!`);

        navigation.navigate('screens/perfil/perfil', { userInfo });
      } catch (error) {
        let errorMessage;

        switch (error.code) {
          case 'auth/email-already-in-use':
              errorMessage = 'Este email já está em uso. Por favor, use outro email.';
              break;
          case 'auth/invalid-email':
              errorMessage = 'Formato de email inválido. Por favor, insira um email válido.';
              break;
          case 'auth/operation-not-allowed':
              errorMessage = 'O registro de usuários está desativado. Por favor, entre em contato com o suporte.';
              break;
          case 'auth/weak-password':
              errorMessage = 'A senha é muito curta. Por favor, insira uma senha com pelo menos 6 caracteres.';
              break;
          default:
              errorMessage = `Ocorreu um erro inesperado. Por favor, tente novamente mais tarde. erro: ${error}`;
              break;
      }

      // Alerta de erro
      Alert.alert('Erro ao registrar', errorMessage);
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os dados!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Seta no lado esquerdo */}
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Voltar')}>
          <Link href="../screens/entrar/Index">
            <MaterialIcons name="arrow-back" size={30} color="#1e1e1e" />
          </Link>
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
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
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

      {/* Campo de Data de nascimento */}
      <TextInput
        style={styles.input}
        placeholder="Data de nascimento"
        placeholderTextColor="#666"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        autoCapitalize="words"
      />

      {/* Campo de Senha */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Senha"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image source={require('../../../../assets/images/olhos.png')} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      {/* Campo de Confirmação de Senha */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Confirme a senha"
          placeholderTextColor="#666"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Image source={require('../../../../assets/images/olhos.png')} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      {/* Botão de Registro */}
      <TouchableOpacity style={styles.RegistroButton} onPress={handleRegistro}>
        <Link href="../forms/forms">
          <Text style={styles.loginButtonText}>Registrar</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  arrowContainer: {
    position: 'absolute',
    left: 20,
    top: "9%",
    zIndex: 1,
  },
  careMapContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    top: -30, 
  },
  careText: {
    color: '#226752',
    fontSize: 25,
    fontWeight: 'bold',
  },
  mapText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '300',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    top: -40,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#226752',
    top: -30,
  },
  input: {
    width: '90%',
    padding: 16,
    paddingLeft: 17,
    borderRadius: 20,
    backgroundColor: '#e2e2e2',
    marginBottom: 20,
    top: -30,
    left: 20
  },
  passwordContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
    borderRadius: 20,
    marginBottom: 20,
    top: -30,
    left: 20
  },
  inputWithIcon: {
    flex: 1,
    padding: 16,
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
    padding: 15,
    borderRadius: 26,
    alignItems: 'center',
    marginTop: 15,
    top: -30,
    width: "90%",
    left: 20  
  },  
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
