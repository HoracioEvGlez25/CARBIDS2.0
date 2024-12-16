import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

function NotificationPreferences() {
    const [preferences, setPreferences] = useState({
        nuevasSubastas: false,
        actualizacionesAutos: false,
        ofertasRealizadasGanadas: false,
        fechasLimitePago: false,
    });

    const togglePreference = (key) => {
        setPreferences((prevPreferences) => ({
            ...prevPreferences,
            [key]: !prevPreferences[key],
        }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Configura tus preferencias de notificaciones:</Text>

            <View style={styles.preferenceRow}>
                <Text style={styles.text}>Nuevas Subastas</Text>
                <Switch
                    value={preferences.nuevasSubastas}
                    onValueChange={() => togglePreference('nuevasSubastas')}
                />
            </View>

            <View style={styles.preferenceRow}>
                <Text style={styles.text}>Actualizaciones de autos de interés</Text>
                <Switch
                    value={preferences.actualizacionesAutos}
                    onValueChange={() => togglePreference('actualizacionesAutos')}
                />
            </View>

            <View style={styles.preferenceRow}>
                <Text style={styles.text}>Ofertas realizadas o ganadas</Text>
                <Switch
                    value={preferences.ofertasRealizadasGanadas}
                    onValueChange={() => togglePreference('ofertasRealizadasGanadas')}
                />
            </View>

            <View style={styles.preferenceRow}>
                <Text style={styles.text}>Fechas límite de pago</Text>
                <Switch
                    value={preferences.fechasLimitePago}
                    onValueChange={() => togglePreference('fechasLimitePago')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    preferenceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});

export default NotificationPreferences;
