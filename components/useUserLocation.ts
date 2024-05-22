import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { LocationObjectCoords } from "expo-location";

type LocationSubscription = {
  remove: () => void;
};

type LocationPermissionStatus = "granted" | "denied" | "undetermined";

export default function useUserLocation() {
  const [userLocation, setUserLocation] = useState<LocationObjectCoords | null>(
    null
  );

  useEffect(() => {
    let watchLocationSubscription: { remove: () => void } | null = null;

    const obtenerUbicacionUsuario = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Se denegó el permiso para acceder a la ubicación");
        return;
      } else {
        console.log("Se concedió el permiso para acceder a la ubicación.");
      }

      watchLocationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 10, // Distancia mínima (en metros) que el usuario debe moverse para que se active una actualización
          timeInterval: 60000, // Intervalo de tiempo (en ms) entre actualizaciones
        },
        (location) => {
          setUserLocation(location.coords);
        }
      );
    };

    obtenerUbicacionUsuario();

    return () => {
      if (watchLocationSubscription) {
        watchLocationSubscription.remove();
      }
    };
  }, []);

  return userLocation;
}
