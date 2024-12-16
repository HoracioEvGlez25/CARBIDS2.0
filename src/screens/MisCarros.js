import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebase';  
import { getAuth } from "firebase/auth";

function MisCarros() {
  const [cars, setCars] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const fetchCars = async () => {
      try {
        const q = query(collection(db, "myCars"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const carsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCars(carsList); 
      } catch (error) {
        console.error("Error al obtener los coches: ", error);
      }
    };

    fetchCars();
  }, [user]);

  return (
    <View style={styles.container}>
      {cars.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyMessage}>Aún no has publicado ningún carro.</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.carsContainer}>
          {cars.map((car) => (
            <View key={car.id} style={styles.carCard}>
              <Image
                source={{ uri: car.image }} 
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.carDetails}>
                <Text style={styles.carTitle}>{car.title}</Text>
                <Text style={styles.carPrice}>{car.price}</Text>
                <Text style={styles.carDescription}>{car.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  emptyMessage: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    textAlign: 'center',
    lineHeight: 26,
  },
  carsContainer: {
    padding: 10,
  },
  carCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    height: 160,
    width: '100%',
    borderRadius: 8,
    marginBottom: 10,
  },
  carDetails: {
    padding: 10,
  },
  carTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },
  carPrice: {
    fontSize: 16,
    color: '#007AFF',
    marginVertical: 5,
    fontWeight: '500',
  },
  carDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  addCarButton: {
    backgroundColor: '#28a745',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#28a745',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addCarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MisCarros;
