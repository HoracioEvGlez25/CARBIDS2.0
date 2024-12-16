// ReunionScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const ReunionScreen = ({ setMeetings }) => {
  const [vendedor, setVendedor] = useState('');
  const [comprador, setComprador] = useState('');
  const [zonaReunion, setZonaReunion] = useState('');
  const [vestimenta, setVestimenta] = useState('');
  const [cocheInteres, setCocheInteres] = useState('');
  const [emergencia, setEmergencia] = useState('');
  const [horaReunion, setHoraReunion] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleHoraSeleccionada = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setHoraReunion(selectedDate);
    }
  };

  const handleGuardar = () => {
    const meeting = {
      vendedor,
      comprador,
      zonaReunion,
      vestimenta,
      cocheInteres,
      emergencia,
      horaReunion: horaReunion.toLocaleTimeString(),
    };
    
    // Agregar la reunión a la lista
    setMeetings(prevMeetings => [...prevMeetings, meeting]);

    // Confirmación
    Alert.alert('Datos guardados', `Reunión a las ${horaReunion.toLocaleTimeString()}`);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Usuario vendedor"
          value={vendedor}
          onChangeText={setVendedor}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuario comprador"
          value={comprador}
          onChangeText={setComprador}
        />
        <TextInput
          style={styles.input}
          placeholder="Zona de reunión"
          value={zonaReunion}
          onChangeText={setZonaReunion}
        />
        <TextInput
          style={styles.input}
          placeholder="Vestimenta del comprador"
          value={vestimenta}
          onChangeText={setVestimenta}
        />
        <TextInput
          style={styles.input}
          placeholder="Coche de interés"
          value={cocheInteres}
          onChangeText={setCocheInteres}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de emergencia"
          keyboardType="numeric"
          value={emergencia}
          onChangeText={setEmergencia}
        />

        <TouchableOpacity style={styles.assignButton} onPress={() => setShowPicker(true)}>
          <Text style={styles.assignButtonText}>Asignar hora de reunión</Text>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={horaReunion}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={handleHoraSeleccionada}
          />
        )}

        <TouchableOpacity style={styles.saveButton} onPress={handleGuardar}>
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ReunionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  assignButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  assignButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#34c759',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
