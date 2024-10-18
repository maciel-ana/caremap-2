import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  const terms = [
    "1. Ao acessar e utilizar o aplicativo Caremap, você concorda com os termos e condições descritos neste documento. Se não concordar com estes termos, não utilize o Aplicativo.",
    "2. Ao cadastrar-se na plataforma, você concorda em conceder seu e-mail - não é permitido mais de um cadastro por pessoa.",
    "3. Para usar o Aplicativo, você deve ter pelo menos 18 anos de idade ou ter a autorização de um responsável legal. Ao utilizar o Aplicativo, você declara que atende a esses requisitos.",
    "4. Para acessar certas funcionalidades do Aplicativo, você pode precisar criar uma conta. Você é responsável por manter a confidencialidade das suas credenciais de acesso. Notifique-nos imediatamente sobre qualquer uso não autorizado da sua conta.",
    "5. LGPD. Nós utilizamos cookies e outras tecnologias para melhorar a experiência do usuário, e podemos capturar, armazenar e processar suas informações pessoais. Você possui o direito de acessar, ou solicitar exclusão."
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.title}>Termos de Uso</Text>
      </View>

      {terms.map((term, index) => (
        <View key={index} style={styles.termContainer}>
          <Text style={styles.termText}>
            {index === 4 ? (
              <>
                <Text>5. </Text>
                <Text style={styles.lgpdText}>LGPD</Text>. Nós utilizamos cookies e outras tecnologias para melhorar a experiência do usuário, e podemos capturar, armazenar e processar suas informações pessoais. Você possui o direito de acessar, ou solicitar exclusão.
              </>
            ) : (
              term
            )}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    textAlign: 'center',
    color: '#226752',
    fontSize: 32,
    fontWeight: 'bold',
  },
  titulo: {
    backgroundColor: '#d1e7dd',
    width: '100%',
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  termContainer: {
    fontSize: 20,
    padding: 19,
    textAlign: 'left',
    marginBottom: 10,
    width: '100%',
    borderLeftWidth: 5,
    borderLeftColor: '#226752',
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  termText: {
    color: '#333',
    lineHeight: 20,
    fontSize: 18,
  },
  lgpdText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default App;