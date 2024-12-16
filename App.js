import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Box, NativeBaseProvider, VStack, useColorModeValue } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import theme from "./theme";
import ToggleDarkMode from "./TogleDarkMode"; 
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import SellScreen from "./src/screens/SellScreen";
import MisCarros from "./src/screens/MisCarros";
import MisFavoritos from "./src/screens/MisFavoritos";
import NotificationPreferences from "./src/screens/NotificationPreferences";
import LanguageOptions from "./src/screens/LanguageOptions";
import SecurityPrivacy from "./src/screens/SecurityPrivacy";
import PaymentMethods from "./src/screens/PaymentMethods";
import SupportHelp from "./src/screens/SupportHelp";
import AppCustomization from "./src/screens/AppCustomization";
import DetailsScreen from "./src/screens/DetailsScreen";
import ReunionScreen from "./src/screens/ReunionScreen";
import SecurityFormScreen from "./src/screens/SecurityFormScreen";
import Meetings from "./src/screens/Meetings";
import { AppProvider } from "./contexts/favoritosContext";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const MainTab = ({ setIsAuthenticated, cars, addCar, meetings, addMeeting }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
        drawerLabelStyle: { fontSize: 16 },
        headerShown: true,
        drawerStyle: {
          backgroundColor: useColorModeValue("#003366", "#1a1a1a"),
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: "#003366",
        },
        headerTintColor: "white",
        headerRight: () => (
          <Ionicons
            name="log-out-outline"
            size={24}
            color="white"
            style={{ marginRight: 15, }}
            onPress={() => {
              setIsAuthenticated(false);
              navigation.replace("LoginScreen");
            }}
          />
        ),
      })}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Divider1"
        component={() => null}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { marginVertical: 0, height: 1, backgroundColor: "#ccc" },
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mis Carros"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="car-sport-outline" size={size} color={color} />
          ),
        }}>
        {(props) => <MisCarros {...props} cars={cars} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="Mis Favoritos"
        component={MisFavoritos}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reuniones"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}>
        {(props) => <Meetings {...props} meetings={meetings} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="Divider2"
        component={() => null}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerItemStyle: { marginVertical: 0, height: 1, backgroundColor: "#ccc" },
        }}
      />
      <Drawer.Screen
        name="Vender"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="card-outline" size={size} color={color} />
          ),
        }}>
        {(props) => <SellScreen {...props} addCar={addCar} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="SecurityForm"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="shield-checkmark-outline"
              size={size}
              color={color}
            />
          ),
        }}>
        {(props) => <SecurityFormScreen {...props} addMeeting={addMeeting} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="Configuraciones"
        component={SettingsStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ title: "Configuraciones" }}
      />
      <Stack.Screen name="NotificationPreferences" component={NotificationPreferences} />
      <Stack.Screen name="LanguageOptions" component={LanguageOptions} />
      <Stack.Screen name="SecurityPrivacy" component={SecurityPrivacy} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="SupportHelp" component={SupportHelp} />
      <Stack.Screen name="AppCustomization" component={AppCustomization} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="ReunionScreen" component={ReunionScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cars, setCars] = useState([]); // Estado compartido para los carros.
  const [meetings, setMeetings] = useState([]); // Estado compartido para las reuniones.

  const addCar = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const addMeeting = (newMeeting) => {
    setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
  };

  return (
    <AppProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <VStack flex={1} bg={useColorModeValue("light.background.50", "dark.background.900")}>
            <Box safeAreaTop bg={useColorModeValue("light.background.100", "dark.background.900")}>
              <ToggleDarkMode />
            </Box>
            <Stack.Navigator initialRouteName={isAuthenticated ? "MainTab" : "LoginScreen"}>
              <Stack.Screen name="LoginScreen" options={{ headerShown: false }}>
                {() => <LoginScreen setIsAuthenticated={setIsAuthenticated} />}
              </Stack.Screen>
              <Stack.Screen name="RegisterScreen" options={{ headerShown: false }}>
                {() => <RegisterScreen setIsAuthenticated={setIsAuthenticated} />}
              </Stack.Screen>
              <Stack.Screen name="MainTab" options={{ headerShown: false }}>
                {() => (
                  <MainTab
                    setIsAuthenticated={setIsAuthenticated}
                    cars={cars}
                    addCar={addCar}
                    meetings={meetings}
                    addMeeting={addMeeting}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen name="Details" component={DetailsScreen} />
              <Stack.Screen name="ReunionScreen" component={ReunionScreen} />
            </Stack.Navigator>
          </VStack>
        </NavigationContainer>
      </NativeBaseProvider>
    </AppProvider>
  );
};

export default App;
