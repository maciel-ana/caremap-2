import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Doutor = {
  nome: string;
  especialidade: string;
  distancia: string;
  rating: number;
  image: any;
};

type DoutoresProps = {
  onBackPress: () => void;
  onDoutorPress: (doutor: Doutor) => void; // Função para lidar com o clique no doutor
};

const doutoresData: Doutor[] = [
  {
    nome: 'Dra. Mariana Carvalho',
    especialidade: 'Geneticista',
    distancia: '10Km de você',
    rating: 5,
    image: require('../../../../assets/images/pessoa1.jpg'),
  },
  {
    nome: 'Dr. Matheus Castro',
    especialidade: 'Geneticista',
    distancia: '8Km de você',
    rating: 5,
    image: require('../../../../assets/images/pessoa2.jpg'),
  },
  {
    nome: 'Dr. Caio Graco Bruzaca',
    especialidade: 'Geneticista',
    distancia: '8Km de você',
    rating: 5,
    image: require('../../../../assets/images/pessoa3.jpg'),
  },
  {
    nome: 'Dr. Lucas Mustafa',
    especialidade: 'Geneticista',
    distancia: '8Km de você',
    rating: 5,
    image: require('../../../../assets/images/pessoa4.jpeg'),
  },
  {
    nome: 'Dr. Bruno Cavalcante',
    especialidade: 'Geneticista',
    distancia: '8Km de você',
    rating: 5,
    image: require('../../../../assets/images/pessoa5.jpg'),
  },
  {
    nome: 'Dra. Claudia Yamada Utagawa',
    especialidade: 'Geneticista',
    distancia: '8Km de você',
    rating: 5,
    image: require('../../../../assets/images/pessoa6.jpg'),
  },
];

const Doutores: React.FC<DoutoresProps> = ({ onBackPress, onDoutorPress }) => {
  return (
    <View style={styles.fullScreenContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#226752" />
      </TouchableOpacity>
      <Text style={styles.title}>Doutores</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {doutoresData.map((doutor, index) => (
          <TouchableOpacity key={index} onPress={() => onDoutorPress(doutor)} style={styles.square}>
            <Image source={doutor.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{doutor.nome}</Text>
              <Text style={styles.itemSubtitle}>{doutor.especialidade}</Text>
              <View style={styles.ratingContainer}>
                <Icon name="star" size={14} color="black" />
                <Text style={styles.ratingNumber}>{doutor.rating}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Icon name="location-on" size={14} color="black" />
                <Text style={styles.locationText}>{doutor.distancia}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 50,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#226752',
    marginTop: 50,
    textAlign: 'center',
    marginBottom: 20, // Adicionando espaçamento inferior
  },
  square: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 80,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#226752',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingNumber: {
    fontSize: 12,
    marginLeft: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 12,
    marginLeft: 5,
    color: '#666',
  },
});

export default Doutores;
