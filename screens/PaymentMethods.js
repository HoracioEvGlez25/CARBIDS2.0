import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';

function PaymentMethods() {
    const [paymentMethods, setPaymentMethods] = useState([
        { id: '1', type: 'Tarjeta de Crédito', last4: '1234' },
        { id: '2', type: 'PayPal', last4: '****' },
        { id: '3', type: 'Tarjeta de Débito', last4: '5678' },
    ]);

    const addPaymentMethod = () => {
        Alert.alert('Añadir Método de Pago', 'Redirigiendo a la pantalla de agregar tarjeta o cuenta PayPal.');
    };

    const handleRemoveMethod = (id) => {
        setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
        Alert.alert('Método Eliminado', 'El método de pago ha sido eliminado correctamente.');
    };

    const renderItem = ({ item }) => (
        <View style={styles.paymentMethodItem}>
            <Text style={styles.paymentMethodText}>
                {item.type} - Últimos 4 dígitos: {item.last4}
            </Text>
            <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveMethod(item.id)}
            >
                <Text style={styles.removeButtonText}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gestiona tus métodos de pago</Text>
            <FlatList
                data={paymentMethods}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={addPaymentMethod}
            >
                <Text style={styles.addButtonText}>Añadir método de pago</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    list: {
        paddingHorizontal: 20,
    },
    paymentMethodItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    paymentMethodText: {
        fontSize: 16,
        color: '#333',
    },
    removeButton: {
        backgroundColor: '#f44336',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    addButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default PaymentMethods;
