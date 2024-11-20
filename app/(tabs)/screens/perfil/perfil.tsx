import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Imagem do perfil */}
      <Image
        style={styles.profileImage}
        source={require('../../../../assets/images/perfil.png')} // Imagem local
      />

      {/* Nome do usuário */}
      <Text style={styles.userName}>Maria Viana</Text>

      {/* Username do usuário */}
      <Text style={styles.userHandle}>@mariaviana</Text>

      {/* Botão de editar perfil */}
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Editar perfil</Text>
      </TouchableOpacity>

      {/* Linha divisória */}
      <Image
        source={require('../../../../assets/images/linha.png')} // Caminho da imagem da linha
        style={styles.divider}
      />

      {/* Seção de opções */}
      <View style={styles.optionsContainer}>
        {/* Opção Formulário */}
        <TouchableOpacity style={styles.optionContainer}>
          <Image
            style={styles.optionImage}
            source={require('../../../../assets/images/retangulo.png')} // Imagem local do formulário
          />
          <Text style={styles.optionText}>Formulário</Text>
        </TouchableOpacity>

        {/* Opção Política de Privacidade */}
        <TouchableOpacity style={styles.optionContainer}>
          <Image
            style={styles.optionImage}
            source={require('../../../../assets/images/retangulo.png')} // Imagem local para Política de Privacidade
          />
          <Text style={styles.optionText}>Política de Privacidade</Text>
        </TouchableOpacity>

        <Image
          source={require('../../../../assets/images/linha.png')} // Caminho da imagem da linha
          style={styles.divider2}
        />

        {/* Opção Sair com imagem sobreposta */}
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.imageContainer}>
            {/* Imagem de fundo */}
            <Image
              style={styles.optionImage}
              source={require('../../../../assets/images/retangulo.png')} // Imagem de fundo
            />
            {/* Seta sobreposta */}
            <MaterialIcons
              style={styles.arrowImage}
              name="arrow-forward"
            />
          </View>
          <Text style={styles.optionText}>Sair</Text>
        </TouchableOpacity>

        {/* Novo exemplo de sobreposição de imagens */}
        <View style={styles.imageContainer}>
       
         
        
        </View>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    top: 50
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
    color: '#226752',
    top: 50

  },
  userHandle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    top: 50

  },
  editProfileButton: {
    backgroundColor: '#226752',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginBottom: 30,
    alignItems: 'center',
    top: 40

  },
  editProfileText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
    top: 25

  },
  divider2: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
    top: 50

  },
  optionsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    top: 50

  },
  optionImage: {
    width: 35,
    height: 35,
    marginRight: 20,
  },
  optionText: {
    fontSize: 18,
    color: '#226752',
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    width: 40,
    height: 40,
    marginRight: 20,
  },
  arrowImage: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 10,
    left: 12,
  },

 
 
});

export default UserProfileScreen;
