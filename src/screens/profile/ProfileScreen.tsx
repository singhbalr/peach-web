import React, { useMemo } from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./ProfileScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { useDispatch } from "react-redux";
import { setLogout } from "../auth/rx/reducer";
interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setLogout());
  };

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Profile
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
