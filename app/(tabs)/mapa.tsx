import React, { useCallback, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";

export default function TabMapaScreen() {
  const initialRegion = {
    latitude: 4.6097,
    longitude: -74.0817,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markers = Array.from({ length: 10 }, () => ({
    latitude: 4.6097 + Math.random() * 0.1,
    longitude: -74.0817 + Math.random() * 0.1,
  }));

  // refs
  const bottomSheetRef = useRef<BottomSheet>(null);

  // state
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const snapPoints = ["20%", "25%"];

  const handleMarkerPress = () => {
    setBottomSheetVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton
        showsCompass
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            title={`Incidente ${index + 1}`}
            description="Hurto a mano armada"
            onPress={handleMarkerPress}
          />
        ))}
      </MapView>
      {bottomSheetVisible && (
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          index={0}
          snapPoints={snapPoints}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text style={styles.titulo}>Incidente</Text>
            <Text style={styles.subtitulo}>
              Hurto a mano armada, indican que hay un grupo de personas armadas
              en el sector.
            </Text>
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 16,
    marginVertical: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
});
