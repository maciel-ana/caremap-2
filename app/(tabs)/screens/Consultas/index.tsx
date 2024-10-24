import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const statusBarHeight = Constants.statusBarHeight;

type Props = {
  navigation: NavigationProp<any>;
};

const availableTimes = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00'];

export default function Consulta({ navigation }: Props) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Função para voltar
  const handleBackPress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.goBack();
    });
  };

  // Selecionar data do calendário
  const onDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
  };

  // Selecionar horário
  const handleTimeSelect = (time: string) => {
    setSelectedTime(selectedTime === time ? null : time); // Alterna a seleção
  };

  // Confirmar agendamento
  const handleConfirmAppointment = () => {
    if (selectedDate && selectedTime) {
      navigation.navigate('ConfirmationPage', { date: selectedDate, time: selectedTime });
    } else {
      alert('Por favor, selecione uma data e um horário.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Icon name="arrow-back" size={24} color="#226752" />
        </Animated.View>
      </TouchableOpacity>

      <Text style={styles.title}>Detalhes do Doutor</Text>

      {/* Informações do doutor */}
      <View style={styles.square}>
        <Image 
          source={require('../../../../assets/images/pessoa1.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>Dra. Mariana Carvalho</Text>
          <Text style={styles.itemSubtitle}>Geneticista</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.starBox}>
              <Icon name="star" size={14} color="black" />
            </View>
            <Text style={styles.ratingNumber}>5</Text>
          </View>
          <View style={styles.locationContainer}>
            <Icon name="location-outline" size={14} color="black" />
            <Text style={styles.locationText}>10Km de você</Text>
          </View>
        </View>
      </View>

      {/* Doenças tratadas */}
      <View style={styles.diseasesContainer}>
        <Text style={styles.diseasesTitle}>Doenças tratadas</Text>
        {['Doenças Congênitas, Hereditárias e Neonatais', 'Doenças Raras', 'Aberrações Cromossômicas', 'Síndrome de Down', 'Abortamento Habitual'].map((disease, index) => (
          <TouchableOpacity key={index} style={styles.diseaseItem}>
            <Text style={styles.diseaseText}>{disease}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.seeMoreButton}>
          <Text style={styles.seeMoreText}>Ver mais</Text>
        </TouchableOpacity>
      </View>

      {/* Marcação de consulta */}
      <View style={styles.appointmentContainer}>
        <Text style={styles.appointmentTitle}>Marcar Consulta</Text>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: { selected: true, disableTouchEvent: true, selectedColor: '#226752' },
          }}
          style={styles.calendar}
        />
      </View>

      {/* Horários disponíveis */}
      <View style={styles.timeSlotsContainer}>
        <Text style={styles.timeSlotsTitle}>Horários Disponíveis</Text>
        <View style={styles.timeSlots}>
          {availableTimes.map((time, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.timeSlot, selectedTime === time && styles.selectedTimeSlot]}
              onPress={() => handleTimeSelect(time)}
            >
              <Text style={styles.timeSlotText}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Exibir data e horário da consulta */}
      <View style={styles.confirmationDetails}>
        <Text style={styles.confirmationText}>
          {selectedDate ? `Data: ${selectedDate}` : 'Data: Nenhuma selecionada'}
        </Text>
        <Text style={styles.confirmationText}>
          {selectedTime ? `Horário: ${selectedTime}` : 'Horário: Nenhum selecionado'}
        </Text>
      </View>

      {/* Botão de confirmação */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmAppointment}>
        <Text style={styles.confirmButtonText}>Marcar Consulta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: statusBarHeight + 16,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: statusBarHeight + 16,
    left: 16,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#226752',
    marginTop: 16,
  },
  square: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderColor: '#226752',
    borderWidth: 1,
    height: 160,
    marginTop: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: 130,
    height: 140,
    borderRadius: 10,
    marginRight: 25,
    left: 13,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#226752',
    top: -7,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
    top: -3,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    top: 22,
  },
  starBox: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5,
  },
  ratingNumber: {
    fontSize: 12,
    color: 'black',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    top: -30,
  },
  locationText: {
    fontSize: 12,
    color: 'black',
    marginLeft: 5,
  },
  diseasesContainer: {
    marginTop: 20,
    width: '100%',
  },
  diseasesTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#226752',
    marginBottom: 10,
  },
  diseaseItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  diseaseText: {
    fontSize: 12,
    color: '#333',
  },
  seeMoreButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  seeMoreText: {
    fontSize: 12,
    color: '#226752',
    fontWeight: 'bold',
  },
  appointmentContainer: {
    marginTop: 20,
    width: '100%',
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#226752',
    marginBottom: 10,
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  timeSlotsContainer: {
    marginTop: 20,
    width: '100%',
  },
  timeSlotsTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#226752',
    marginBottom: 10,
  },
  timeSlots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeSlot: {
    borderWidth: 1,
    borderColor: '#226752',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: '45%',
    alignItems: 'center',
  },
  selectedTimeSlot: {
    backgroundColor: '#22675287',
  },
  timeSlotText: {
    color: 'black',
  },
  confirmationDetails: {
    marginTop: 20,
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 16,
    color: '#226752',
    marginBottom: 5,
  },
  confirmButton: {
    marginTop: 30,
    backgroundColor: '#226752',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    height: 50,
    width:200
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

