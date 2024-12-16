import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native"; 
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../utils/firebase.js';
import Toast from 'react-native-toast-message';

const RegisterScreen = ({ setIsAuthenticated }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!name || !surname || !email || !password) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }
    if (!isChecked) {
      Alert.alert("Error", "Debes aceptar los términos y condiciones");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado:', userCredential.user);

      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('username', name);
      
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Registro exitoso',
        text2: 'Bienvenido a la aplicación!',
      });

    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
      
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error al registrar',
        text2: 'Hubo un problema al registrar el usuario',
      });
    }

    setIsAuthenticated(true);
    navigation.navigate("MainTab");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Regístrate en CARBIDS</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Crea tu cuenta</Text>
          <TextInput
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <TextInput
            placeholder="Apellido"
            value={surname}
            onChangeText={setSurname}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <TextInput
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setIsChecked(!isChecked)}
              style={styles.checkbox}
            >
              <Text style={{ color: isChecked ? "#1e90ff" : "#aaa" }}>
                {isChecked ? "☑" : "☐"}
              </Text>
            </TouchableOpacity>
            <Text style={styles.checkboxText}>
              Acepto los
              <Text
                style={styles.linkText}
                onPress={() => Alert.alert("Términos y Condiciones")}
              >
                {" Términos y Condiciones"}
              </Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={styles.linkText}>¿Ya tienes una cuenta? Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f9fd",
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    backgroundColor: "#1e90ff",
    width: "100%",
    padding: 20,
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  formContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#f0f4f8",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    color: "#333",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: "#333",
  },
  linkText: {
    color: "#1e90ff",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  registerButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkContainer: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default RegisterScreen;
