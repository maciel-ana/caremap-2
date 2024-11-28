import { Pressable, Text, StyleSheet, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

export default function Page() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <Link href="./index" asChild>
        <Pressable>
          {/* Substituindo o texto "Care map" por uma logo */}
          <Image source={require('../../assets/images/LOGO CORACÃO PNG.png')} style={styles.logo} />
        </Pressable>
      </Link>
      <View style={styles.circle}>
        <Text style={styles.welcome}>Bem Vindo ao</Text>
        <Text style={styles.welcome}>CareMap!</Text>
        <View style={styles.line}></View>
        <Text style={styles.textWelcome}>
          Nosso app conecta pacientes {'\n'}
          com doenças raras a hospitais{'\n'}
          especializados de forma fácil.
        </Text>
        <Link href="../screens/bemVindo/Welcome" style={styles.arrow}>
          <MaterialIcons name="arrow-forward" size={24} color="#000"  />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(72, 201, 143, 0.534)', // Opacidade reduzida para 0.1, deixando bem claro
    fontFamily: 'Poppins'
  },
  
  
  
  logo: {
    width: 150,  // Ajuste o tamanho conforme necessário
    height: 50,  // Ajuste a altura conforme necessário
    resizeMode: 'contain', // A imagem se ajusta proporcionalmente ao tamanho definido
    top: 70,  // Alinha a logo na posição correta
  },
  
  circle: {
    width: 350, 
    height: 350,
    borderRadius: 200, 
    backgroundColor: '#ffffff',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: '40%',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  welcome: {
    color: '#226752',
    fontSize: 27,
    fontWeight: '800',
    textAlign: 'center',
  },
  line: {
    width: '55%',
    height: 1, 
    backgroundColor: 'black',
    marginTop: '5%',
  },
  textWelcome: {
    color: '#000000',
    fontSize: 15,
    textAlign: 'center',
    paddingTop: '8%',
    fontWeight: '300',
  },
  arrow: {
    paddingTop: '10%'
  }
});
