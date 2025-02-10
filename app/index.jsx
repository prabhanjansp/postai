import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import "../global.css";


export default function RootLayout() {
  return (
    <View className="flex-1 items-center justify-center bg-white-600">
      <Text className="text-3xl font-pblack">Jrlll</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "green" }}>
       Home
      </Link>
    </View>
  );
}
