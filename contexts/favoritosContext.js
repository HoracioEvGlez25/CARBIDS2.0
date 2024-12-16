import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [chatHistory, setChatHistory] = useState([]);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [message, setMessage] = useState('');

    const addToFavorites = (item) => {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    return (
        <AppContext.Provider
            value={{
                favorites,
                chatHistory,
                currentPrice,
                message,
                setMessage,
                addToFavorites,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};