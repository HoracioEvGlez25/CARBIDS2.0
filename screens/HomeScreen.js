import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

function HomeScreen({ navigation }) {
    const products = [
        {
            title: 'Jeep Grand Cherokee 2005',
            price: 100000, // El precio ahora es un número
            description: 'Motor y transmisión en perfecto estado',
            image: require('../../assets/images/Cherokee05.jpg'),
        },
        {
            title: 'Volkswagen Jetta 2015',
            price: 180000, // El precio ahora es un número
            description: 'Automático, único dueño',
            image: require('../../assets/images/Jetta2015.jpeg'),
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Bienvenido a CARBIDS</Text>
            </View>

            <View style={styles.productList}> 
                {products.map((product, index) => (
                    <View style={styles.card} key={index}>
                        <Image source={product.image} style={styles.cardImage} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{product.title}</Text>
                            <Text style={styles.cardPrice}>${product.price.toLocaleString()}</Text>
                            <Text style={styles.cardDescription}>{product.description}</Text>
                            <TouchableOpacity
                                style={styles.cardButton}
                                onPress={() =>
                                    navigation.navigate('Details', {
                                        title: product.title,
                                        price: product.price, // Pasamos el precio como número
                                        description: product.description,
                                        image: product.image,
                                    })
                                }
                            >
                                <Text style={styles.cardButtonText}>Ver</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 20,
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    productList: {
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    cardImage: {
        width: '100%',
        height: 200,
    },
    cardContent: {
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    cardButton: {
        backgroundColor: '#28a745',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    cardButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
