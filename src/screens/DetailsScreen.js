import React, { useState } from 'react'; 
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, Modal, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function DetailsScreen({ route, navigation }) {
    const { title, price, description, image } = route.params || {};

    const [currentPrice, setCurrentPrice] = useState(price); 
    const [incrementInput, setIncrementInput] = useState('');
    const [isModalVisible, setModalVisible] = useState(false); 
    const [message, setMessage] = useState(''); 
    const [chatHistory, setChatHistory] = useState([]); 
    const [favorites, setFavorites] = useState([]); 
    
    const handleIncrement = () => {
        const currentPriceValue = parseFloat(currentPrice.replace(/[^0-9.-]+/g, ""));  
        const incrementValue = parseInt(incrementInput, 10);

        if (!isNaN(incrementValue) && incrementValue > 0) {
            const newPrice = currentPriceValue + incrementValue;
            setCurrentPrice(`$${newPrice.toLocaleString()}`);  
            setIncrementInput('');
        } else {
            alert('Por favor, ingrese una cantidad válida.');
        }
    };

    const handleMessagePress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            setChatHistory([...chatHistory, { sender: 'Usuario', text: message }]);
            setChatHistory((prev) => [...prev, { sender: 'Vendedor', text: 'Gracias por tu mensaje. Te responderé pronto.' }]);
            setMessage('');
        }
    };

    const handleAddToFavorites = () => {
        const newFavorite = { title, price, description, image };
        setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
        alert(`${title} ha sido añadido a tus favoritos.`);
    };

    if (!title || !price || !description || !image) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity onPress={handleAddToFavorites}>
                        <Ionicons name="heart-outline" size={28} color="red" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.price}>Precio actual: {currentPrice}</Text>
                <Text style={styles.description}>{description}</Text>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.messageButton} onPress={handleMessagePress}>
                        <Text style={styles.messageButtonText}>Mensaje</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.meetingButton} onPress={() => navigation.navigate('ReunionScreen')}>
                        <Text style={styles.meetingText}>Tiempo Restante</Text>
                        <Text style={styles.meetingTimer}>02:34 minutos</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Ingrese la cantidad a aumentar"
                    keyboardType="numeric"
                    value={incrementInput}
                    onChangeText={setIncrementInput}
                />
                <TouchableOpacity style={styles.increaseButton} onPress={handleIncrement}>
                    <Text style={styles.increaseButtonText}>Hacer puja</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={isModalVisible} animationType="fade" transparent={true} onRequestClose={handleCloseModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <ScrollView style={styles.chatContainer}>
                            {chatHistory.map((chat, index) => (
                                <View
                                    key={index}
                                    style={[styles.chatBubble, chat.sender === 'Usuario' ? styles.userBubble : styles.sellerBubble]}
                                >
                                    <Text style={styles.chatText}>{chat.text}</Text>
                                </View>
                            ))}
                        </ScrollView>
                        <TextInput
                            style={styles.chatInput}
                            placeholder="Escribe tu mensaje..."
                            value={message}
                            onChangeText={setMessage}
                        />
                        <View style={styles.modalButtons}>
                            <Button title="Enviar" onPress={handleSendMessage} color="#007AFF" />
                            <Button title="Cerrar" onPress={handleCloseModal} color="#FF3B30" />
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    contentContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    detailsContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    messageButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
    },
    messageButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    meetingButton: {
        alignItems: 'center',
        backgroundColor: '#e0f0ff',
        padding: 15,
        borderRadius: 10,
    },
    meetingText: {
        fontSize: 14,
        color: '#007AFF',
    },
    meetingTimer: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    reunionButtonText: {
        fontSize: 14,
        color: '#007AFF',
        marginTop: 5,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    increaseButton: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    increaseButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
    },
    chatContainer: {
        maxHeight: 200,
        marginBottom: 15,
    },
    chatBubble: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    userBubble: {
        alignSelf: 'flex-end',
        backgroundColor: '#d1e7ff',
    },
    sellerBubble: {
        alignSelf: 'flex-start',
        backgroundColor: '#e9ecef',
    },
    chatText: {
        fontSize: 14,
        color: '#333',
    },
    chatInput: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default DetailsScreen;
