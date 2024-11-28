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
import { collection, addDoc } from "firebase/firestore";

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

  const limparInputs = () => {
    setName("");
    setData("");
    setGenero("");
    setEmail("");
    setTel("");
    setCidade("");
    setCEP("");
    setDoença("");
    setTratamentos("");
    setFrequencia("");
    setMedicamentos("");
    setAcompanhamento("");
    setAcessibilidade("");
    setDetalhes("");
  };

  const handleSubmit = async () => {
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
        const formDocRef = collection(db, "Formulario");
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

        // Limpar os inputs após envio
        limparInputs();

        Alert.alert('Sucesso!', 'Formulário enviado com sucesso!');
      } catch (error) {
        Alert.alert("Erro:", `${error}`);
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Substituindo Caremap por logo */}
        <View style={styles.logoContainer}>
          <Image source={require('../../../../assets/images/LOGO CORACÃO PNG.png')} style={styles.logo} />
        </View>

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

        {/* Formulário 2 */}
        <Text style={styles.subtitle}>Localização</Text>
        <TextInput
          style={styles.input}
          value={cidade}
          onChangeText={setCidade}
          placeholder="Cidade/Estado"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          value={CEP}
          onChangeText={setCEP}
          placeholder="CEP"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />
        <Text style={styles.subtitle}>Informações de Saúde</Text>
        <TextInput
          style={styles.input}
          value={doença}
          onChangeText={setDoença}
          placeholder="Tipo de Doença ou Síndrome"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          value={tratamentos}
          onChangeText={setTratamentos}
          placeholder="Tratamentos em Andamento"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          value={frequencia}
          onChangeText={setFrequencia}
          placeholder="Frequência de Atendimento Médico"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          value={medicamentos}
          onChangeText={setMedicamentos}
          placeholder="Medicamentos Específicos"
          placeholderTextColor="#aaa"
        />

        {/* Formulário 3 */}
        <Text style={styles.subtitle}>Necessidade de Acompanhamento Médico</Text>
        <View style={styles.genderContainer}>
          {['Sim', 'Não'].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.genderBox, acompanhamento === option && styles.selectedGender]}
              onPress={() => setAcompanhamento(option)}
            >
              <Text style={[styles.genderText, acompanhamento === option && styles.selectedGenderText]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.subtitle}>Hospitais com Acessibilidade</Text>
        <TextInput
          style={styles.input}
          value={acessibilidade}
          onChangeText={setAcessibilidade}
          placeholder="Hospitais com Acessibilidade"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          value={detalhes}
          onChangeText={setDetalhes}
          placeholder="Detalhes Adicionais"
          placeholderTextColor="#aaa"
        />

        {/* Botão Enviar */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
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
    marginBottom: -10,
  },
  logo: {
    width: 52,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
    color: '#226752',
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: 'bold',
  },
  map: {
    fontWeight: '300',
    color: 'black',
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
});

export default App;
