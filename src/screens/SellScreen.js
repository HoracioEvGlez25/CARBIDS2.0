import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { getAuth } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const SellCarScreen = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);
  const [carDetails, setCarDetails] = useState({
    title: '',
    description: '',
    price: '',
  });

  const handleImportImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Selección de imagen cancelada');
      } else if (response.errorMessage) {
        console.error('Error al seleccionar la imagen:', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setImageUri(uri);
      }
    });
  };

  const handlePublish = async () => {
    const { title, description, price } = carDetails;

    if (!title || !description || !price) {
      Alert.alert('Error', 'Por favor completa todos los campos obligatorios.');
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      Alert.alert('Error', 'Debes estar autenticado para publicar el coche.');
      return;
    }

    const newCar = {
      userId: user.uid, 
      image: imageUri,
      title: title,
      description: description,
      price: price,
    };

    try {
      await addDoc(collection(db, 'myCars'), newCar);
      Alert.alert('¡Éxito!', 'Tu coche fue publicado correctamente.', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      console.error('Error al agregar documento: ', error);
      Alert.alert('Error', 'No se pudo publicar tu coche.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Publica tu carro</Text>

        <TouchableOpacity style={styles.importButton} onPress={handleImportImage}>
          <Text style={styles.importButtonText}>Subir Imagen</Text>
        </TouchableOpacity>

        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={styles.imagePreview}
            resizeMode="cover"
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Marca y modelo del vehículo"
          placeholderTextColor="#aaa"
          value={carDetails.title}
          onChangeText={(text) => setCarDetails({ ...carDetails, title: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          placeholderTextColor="#aaa"
          multiline
          value={carDetails.description}
          onChangeText={(text) => setCarDetails({ ...carDetails, description: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Precio inicial"
          placeholderTextColor="#aaa"
          value={carDetails.price}
          onChangeText={(text) => setCarDetails({ ...carDetails, price: text })}
        />

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.deleteButton} onPress={() => navigation.goBack()}>
            <Text style={styles.deleteButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
            <Text style={styles.publishButtonText}>Publicar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
    textAlign: 'center',
    marginBottom: 20,
  },
  importButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  importButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    color: '#495057',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  publishButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  publishButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SellCarScreen;
