import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { Link } from 'expo-router';
import Constants from 'expo-constants';


const statusBarHeight = Constants.statusBarHeight;

export default function Indexn() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../../assets/images/fundo.png')} 
        style={styles.image} 
      />
      <View style={styles.square}>
        <Text style={styles.squareText}>Encontre os melhores hospitais para você</Text>
        <Text style={styles.subText}>Acesse sua conta ou crie uma!</Text>

        {/* Botão para acessar a conta */}
        <TouchableOpacity style={styles.buttonEnter}>
            <Link href="../screens/perfil/Login">
              <Text style={styles.buttonTextEnter}>Entre</Text>
            </Link>
        </TouchableOpacity>

        {/* Botão para criar uma conta */}
        <TouchableOpacity style={styles.buttonCreateAccount}>
            <Link href="../screens/perfil/Registro">
              <Text style={styles.buttonTextCreateAccount}>Crie uma conta</Text>
            </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  square: {
    position: 'absolute', // Keeps it centered
    width: 318,          // Width of the square
    height: 330,         // Height of the square
    backgroundColor: 'white', // Slightly transparent white
    borderRadius: 30,    // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,         // Padding for better spacing
    top: 430,
  },
  squareText: {
    color: '#000',       // Text color
    fontSize: 22,        // Text size
    textAlign: 'center', // Center the text
    marginBottom: 10,    // Space between the two texts
    top: -25,
  },
  subText: {
    color: '#000',       // Subtext color
    fontSize: 15,        // Subtext size
    textAlign: 'center', // Center the subtext
    top: -20,
    fontWeight: '200',
  },
  buttonEnter: {
    backgroundColor: '#619C95',
    borderRadius: 15,            
    textAlign: 'center',
    alignItems: 'center',       
    paddingVertical: 15,        
    marginVertical: 10,         
    width: 237,                 
    height:48 ,
  },
  buttonTextEnter: {
    color: 'white',              
    fontSize: 16,                
    fontWeight: 'bold',         
  },
  buttonCreateAccount: {
    backgroundColor: 'white',    
    borderRadius: 15,             
    borderWidth: 2,             
    borderColor: '#619C95',       // Cor da borda
    paddingVertical: 15,          // Padding vertical
    paddingHorizontal: 20,        // Padding horizontal
    marginVertical: 10,           // Espaço entre os botões
    width: 237,      
    height:48 ,
    alignItems: 'center',         // Centraliza o texto no botão
  },
  buttonTextCreateAccount: {
    color: '#619C95',             // Cor do texto do botão "Crie uma conta"
    fontSize: 14,                 // Tamanho do texto do botão
    fontWeight: '400',           // Negrito
  },
});
