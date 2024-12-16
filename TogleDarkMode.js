import React from "react";
import { IconButton, useColorMode, Tooltip } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={colorMode === "dark" ? "Modo claro" : "Modo oscuro"} placement="bottom">
      <IconButton
        icon={<Ionicons name={colorMode === "dark" ? "sunny-outline" : "moon-outline"} size={20} />}
        onPress={toggleColorMode}
        variant="ghost"
        size="sm"
        colorScheme={colorMode === "dark" ? "yellow" : "blue"}
        _icon={{ color: colorMode === "dark" ? "yellow.400" : "blue.500" }}
        _pressed={{ opacity: 0.7 }}
        style={{ marginRight: 15 }}
      />
    </Tooltip>
  );
};

export default ToggleDarkMode;
