import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function SupportHelp() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Encuentra soporte y ayuda aquí</Text>
            <Text style={styles.description}>
                Si tienes algún problema o duda, puedes acceder a nuestras guías, 
                contactar con soporte técnico o revisar las preguntas frecuentes.
            </Text>
            
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Ver FAQ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Contactar Soporte</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Guías de Usuario</Text>
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
        backgroundColor: '#007BFF',
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

export default SupportHelp;
