import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';

interface HospitaisProps {
  navigation: NavigationProp<any>;
}

const data = [
  { id: '1', title: 'Hospital Beneficência Portuguesa', subtitle: '10Km de você', imageUri: require('../../../../assets/images/hosp1.jpg') },
  { id: '2', title: 'Hospital das Clínicas FMUSP', subtitle: '10Km de você', imageUri: require('../../../../assets/images/hosp2.jpg') },
  { id: '3', title: 'Hospital de Câncer de São Paulo', subtitle: '10Km de você', imageUri: require('../../../../assets/images/hosp3.jpg') },
  { id: '4', title: 'Hospital Sírio-Libanês', subtitle: '10Km de você', imageUri: require('../../../../assets/images/hosp4.jpg') },
  { id: '5', title: 'Hospital Infantil Sabará', subtitle: '10Km de você', imageUri: require('../../../../assets/images/hosp5.webp') },
  { id: '6', title: 'Hospital de Coração (HCor)', subtitle: '10Km de você', imageUri: require('../../../../assets/images/hosp1.jpg') },
  { id: '7', title: 'Hospital de Reabilitação de Anomalias Craniofaciais', subtitle: '10Km de você', imageUri: require('../../../../assets/images/hosp1.jpg') },
];

const Hospitais: React.FC<HospitaisProps> = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: { title: string; subtitle: string; imageUri: any } }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imageUri} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Icon name="arrow-back" size={24} color="#226752" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Hospitais</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 100,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 70,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#226752',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 15,
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
});

export default Hospitais;
