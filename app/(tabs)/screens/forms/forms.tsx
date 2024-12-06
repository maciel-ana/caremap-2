import { db } from '@/firebase_config';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'react-router-native';

const App = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState('');
  const [genero, setGenero] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [cidade, setCidade] = useState('');
  const [CEP, setCEP] = useState('');
  const [doença, setDoença] = useState('');
  const [tratamentos, setTratamentos] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [medicamentos, setMedicamentos] = useState('');
  const [acompanhamento, setAcompanhamento] = useState('');
  const [acessibilidade, setAcessibilidade] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [termoAceito, setTermoAceito] = useState(false);

  const limparInputs = () => {
    setName('');
    setData('');
    setGenero('');
    setEmail('');
    setTel('');
    setCidade('');
    setCEP('');
    setDoença('');
    setTratamentos('');
    setFrequencia('');
    setMedicamentos('');
    setAcompanhamento('');
    setAcessibilidade('');
    setDetalhes('');
    setTermoAceito(false);
  };

  const handleSubmit = async () => {
    if (!termoAceito) {
      Alert.alert('Erro', 'Você deve aceitar os Termos de Uso antes de enviar.');
      return;
    }

    if (
      name &&
      data &&
      genero &&
      email &&
      tel &&
      cidade &&
      CEP &&
      doença &&
      tratamentos &&
      frequencia &&
      medicamentos &&
      acompanhamento &&
      acessibilidade &&
      detalhes
    ) {
      try {
        const formDocRef = collection(db, 'Formulario');
        await addDoc(formDocRef, {
          Nome: name,
          Data: data,
          Genero: genero,
          Email: email,
          Telefone: tel,
          Cidade: cidade,
          CEP: CEP,
          Doenca: doença,
          Tratamentos: tratamentos,
          Frequencia: frequencia,
          Medicamentos: medicamentos,
          Acompanhamento: acompanhamento,
          Acessibilidade: acessibilidade,
          Detalhes: detalhes,
        });

        limparInputs();
        Alert.alert('Sucesso!', 'Formulário enviado com sucesso!');
      } catch (error) {
        Alert.alert('Erro', `${error}`);
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('../../../../assets/images/LOGO_CORACAO.png')} style={styles.logo} />
        </View>

        {/* Seções do formulário */}
        <Text style={styles.subtitle}>Dados Pessoais</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nome completo"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          value={data}
          onChangeText={setData}
          placeholder="Data de nascimento"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={tel}
          onChangeText={setTel}
          placeholder="Telefone"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />
        <Text style={styles.subtitle}>Gênero</Text>
        <View style={styles.genderContainer}>
          {['feminino', 'masculino', 'outro'].map((g) => (
            <TouchableOpacity
              key={g}
              style={[styles.genderBox, genero === g && styles.selectedGender]}
              onPress={() => setGenero(g)}
            >
              <Text style={[styles.genderText, genero === g && styles.selectedGenderText]}>
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.subtitle}>Termos de Uso</Text>
        <View style={styles.termoContainer}>
          <TouchableOpacity
            onPress={() => setTermoAceito(!termoAceito)}
            style={styles.checkRectangle}
          >
            {termoAceito && <MaterialIcons name="check" size={20} color="#226752" />}
          </TouchableOpacity>
          <Text style={styles.termoText}>
            Li e estou de acordo com o
            <Link to="/termos">
              <Text style={styles.termHighlight}> Termo de Uso e Política de Privacidade</Text>
            </Link>
          </Text>
        </View>

        {/* Botão de envio */}
        <TouchableOpacity
          style={[styles.submitButton, !termoAceito && styles.disabledButton]}
          onPress={handleSubmit}
          disabled={!termoAceito}
        >
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 20,
    color: '#226752',
    marginVertical: 10,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  genderBox: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    marginHorizontal: 5,
  },
  selectedGender: {
    backgroundColor: '#d1e7dd',
    borderColor: '#226752',
  },
  genderText: {
    fontSize: 16,
  },
  selectedGenderText: {
    fontWeight: 'bold',
  },
  termoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkRectangle: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#226752',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  termoText: {
    fontSize: 14,
    color: '#333',
  },
  termHighlight: {
    color: '#226752',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#226752',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
});

export default App;
