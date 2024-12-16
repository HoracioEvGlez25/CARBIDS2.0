import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const LoginScreen = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Por favor, ingresa tus credenciales');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Usuario autenticado:', userCredential.user);

            Alert.alert('Éxito', 'Inicio de sesión exitoso');
            setIsAuthenticated(true);
            navigation.navigate('MainTab');
        } catch (error) {
            console.error('Error al iniciar sesión:', error.message);
            Alert.alert('Error', 'Correo o contraseña incorrectos');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bienvenido a CARBIDS</Text>
                </View>
                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/images/Carbidslogo.png')} style={styles.logo} />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Inicia Sesión</Text>
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
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    <View style={styles.linkContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                            <Text style={styles.linkText}>Crear una cuenta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                            <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
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
        backgroundColor: '#f8f9fd',
        alignItems: 'center',
        paddingVertical: 20,
    },
    header: {
        backgroundColor: '#1e90ff',
        width: '100%',
        padding: 20,
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    headerText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    logoContainer: {
        marginVertical: 30,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    formContainer: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#f0f4f8',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        marginBottom: 15,
        color: '#333',
    },
    loginButton: {
        backgroundColor: '#1e90ff',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    linkText: {
        color: '#1e90ff',
        fontSize: 14,
        fontWeight: '600',
        marginVertical: 5,
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
