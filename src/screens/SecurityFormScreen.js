import React, { useState } from "react";
import { Box, Button, FormControl, Input, VStack, ScrollView } from "native-base";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebase"; 
import { getAuth } from "firebase/auth";
import Toast from "react-native-toast-message";
import { Alert } from "react-native";

const SecurityFormScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    usuarioVendedor: "",
    usuarioComprador: "", 
    zonaReunion: "",
    cocheInteres: "",
    horaReunion: "",
    caracteristicasEspeciales: "",
    numeroEmergencia: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    for (const key in formData) {
      if (!formData[key].trim()) {
        Alert.alert("Campos incompletos", "Por favor, llena todos los campos antes de agendar la reunión.");
        return;
      }
    }

    if (!user) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Debes estar autenticado para programar reuniones",
      });
      return;
    }

    const newMeeting = {
      vendedor: formData.usuarioVendedor,
      comprador: formData.usuarioComprador,
      zona: formData.zonaReunion,
      coche: formData.cocheInteres,
      hora: formData.horaReunion,
      caracteristicas: formData.caracteristicasEspeciales,
      emergencia: formData.numeroEmergencia,
      userId: user.uid,
    };

    try {
      await addDoc(collection(db, "meetings"), newMeeting);

      Alert.alert(
        "¡Éxito!",
        "La reunión fue programada correctamente.",
        [{ text: "OK", onPress: () => navigation.navigate("Meetings") }]
      );

      setFormData({
        usuarioVendedor: "", 
        usuarioComprador: "",
        zonaReunion: "",
        cocheInteres: "",
        horaReunion: "",
        caracteristicasEspeciales: "",
        numeroEmergencia: "",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "No se pudo programar la reunión",
      });
      console.error("Error al agregar documento: ", error);
    }
  };

  return (
    <ScrollView>
      <Box safeArea flex={1} p={5}>
        <VStack space={4}>
          <FormControl>
            <FormControl.Label>Usuario vendedor</FormControl.Label>
            <Input
              value={formData.usuarioVendedor}
              onChangeText={(value) => handleInputChange("usuarioVendedor", value)}
              placeholder="Ingrese nombre del vendedor"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Usuario comprador</FormControl.Label>
            <Input
              value={formData.usuarioComprador}
              onChangeText={(value) => handleInputChange("usuarioComprador", value)}
              placeholder="Ingrese nombre del comprador"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Zona de reunión</FormControl.Label>
            <Input
              value={formData.zonaReunion}
              onChangeText={(value) => handleInputChange("zonaReunion", value)}
              placeholder="Ingrese zona de reunión"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Coche de interés</FormControl.Label>
            <Input
              value={formData.cocheInteres}
              onChangeText={(value) => handleInputChange("cocheInteres", value)}
              placeholder="Ingrese coche de interés"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Hora de la reunión</FormControl.Label>
            <Input
              value={formData.horaReunion}
              onChangeText={(value) => handleInputChange("horaReunion", value)}
              placeholder="Ingrese hora de la reunión"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Vestimenta</FormControl.Label>
            <Input
              value={formData.caracteristicasEspeciales}
              onChangeText={(value) => handleInputChange("caracteristicasEspeciales", value)}
              placeholder="Ingrese vestimenta"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Número de emergencia</FormControl.Label>
            <Input
              value={formData.numeroEmergencia}
              onChangeText={(value) => handleInputChange("numeroEmergencia", value)}
              placeholder="Ingrese número de emergencia"
            />
          </FormControl>
          <Button onPress={handleSubmit}>Agendar</Button>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default SecurityFormScreen;
