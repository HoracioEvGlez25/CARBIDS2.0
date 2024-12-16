// Meetings.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Meetings = ({ meetings }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Reuniones Programadas</Text>
      {meetings.length === 0 ? (
        <Text>No hay reuniones programadas.</Text>
      ) : (
        meetings.map((meeting, index) => (
          <View key={index} style={styles.meetingCard}>
            <Text style={styles.meetingText}>Vendedor: {meeting.vendedor}</Text>
            <Text style={styles.meetingText}>Comprador: {meeting.comprador}</Text>
            <Text style={styles.meetingText}>Zona: {meeting.zonaReunion}</Text>
            <Text style={styles.meetingText}>Hora: {meeting.horaReunion}</Text>
            <Text style={styles.meetingText}>Coche de Interés: {meeting.cocheInteres}</Text>
            <Text style={styles.meetingText}>Emergencia: {meeting.emergencia}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  meetingCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  meetingText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Meetings;
