import { Text, View } from "@/components/Themed";
import LottieView from "lottie-react-native";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function TabIndexScreen() {
  const reportarIncidente = () => {
    const whatsapp =
      "https://wa.me/573187133129?text=Hola%20CAI%20de%20la%20policia%20necesito%20ayuda%20en%20la%20siguiente%20ubicacion%20https://maps.app.goo.gl/SR9iGHhnYR6DAvKU6";
    Linking.openURL(whatsapp);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={reportarIncidente} style={{ width: "100%" }}>
        <LottieView
          source={require("@/assets/animations/Alert.json")}
          style={{ width: "100%", height: 200 }}
          autoPlay
          speed={0.75}
          loop
        />
      </TouchableOpacity>
      <Text style={styles.titulo}>Oprime el botón y reporta</Text>
      <Text style={{ ...styles.subtitulo, marginBottom: 40 }}>
        Al oprimir el botón enviaras un mensaje y ubicación al CAI mas cercano.
      </Text>
      <TouchableOpacity onPress={reportarIncidente} style={styles.boton}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          REPORTAR INCIDENTE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  boton: {
    backgroundColor: "#006FFD",
    padding: 10,
    borderRadius: 12,
  },
});
