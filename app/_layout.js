import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Home Screen", headerShown: false }}
      />
      {/*     <Stack.Screen
        name="[nameEjer]"
        options={{ title: "Ejercicio", headerShown: true }}
      /> */}
    </Stack>
  );
}
