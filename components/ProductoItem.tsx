import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface ProductoItemProps {
  item: any;
  onPress: () => void;
  onLongPress: () => void;
  esFavorito: boolean;
}

export default function ProductoItem({
  item,
  onPress,
  onLongPress,
  esFavorito,
}: ProductoItemProps) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.item, esFavorito && styles.favorito]}
    >
      <Image source={item.imagen} style={styles.imagen} />
      <View>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text>${item.precio}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  favorito: {
    backgroundColor: "#ffe4b5",
  },
  imagen: { width: 50, height: 50, marginRight: 10 },
  titulo: { fontWeight: "bold", fontSize: 16 },
});
