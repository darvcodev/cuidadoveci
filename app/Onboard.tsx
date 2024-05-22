import * as React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Onboard({ onDone }: { onDone: () => void }) {
  const router = useRouter();

  const nextButton = ({ ...props }) => {
    return (
      <TouchableOpacity {...props} style={styles.buttonOnboard}>
        <Text>Siguiente</Text>
      </TouchableOpacity>
    );
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity {...props} style={styles.buttonOnboard}>
        <Text>Comenzar</Text>
      </TouchableOpacity>
    );
  };

  const handleDone = () => {
    onDone();
    router.push("/");
  };

  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        onDone={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        NextButtonComponent={nextButton}
        showSkip={false}
        containerStyles={{ paddingHorizontal: 15 }}
        titleStyles={{ fontSize: 24, fontWeight: "bold" }}
        subTitleStyles={{ fontSize: 16 }}
        pages={[
          {
            backgroundColor: "#FED7AA",
            image: (
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("@/assets/logo.png")}
                  style={{ width: 200, height: 200 }}
                />
              </View>
            ),
            title: "CuidadoVeci",
            subtitle: (
              <Text
                style={{ textAlign: "center", fontSize: 16, lineHeight: 25 }}
              >
                Podrás Reportar, visualizar y generar alarmas de eventualidades
                de delincuencia en tu sector.
              </Text>
            ),
          },
          {
            backgroundColor: "#EF4444",
            image: (
              <View>
                <LottieView
                  source={require("@/assets/animations/Alert.json")}
                  autoPlay
                  loop
                  style={{ width: 200, height: 200 }}
                  speed={0.75}
                />
              </View>
            ),
            title: "Alerta / CAI",
            subtitle:
              "Genera alarmas de eventualidades directamente con el cuadrante.",
          },
          {
            backgroundColor: "#22D3EE",
            image: (
              <View>
                <LottieView
                  source={require("@/assets/animations/Maps.json")}
                  autoPlay
                  loop
                  style={{ width: 250, height: 250 }}
                />
              </View>
            ),
            title: "Mapa de alerta",
            subtitle:
              "Visualizar puntos de incidentes cerca a tu posición actual.",
          },
          {
            backgroundColor: "#FDBA74",
            image: (
              <View>
                <LottieView
                  source={require("@/assets/animations/Chat.json")}
                  autoPlay
                  loop
                  style={{ width: 350, height: 350 }}
                />
              </View>
            ),
            title: "ChatBot de reporte",
            subtitle:
              "Reporta eventos de delincuencia de manera rápida y sencilla.",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOnboard: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
