import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { auth, db } from '@/firebase_config';
import { collection, addDoc, Timestamp, doc, setDoc, getDoc } from 'firebase/firestore';
import { Link } from 'expo-router';

const UserProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState({ Email: '', Nome: '' });

  auth.onAuthStateChanged((user) => { 
    setUser(user) 
  });

  let userUIDLoged;
    if(user) {
        userUIDLoged = user.uid;
    }

    async function fetchContact() {
      try {
          // recupera os dados do contato pela id recuperada da URL
          const UsersDoc = await getDoc(doc(db, 'Users', userUIDLoged));
          if (UsersDoc.exists()) {
              // atualiza o estado do contato com os dados recuperados pelo id
              setUsers(UsersDoc.data());

              console.log(users)
          } else {
              Alert.alert("Usuário não encontrado, contate um adm.")
          }
      } catch (error) {
          // Alert.alert("deu ruim no CATCH" + ` ${error}`)
      }
  }
    useEffect(() => {
      fetchContact(); //chama a função
  }, [userUIDLoged]);

  const refreshData = () => {
    fetchContact();
  };

  function userSignOut() {
    auth.signOut()
    // navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>

      {/* Imagem do perfil */}
      <Image
        style={styles.profileImage}
        source={require('../../../../assets/images/perfil.png')} // Imagem local
      />

      {/* Nome do usuário */}
      <Text style={styles.userName}>{user ? users.Nome : 'Usuário não autenticado'}</Text>

      {/* Username do usuário */}
      <Text style={styles.userHandle}>@{user ? users.Nome : ''}</Text>

      {/* Botão de editar perfil */}
      <View style={styles.divBtns}>
        <TouchableOpacity style={styles.editProfileButton}>
          <Link href="/(tabs)/screens/perfil/editPerfil">
            <Text style={styles.editProfileText}>Editar perfil</Text>
          </Link>
        </TouchableOpacity>

        {user ? (
          <View style={styles.btnDiv2}>
            <TouchableOpacity style={styles.editProfileButton} onPress={refreshData}>
              <Text style={styles.editProfileText}>Atualizar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.editProfileButton} onPress={userSignOut}>
              <Text style={styles.editProfileText}>Sair do perfil</Text>
            </TouchableOpacity>
          </View>
        ) : ''}
      </View>
      

      {/* Linha divisória */}
      <Image
        source={require('../../../../assets/images/linha.png')} // Caminho da imagem da linha
        style={styles.divider}
      />

      {/* Seção de opções */}
      <View style={styles.optionsContainer}>
        {/* Opção Formulário */}
        <Link href="../screens/forms/forms" style={styles.optionContainer}>
          <Image
            style={styles.optionImage}
            source={require('../../../../assets/images/retangulo.png')} // Imagem local do formulário
          />
          <View style={styles.optionText2}>
            <Text style={styles.textForms}>Formulário</Text>
          </View>
        </Link>
      

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
    textAlign:'center',
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
  optionText2:{
    paddingLeft: '16%',
    paddingBottom: '3%',
    flex: 1,
  },
  textForms: {
    fontSize: 18,
    color: '#226752',
  },
  imageContainer: {
    position: 'relative',
    width: 40,
    height: 40,
    marginRight: 20,
  },
  arrowImage: {
    position: 'absolute',
    width: 70,
    height: 70,
    top: 10,
    left: 12,
  },
  divBtns: {
    display: "flex",
    flexDirection: "row",
  },
  btnDiv2: {
    display: "flex",
    flexDirection: "row",
  },
 
 
});

export default UserProfileScreen;
