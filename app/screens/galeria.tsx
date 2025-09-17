import React, { useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import DetalleModal from "../../components/DetalleModal";
import ProductoItem from "../../components/ProductoItem";
import { productos } from "../../data/productos";

export default function Galeria() {
  const [busqueda, setBusqueda] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [resizeMode, setResizeMode] = useState<"cover" | "contain" | "stretch">(
    "cover"
  );
  const [favoritos, setFavoritos] = useState<string[]>([]);

  const productosFiltrados = productos.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const toggleFavorito = (id: string) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar producto..."
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductoItem
            item={item}
            onPress={() => {
              setProductoSeleccionado(item);
              setModalVisible(true);
            }}
            onLongPress={() => toggleFavorito(item.id)}
            esFavorito={favoritos.includes(item.id)}
          />
        )}
      />

      <DetalleModal
        visible={modalVisible}
        producto={productoSeleccionado}
        resizeMode={resizeMode}
        setResizeMode={setResizeMode}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
});
