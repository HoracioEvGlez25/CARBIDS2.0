import React, { useState } from "react";
import { Box, Button, FormControl, Input, VStack, Text } from "native-base";

const SecurityFormScreen = () => {
  const [formData, setFormData] = useState({
    usuarioVendedor: "",
    usuarioComprador: "",
    zonaReunion: "",
    cocheInteres: "",
    medioTransporte: "",
    caracteristicasTransporte: "",
    numeroEmergencia: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Submit form logic here
    console.log("Form submitted:", formData);
  };

  return (
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
          <FormControl.Label>Medio de transporte a la zona</FormControl.Label>
          <Input
            value={formData.medioTransporte}
            onChangeText={(value) => handleInputChange("medioTransporte", value)}
            placeholder="Ingrese medio de transporte"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Características del transporte</FormControl.Label>
          <Input
            value={formData.caracteristicasTransporte}
            onChangeText={(value) => handleInputChange("caracteristicasTransporte", value)}
            placeholder="Ingrese características del transporte"
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
        <Button onPress={handleSubmit}>Guardar</Button>
      </VStack>
    </Box>
  );
};

export default SecurityFormScreen;
