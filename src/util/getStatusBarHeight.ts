import { Platform } from "react-native";

export const statusBarHeight = Platform.OS === "android" ? "42px" : "38px";
