import React from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

function MisFavoritos({ navigation }) {
    const favoriteCars = []; // Lista vacía

    return (
        <View style={styles.container}>
            {favoriteCars.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyMessage}>Aún no has agregado nada a tus favoritos.</Text>
                </View>
            ) : (
                <ScrollView contentContainerStyle={styles.carsContainer}>
                    {favoriteCars.map((product) => (
                        <View key={product.id} style={styles.carCard}>
                            <Image
                                source={{ uri: product.image }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                            <View style={styles.carDetails}>
                                <Text style={styles.carTitle}>{product.title}</Text>
                                <Text style={styles.carPrice}>{product.price}</Text>
                                <Text style={styles.carDescription}>{product.description}</Text>
                                <TouchableOpacity
                                    style={styles.viewButton}
                                    onPress={() => navigation.navigate('Details', {
                                        title: product.title,
                                        price: product.price,
                                        description: product.description,
                                        image: product.image,
                                    })}
                                >
                                    <Text style={styles.viewButtonText}>Ver</Text>
                                </TouchableOpacity>
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
    viewButton: {
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
    viewButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MisFavoritos;
