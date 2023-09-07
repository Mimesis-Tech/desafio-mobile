import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular as I400,
  Inter_700Bold as I700,
} from "@expo-google-fonts/inter";
import { Roboto_400Regular as R400 } from "@expo-google-fonts/roboto";

import Home from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    I400,
    I700,
    R400,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Home />
    </>
  );
}
