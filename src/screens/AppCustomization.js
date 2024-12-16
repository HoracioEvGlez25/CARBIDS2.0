import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function AppCustomization() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Personaliza tu aplicación</Text>
            <Text style={styles.description}>
                Ajusta la apariencia y las funciones de la aplicación a tu gusto. 
                Puedes cambiar temas, colores y más opciones aquí.
            </Text>
            
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Cambiar Tema</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Configurar Notificaciones</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Cambiar Idioma</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    options: {
        width: '100%',
        alignItems: 'center',
    },
    optionButton: {
        backgroundColor: '#28a745',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AppCustomization;
