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
        <TouchableOpacity style={styles.formContainer}>
          <Image
            style={styles.formImage}
            source={require('../../../../assets/images/retangulo.png')} // Imagem local do formulário
          />
          <Text style={styles.optionText}>Formulário</Text>
        </TouchableOpacity>

        {/* Opção Política de Privacidade */}
        <TouchableOpacity style={styles.policyContainer}>
          <Image
            style={styles.policyImage}
            source={require('../../../../assets/images/retangulo.png')} // Imagem local para Política de Privacidade
          />
          <Text style={styles.optionText}>Política de Privacidade</Text>
        </TouchableOpacity>

        <Image
        source={require('../../../../assets/images/linha.png')} // Caminho da imagem da linha
        style={styles.divider2}
      />

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
          <Text style={styles.optionText2}>Sair</Text>
        </TouchableOpacity>

        {/* Novo exemplo de sobreposição de imagens */}
        <View style={styles.imageContainer}>
          {/* Imagem de fundo */}
          <Image
            style={styles.bola}
            source={require('../../../../assets/images/circulo.png')} // Imagem de fundo
          />
          {/* Imagem sobreposta */}
          <MaterialIcons
            style={styles.seta}
            name="arrow-forward"
          />

          <Image
            style={styles.bola2}
            source={require('../../../../assets/images/circulo.png')} // Imagem de fundo
          />
          {/* Imagem sobreposta */}
          <MaterialIcons
            style={styles.seta2}
            name="arrow-forward"
          />
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
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    marginBottom: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 90,
  },
  userName: {
    fontSize: 22,
    fontWeight: '400',
    marginBottom: 2,
    top: -80,
  },
  userHandle: {
    fontSize: 17.5,
    color: 'gray',
    marginBottom: 10,
    top: -80,
  },
  editProfileButton: {
    backgroundColor: '#226752',
    opacity: 0.7,
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 20,
    top: -75,
    marginBottom: 40,
    alignItems: 'center',
  },
  editProfileText: {
    color: '#ffffff',
    fontWeight: '900',
    fontSize: 16,
  },
  divider: {
    width: '90%',
    height: 1,
    marginBottom: 30,
    top: -55,
  },
  divider2: {
    width: '103%',
    height: 1,
    top: -65,
    marginLeft: -4,
  },

  optionsContainer: {
    width: '100%',
    paddingHorizontal: 20,
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
  formImage: {
    width: '11%',
    height: '150%',
  },
  formImageset: {
    top: 5,
    left: 1,
    width: '100%',
    height: '100%',
  },
  arrowImage: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 22,
    left: 19,
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  policyContainer: {
    marginLeft: 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 90,
    top: -30,
  },
  policyImage: {
    width: 35,
    height: 33,
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 0,
    alignSelf: 'center',
  },
  optionText2: {
    top: 5,
    left: 4.5,
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 0,
    alignSelf: 'center',
  },
  bola: {
  top: -249,
  left: 256,
  },
  seta: {
    top: -262,
    left: 262,
  },

  bola2: {
    top: -228,
    left: 256.5,
    },
    seta2: {
      top: -241,
      left: 263,
    },
});

export default UserProfileScreen;