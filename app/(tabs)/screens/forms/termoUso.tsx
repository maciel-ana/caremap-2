import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const App = () => {
  const terms = [
    "1. Ao acessar e utilizar o aplicativo Caremap, você concorda com os termos e condições descritos neste documento. Se não concordar com estes termos, não utilize o Aplicativo.",
    "2. Ao cadastrar-se na plataforma, você concorda em conceder seu e-mail - não é permitido mais de um cadastro por pessoa.",
    "3. Para usar o Aplicativo, você deve ter pelo menos 18 anos de idade ou ter a autorização de um responsável legal. Ao utilizar o Aplicativo, você declara que atende a esses requisitos.",
    "4. Para acessar certas funcionalidades do Aplicativo, você pode precisar criar uma conta. Você é responsável por manter a confidencialidade das suas credenciais de acesso. Notifique-nos imediatamente sobre qualquer uso não autorizado da sua conta.",
    "5. LGPD. Nós utilizamos cookies e outras tecnologias para melhorar a experiência do usuário, e podemos capturar, armazenar e processar suas informações pessoais. Você possui o direito de acessar, ou solicitar exclusão.",
  ];

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Termos de Uso</Text>
      </View>

      {/* Conteúdo com rolagem */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {terms.map((term, index) => (
          <View key={index} style={styles.termContainer}>
            <Text style={styles.termText}>
              {index === 4 ? (
                <>
                  <Text style={styles.termNumber}>5. </Text>
                  <Text style={styles.lgpdText}>LGPD</Text>
                  <Text>
                    . Nós utilizamos cookies e outras tecnologias para melhorar a experiência do
                    usuário, e podemos capturar, armazenar e processar suas informações pessoais.
                    Você possui o direito de acessar, ou solicitar exclusão.
                  </Text>
                </>
              ) : (
                term
              )}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#d1e7dd',
    width: '100%',
    paddingVertical: height * 0.03,
    alignItems: 'center',
    marginBottom: 20,
  
  },
  title: {
    color: '#226752',
    fontSize: 25,
    fontWeight: '600',
    top: 15
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: width * 0.05,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  termContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#226752',
  },
  termText: {
    fontSize: height * 0.022,
    lineHeight: height * 0.03,
    color: '#333',
  },
  termNumber: {
    fontWeight: 'bold',
    fontSize: height * 0.024,
  },
  lgpdText: {
    color: '#226752',
    fontWeight: 'bold',
    fontSize: height * 0.023,
  },
});

export default App;
