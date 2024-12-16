import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

function LanguageOptions() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const languages = [
        { id: '1', name: 'Español' },
        { id: '2', name: 'Inglés' },
        { id: '3', name: 'Francés' },
        { id: '4', name: 'Alemán' },
        { id: '5', name: 'Italiano' },
    ];

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.languageItem, selectedLanguage === item.name && styles.selectedItem]}
            onPress={() => handleLanguageSelect(item.name)}
        >
            <Text style={[styles.languageText, selectedLanguage === item.name && styles.selectedText]}>
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Selecciona tu idioma preferido:</Text>
            <FlatList
                data={languages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedLanguage}
                style={styles.list}
            />
            {selectedLanguage && (
                <Text style={styles.selectedLanguageText}>Idioma seleccionado: {selectedLanguage}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    text: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
    },
    list: {
        width: '80%',
    },
    languageItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    languageText: {
        fontSize: 16,
        color: '#333',
    },
    selectedItem: {
        backgroundColor: '#cce5ff',
    },
    selectedText: {
        color: '#007bff',
    },
    selectedLanguageText: {
        marginTop: 20,
        fontSize: 18,
        color: '#333',
    },
});

export default LanguageOptions;
