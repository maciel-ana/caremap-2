import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { auth, db } from '@/firebase_config';
import { collection, addDoc, Timestamp, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const [user, setUser] = useState(null);
  const [users, setUsers] = useState({ Email: '', Nome: '', DataNascimento: '' });

  auth.onAuthStateChanged((user) => { 
    setUser(user) 
  });

  let userUIDLoged;
    if(user) {
        userUIDLoged = user.uid;

        console.log(`uid: ${userUIDLoged}`);
    } else {
      console.log("fds")
    }

    useEffect(() => {
      async function fetchContact() {
        try {
          // Recupera os dados do contato pela ID
          const UsersDoc = await getDoc(doc(db, 'Users', userUIDLoged));
          if (UsersDoc.exists()) {
            const userData = UsersDoc.data();
            setUsers(userData);
            setName(userData.Nome);
            setEmail(userData.Email);
            setBirthdate(userData.DataNascimento);
            console.log(userData.DataNascimento); 
          } else {
            Alert.alert("Usuário não encontrado, contate um adm.");
          }
        } catch (error) {
          // Alert.alert(`${error}`);
        }
      }
    
      fetchContact(); // Chama a função
    }, [userUIDLoged]);
    

  const handleSave = async () => {
    if (!user) {
      Alert.alert('Erro', 'Você precisa estar autenticado para salvar alterações.');
      return;
    }
  
    try {
      // Referência ao documento do usuário com base no UID
      const userDocRef = doc(db, 'Users', user.uid);
  
      // Atualiza apenas os campos que foram editados
      await updateDoc(userDocRef, {
        Nome: name,
        Email: email,
        DataNascimento: birthdate,
      });
  
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro', `Não foi possível salvar as alterações: ${error.message}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Editar Perfil</Text>

      {/* Imagem de perfil e botões */}
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('../../../../assets/images/perfil.png')}
        />
        <TouchableOpacity>
          <Image
            style={styles.extraImage}
            source={require('../../../../assets/images/trocarimg.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Campos de texto */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="grey"
        value={user ? name : 'Usuário não autenticado'}
        onChangeText={setName}
        editable={!!user} // Desativa se o usuário não estiver autenticado
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="grey"
        value={user ? email : 'Usuário não autenticado'}
        onChangeText={setEmail}
        keyboardType="email-address"
        editable={!!user} // Desativa se o usuário não estiver autenticado
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        placeholderTextColor="grey"
        value={user ? birthdate : 'Usuário não autenticado'}
        onChangeText={setBirthdate}
        keyboardType="numeric"
        editable={!!user} // Desativa se o usuário não estiver autenticado
      />

      {/* Botão de salvar */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={[styles.saveButtonText, !user && { backgroundColor: '#ccc' }]} onPress={handleSave} disabled={!user}>Salvar</Text>
      </TouchableOpacity>

      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => Alert.alert('Voltando...')}>
        <MaterialIcons name="arrow-back" size={24} color="#226752" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#226752',
    top: 50
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    top: 60

  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  extraImage: {
    width: 24,
    height: 24,
    marginTop: -20,
    alignSelf: 'center',
  },
  input: {
    width: '90%',
    padding: 12,
    paddingLeft: 17,
    borderRadius: 20,
    backgroundColor: '#e2e2e2',
    marginBottom: 20,
    top: 90,
    left: 20

  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 20,
    
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 30,
    top: 100,

  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  saveButton: {
    backgroundColor: '#226752',
    width: 342,
    padding: 15,
    borderRadius: 26,
    alignItems: 'center',
    marginTop: 10,
    top: 80,
    left:18

  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    top: 80

  },
  backButtonText: {
    fontSize: 16,
    color: '#226752',
    marginLeft: 5,
  },
});

export default EditProfileScreen;
