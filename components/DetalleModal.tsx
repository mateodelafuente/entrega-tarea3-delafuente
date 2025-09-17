import React from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface DetalleModalProps {
  visible: boolean;
  producto: any;
  resizeMode: "cover" | "contain" | "stretch";
  setResizeMode: (mode: "cover" | "contain" | "stretch") => void;
  onClose: () => void;
}

export default function DetalleModal({
  visible,
  producto,
  resizeMode,
  setResizeMode,
  onClose,
}: DetalleModalProps) {
  if (!producto) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modal}>
        <Image
          source={producto.imagen}
          style={styles.imagenGrande}
          resizeMode={resizeMode}
        />
        <Text style={styles.titulo}>{producto.titulo}</Text>
        <Text>{producto.descripcion}</Text>

        <View style={styles.botonesResize}>
          {["cover", "contain", "stretch"].map((mode) => (
            <Pressable key={mode} onPress={() => setResizeMode(mode as any)}>
              <Text style={styles.boton}>{mode}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.botonCerrar} onPress={onClose}>
          <Text style={{ color: "white" }}>Cerrar</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imagenGrande: { width: 300, height: 300, marginBottom: 20 },
  titulo: { fontWeight: "bold", fontSize: 18, marginBottom: 10 },
  botonesResize: {
    flexDirection: "row",
    marginVertical: 10,
    gap: 10,
  },
  boton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  botonCerrar: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
});
