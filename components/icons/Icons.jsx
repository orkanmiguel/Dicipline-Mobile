import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const CronometerIcon = (props) => (
  <Ionicons name="timer" size={30} color="yellow" {...props} />
);

export const StatisticsIcon = (props) => (
  <MaterialCommunityIcons
    name="weight-lifter"
    size={30}
    color="yellow"
    {...props}
  />
);

export const HomeIcon = (props) => (
  <FontAwesome name="home" size={30} color="yellow" {...props} />
);
