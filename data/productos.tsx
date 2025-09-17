export interface Producto {
  id: string;
  titulo: string;
  precio: number;
  descripcion: string;
  imagen: any; // Puede ser require(...) o { uri: string }
}

export const productos: Producto[] = [
  {
    id: "1",
    titulo: "Cámara",
    precio: 1200,
    descripcion: "Cámara profesional de alta resolución.",
    imagen: require("../assets/images/camara.png"),
  },
  {
    id: "2",
    titulo: "Teléfono",
    precio: 800,
    descripcion: "Teléfono inteligente con gran pantalla.",
    imagen: { uri: "https://m.media-amazon.com/images/I/71t8ghIhMWL._UF894,1000_QL80_.jpg" }, 
  },
  {
    id: "3",
    titulo: "Auriculares",
    precio: 200,
    descripcion: "Auriculares inalámbricos con cancelación de ruido.",
    imagen: require("../assets/images/auriculares.webp"),
  },
];
