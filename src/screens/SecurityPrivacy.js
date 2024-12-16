import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Switch } from 'react-native';

function SecurityPrivacy() {
    const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
    const [isDataSharingEnabled, setIsDataSharingEnabled] = useState(true);

    const toggleTwoFactor = () => setIsTwoFactorEnabled(!isTwoFactorEnabled);
    const toggleDataSharing = () => setIsDataSharingEnabled(!isDataSharingEnabled);

    const options = [
        { id: '1', name: 'Autenticación en dos pasos', action: toggleTwoFactor, value: isTwoFactorEnabled },
        { id: '2', name: 'Compartir datos con terceros', action: toggleDataSharing, value: isDataSharingEnabled },
        { id: '3', name: 'Cambiar contraseña', action: () => alert('Redirigir a cambiar contraseña') },
        { id: '4', name: 'Gestionar dispositivos conectados', action: () => alert('Ver dispositivos conectados') },
        { id: '5', name: 'Notificaciones de seguridad', action: () => alert('Configurar notificaciones de seguridad') },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.optionItem}
            onPress={item.action}
        >
            <View style={styles.optionContainer}>
                <Text style={styles.optionText}>{item.name}</Text>
                {item.value !== undefined && (
                    <Switch
                        value={item.value}
                        onValueChange={item.action}
                        style={styles.switch}
                    />
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Administra la seguridad y privacidad de tu cuenta</Text>
            <FlatList
                data={options}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
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
    optionItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    switch: {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    },
});

export default SecurityPrivacy;
