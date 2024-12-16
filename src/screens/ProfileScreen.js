import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const ProfileEs = () => {
    const navigation = useNavigation();
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        location: '',
        phone: '',
    });
    const auth = getAuth();
    const db = getFirestore();
    const currentUser = auth.currentUser;

    useEffect(() => {
        if (currentUser) {
            fetchUserData(currentUser.uid);
        }
    }, [currentUser]);

    const fetchUserData = async (userId) => {
        try {
            const userDoc = doc(db, 'userData', userId);
            const docSnap = await getDoc(userDoc);

            if (docSnap.exists()) {
                setUserData(docSnap.data());
            } else {
                console.log('No data found for the user.');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleSave = async () => {
        if (currentUser) {
            try {
                const userDoc = doc(db, 'userData', currentUser.uid);
                await setDoc(userDoc, { ...userData, userId: currentUser.uid });
                Alert.alert('Guardado', 'Tu información ha sido actualizada.');
                setIsEditing(false);
            } catch (error) {
                console.error('Error saving user data:', error);
                Alert.alert('Error', 'Hubo un problema al guardar la información.');
            }
        } else {
            Alert.alert('Error', 'No se pudo identificar al usuario.');
        }
    };

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
                    {isEditing ? (
                        <>
                            <TextInput
                                style={styles.input}
                                placeholder="Nombre"
                                value={userData.name}
                                onChangeText={(text) => setUserData({ ...userData, name: text })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Apellido"
                                value={userData.lastName}
                                onChangeText={(text) => setUserData({ ...userData, lastName: text })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Ubicación"
                                value={userData.location}
                                onChangeText={(text) => setUserData({ ...userData, location: text })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Teléfono"
                                keyboardType="phone-pad"
                                value={userData.phone}
                                onChangeText={(text) => setUserData({ ...userData, phone: text })}
                            />
                        </>
                    ) : (
                        <>
                            <Text style={styles.profileName}>{`${userData.name} ${userData.lastName}`}</Text>
                            <Text style={styles.profileLocation}>{userData.location}</Text>
                            <Text style={styles.profilePhone}>{userData.phone}</Text>
                            <Text style={styles.profileEmail}>{currentUser?.email}</Text>
                        </>
                    )}

                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
                    >
                        <Text style={styles.editButtonText}>
                            {isEditing ? 'Guardar' : 'Editar'}
                        </Text>
                    </TouchableOpacity>
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
    input: {
        width: '80%',
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 5,
    },
    editButton: {
        marginTop: 20,
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 8,
    },
    editButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProfileEs;
