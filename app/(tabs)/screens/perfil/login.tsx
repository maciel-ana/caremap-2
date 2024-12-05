import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from '@/firebase_config';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const limparInputs = () => {
    setEmail("");
    setPassword("");
  }

  const handleLogin = () => {
    if (email !== '' && password !== '') {
      auth.signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          Alert.alert(
            "Usuário autenticado com sucesso",
            "Seja bem-vindo(a)!"
          );
          limparInputs();
          navigation.navigate('screens/perfil/perfil', { userInfo: { email: user.email, uid: user.uid } });
        })
        .catch(error => {
          let errorMessage;
          switch (error.code) {
            case 'auth/user-not-found':
              errorMessage = 'Usuário não encontrado. Verifique seu email e tente novamente.';
              break;
            case 'auth/wrong-password':
              errorMessage = 'Senha incorreta. Verifique sua senha e tente novamente.';
              break;
            case 'auth/invalid-email':
              errorMessage = 'Email incorreto. Verifique a formatação do mesmo e tente novamente.';
              break;
            case 'auth/invalid-credential':
              errorMessage = 'Senha ou email incorreto.';
              break;
            default:
              errorMessage = `Ocorreu um erro inesperado. ${error.message}`;
              break;
          }
          Alert.alert('Erro ao fazer login', errorMessage);
        });
    } else {
      Alert.alert('Erro', 'Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Seta para voltar */}
      <TouchableOpacity style={styles.arrowContainer} onPress={() => Alert.alert('Voltar')}>
        <Link href="/(tabs)/screens/bemVindo/entrar">
          <MaterialIcons name="arrow-back" size={30} color="#1e1e1e" />
        </Link>
      </TouchableOpacity>

      {/* Imagem no lugar do CareMap */}
      <Image
        source={require('../../../../assets/images/LOGO CORACÃO PNG.png')} // Substitua com o nome da sua imagem
        style={styles.logoImage}
      />

      {/* Imagem acima do título */}
      <Image source={require('../../../../assets/images/perfil.png')} style={styles.image} />

      {/* Título */}
      <Text style={styles.title}>Login</Text>

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#666"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Esqueceu a senha */}
      <TouchableWithoutFeedback onPress={() => Alert.alert('Recuperação de senha', 'Função ainda não implementada.')}>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableWithoutFeedback>

      {/* Botão de login */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Continue com */}
      <View style={styles.continueContainer}>
        <View style={styles.line} />
        <Text style={styles.continueWith}>Continue com</Text>
        <View style={styles.line} />
      </View>

      {/* Ícones de redes sociais */}
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialIcons name="facebook" size={40} style={styles.imageFacebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../../../assets/images/social.png')} style={styles.socialImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialIcons name="apple" size={44} style={styles.imageApple} />
        </TouchableOpacity>
      </View>
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
  logoImage: {
    width: 52, // Ajuste o tamanho da logo
    height: 50,
    alignSelf: 'center',
    marginBottom: 70,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: "-5%",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#226752',
  },
  input: {
    width: '90%',
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#e2e2e2',
    marginBottom: 20,
    paddingHorizontal: 20,
    left: 20
  },
  forgotPassword: {
    color: '#aeaeae',
    textAlign: 'right',
    right: 25,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#226752',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
    width: "90%",
    left: 20
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: "10%"
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#a0a0a0',
    marginHorizontal: 5,
  },
  continueWith: {
    fontSize: 16,
    color: '#a0a0a0',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    marginHorizontal: 10,
  },
  socialImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginTop: 3
  },
  imageFacebook: {
    flexDirection: 'row'
  },
  imageApple: {
    marginTop: -4
  }
});

export default LoginScreen;
