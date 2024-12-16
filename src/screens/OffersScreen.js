import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

function OffersScreen({ navigation }) {
    const products = [
        {
            id: 1,
            title: "Dodge Stratus 2005",
            price: "$40,000",
            description: "Carro en perfectas condiciones, solo le falta una pintadaxdd.",
            image: '../../assets/images/DodgeStratus.jpg',
        },
        {
            id: 2,
            title: "Tsuru Tuneado",
            price: "$25,000",
            description: "Perfecto pa conquistar chiquillas :))",
            image: '../../assets/images/TusruTuneado.jpg',
        },
        {
            id: 3,
            title: "Ford Fiesta",
            price: "$38,000",
            description: "Carro bastante comodo y util para moverse por la ciudad",
            image: '../../assets/images/FordFiesta.jpg',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Ofertas</Text>
            </View>
            <ScrollView contentContainerStyle={styles.offersContainer}>
                {products.map((product) => (
                    <View key={product.id} style={styles.offerCard}>
                        <Image
                            source={{ uri: product.image }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <View style={styles.offerDetails}>
                            <Text style={styles.offerTitle}>{product.title}</Text>
                            <Text style={styles.offerPrice}>{product.price}</Text>
                            <Text style={styles.offerDescription}>{product.description}</Text>
                            <TouchableOpacity
                                style={styles.cardButton}
                                onPress={() =>
                                    navigation.navigate('Details', {
                                        title: product.title,
                                        price: product.price,
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
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        backgroundColor: '#ff5722',
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    offersContainer: {
        padding: 15,
    },
    offerCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 6,
    },
    image: {
        height: 180,
        width: '100%',
        borderRadius: 10,
        marginBottom: 15,
    },
    offerDetails: {
        paddingHorizontal: 10,
    },
    offerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212121',
    },
    offerPrice: {
        fontSize: 16,
        color: '#ff5722',
        marginVertical: 8,
        fontWeight: '600',
    },
    offerDescription: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 15,
        lineHeight: 20,
    },
    cardButton: {
        backgroundColor: '#ff5722',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    cardButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default OffersScreen;
