import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Galeria from "./screens/galeria";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Galeria />
    </SafeAreaView>
  );
}
