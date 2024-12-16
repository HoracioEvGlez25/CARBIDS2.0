import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileEs = () => {
    const navigation = useNavigation();

    useEffect(() => {
        console.log('Componente ProfileEs montado');
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.backButton}>{'← '}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.profileSection}>
                    <Image
                        source={require('../../assets/images/SF.jpg')}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>Jose Juan Lopez Gonzales</Text>
                    <Text style={styles.profileLocation}>Aguascalientes, AGS</Text>
                    <Text style={styles.profilePhone}>449-211-5051</Text>
                    <Text style={styles.profileEmail}>JoseJ.Glez@gmail.com</Text>
                    <Text style={styles.profileBio}>
                        Entusiasta de los autos y las motocicletas. Me gusta viajar y descubrir nuevos lugares.
                    </Text>
                </View>

                <View style={styles.statsSection}>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>5</Text>
                        <Text style={styles.statLabel}>Autos Vendidos</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>12</Text>
                        <Text style={styles.statLabel}>Autos en Venta</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.carTitle}>Jetta 2003 estándar</Text>
                    <Text style={styles.carStatus}>Disponible</Text>
                    <Image
                        source={require('../../assets/images/Jetta03.jpg')}
                        style={styles.carImage}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    header: {
        backgroundColor: '#1e90ff',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    profileSection: {
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#1e90ff',
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    profileLocation: {
        fontSize: 16,
        color: '#555',
        marginVertical: 5,
    },
    profilePhone: {
        fontSize: 16,
        color: '#1e90ff',
        fontWeight: '600',
        marginTop: 8,
    },
    profileEmail: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
        fontStyle: 'italic',
    },
    profileBio: {
        fontSize: 14,
        color: '#777',
        marginTop: 10,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    statsSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    statCard: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        width: 120,
    },
    statNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1e90ff',
    },
    statLabel: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    card: {
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    carTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    carStatus: {
        fontSize: 16,
        color: '#28a745',
        fontWeight: '600',
        marginBottom: 15,
    },
    carImage: {
        width: '100%',
        height: 180,
        borderRadius: 10,
    },
});

export default ProfileEs;
