import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';
import { useAppContext } from '../contexts/favoritosContext'; // Ajusta la ruta aquí
import { useNavigation } from '@react-navigation/native'; // Importa para navegación

const MisFavoritos = () => {
  const { favorites } = useAppContext(); // Accede a los favoritos
  const navigation = useNavigation(); // Hook de navegación

  // Función para manejar la navegación al detalle del favorito
  const handleNavigate = (item) => {
    navigation.navigate('DetalleFavorito', { item }); // Navega a la pantalla de detalle, pasando el item
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Favoritos</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.favoriteItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>${item.price.toLocaleString()}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Button
              title="Ver detalles"
              onPress={() => handleNavigate(item)} // Al presionar, navega a la pantalla de detalle
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  favoriteItem: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  itemPrice: {
    fontSize: 16,
    color: '#007AFF',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default MisFavoritos;
