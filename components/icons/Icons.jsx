import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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

export const AddIcon = (props) => (
  <Ionicons name="add-circle-outline" size={50} color="yellow" {...props} />
);

export const SaveIcon = (props) => (
  <FontAwesome5 name="save" size={30} color="yellow" {...props} />
);

export const EditIcon = (props) => (
  <FontAwesome5 name="edit" size={30} color="yellow" {...props} />
);

export const DeleteIcon = (props) => (
  <AntDesign name="delete" size={30} color="yellow" {...props} />
);

export const CloseIcon = (props) => (
  <Ionicons name="close-circle-outline" size={50} color="yellow" {...props} />
);
