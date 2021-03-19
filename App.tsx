import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import Routes from "./src/rotes";
import accessStorage, { IAlreadyLaunched } from "./src/utils/accessStorage";
import { StatusBar } from "expo-status-bar";
import { CoordinateProvider } from "./src/contexts/Coordinate";
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/nunito";

export default function App() {
  const [alreadyLaunched, setAlreadyLaunched] = useState<IAlreadyLaunched>({
    ready: false,
  });

  useEffect(() => {
    async function start() {
      setAlreadyLaunched(await accessStorage.get("PedimusicaAlreadyLaunched"));
    }

    start();
  }, []);

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  console.log(alreadyLaunched);

  return (
    <>
      <StatusBar style="auto" />
      <CoordinateProvider>
        <Routes alreadyLaunched={alreadyLaunched} />
      </CoordinateProvider>
    </>
  );
}
