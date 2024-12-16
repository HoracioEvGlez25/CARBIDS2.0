import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import NotificationPreferences from './NotificationPreferences';
import LanguageOptions from './LanguageOptions';
import SecurityPrivacy from './SecurityPrivacy';
import PaymentMethods from './PaymentMethods';
import SupportHelp from './SupportHelp';
import AppCustomization from './AppCustomization';

function SettingsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
            <View style={styles.optionsContainer}>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('NotificationPreferences')}
                >
                    <Text style={styles.optionText}>Preferencias de Notificaciones</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('LanguageOptions')}
                >
                    <Text style={styles.optionText}>Opciones de Idioma</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('SecurityPrivacy')}
                >
                    <Text style={styles.optionText}>Seguridad y Privacidad</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('PaymentMethods')}
                >
                    <Text style={styles.optionText}>Métodos de Pago</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('SupportHelp')}
                >
                    <Text style={styles.optionText}>Soporte y Ayuda</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('AppCustomization')}
                >
                    <Text style={styles.optionText}>Personalización de la Aplicación</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00aaff',
        padding: 15,
    },
    backButton: {
        fontSize: 20,
        color: '#fff',
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    optionsContainer: {
        marginTop: 20,
    },
    option: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
});

export default SettingsScreen;
