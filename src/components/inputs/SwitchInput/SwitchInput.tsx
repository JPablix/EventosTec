// Imports
import { Switch, View, Text } from "react-native";
// Styles
import { styles } from "./SwitchInput.style";

interface SwitchInputProps {
  isActivated: boolean;
  setIsActivated: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
}

const SwitchInput = ({
  isActivated,
  setIsActivated,
  text,
}: SwitchInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Switch
        trackColor={{
          false: styles.trackInactive.backgroundColor,
          true: styles.trackActive.backgroundColor,
        }}
        thumbColor={
          isActivated
            ? styles.thumbActive.backgroundColor
            : styles.thumbInactive.backgroundColor
        }
        onValueChange={() => setIsActivated(!isActivated)}
        value={isActivated}
      />
    </View>
  );
};
export default SwitchInput;