import {
  CronometerIcon,
  StatisticsIcon,
  HomeIcon,
} from "../../components/icons/Icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "yellow",
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",

          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: "Estadisticas",
          tabBarIcon: ({ color }) => <StatisticsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="cronometer"
        options={{
          title: "Cronometro",
          tabBarIcon: ({ color }) => <CronometerIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
