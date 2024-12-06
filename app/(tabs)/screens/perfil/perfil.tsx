import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { auth, db } from '@/firebase_config';
import { getDoc, doc } from 'firebase/firestore';
import { Link, useRouter } from 'expo-router';

const UserProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState({ Email: '', Nome: '' });
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const userUIDLoged = user?.uid;

  const fetchContact = async () => {
    if (!userUIDLoged) return;

    try {
      const UsersDoc = await getDoc(doc(db, 'Users', userUIDLoged));
      if (UsersDoc.exists()) {
        setUsers(UsersDoc.data());
      } else {
        Alert.alert("Usuário não encontrado, contate um adm.");
      }
    } catch (error) {
      Alert.alert("Erro ao buscar dados: ", error.message);
    }
  };

  useEffect(() => {
    fetchContact();
  }, [userUIDLoged]);

  const refreshData = () => {
    fetchContact();
  };

  const userSignOut = () => {
    auth.signOut()
      .then(() => {
        router.replace('/login');
      })
      .catch((error) => {
        Alert.alert("Erro ao sair: ", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require('../../../../assets/images/perfil.png')}
      />
      <Text style={styles.userName}>{user ? users.Nome : 'Usuário não autenticado'}</Text>
      <Text style={styles.userHandle}>@{user ? users.Nome : ''}</Text>

      <View style={styles.divBtns}>
        <TouchableOpacity style={styles.editProfileButton}>
          <Link href="/(tabs)/screens/Home/home">
            <Text style={styles.editProfileText}>Home</Text>
          </Link>
        </TouchableOpacity>

        {user && (
          <View style={styles.btnDiv2}>
            <TouchableOpacity style={styles.editProfileButton} onPress={refreshData}>
              <Text style={styles.editProfileText}>Atualizar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.editProfileButton} onPress={userSignOut}>
              <Text style={styles.editProfileText}>Sair do perfil</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Image source={require('../../../../assets/images/linha.png')} style={styles.divider} />

      <View style={styles.optionsContainer}>
        <Link href="/(tabs)/screens/forms/forms" style={styles.optionContainer}>
          <Image
            style={styles.optionImage}
            source={require('../../../../assets/images/retangulo.png')}
          />
          <Text style={styles.textForms}>Formulário</Text>
        </Link>

        <TouchableOpacity style={styles.optionContainer}>
          <Image
            style={styles.optionImage}
            source={require('../../../../assets/images/retangulo.png')}
          />
          <Text style={styles.optionText}>Política de Privacidade</Text>
        </TouchableOpacity>

        <Image source={require('../../../../assets/images/linha.png')} style={styles.divider2} />

        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.optionImage}
              source={require('../../../../assets/images/retangulo.png')}
            />
            <MaterialIcons style={styles.arrowImage} name="arrow-forward" />
          </View>
          <Text style={styles.optionText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos...

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
