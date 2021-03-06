import * as React from "react";
import colors from "@theme/colors";
import { Box } from "@components/Layout";
import { Header } from "@components/Layout";
import { TextField } from "@components/Form";
import { PrimaryButton } from "@components/Buttons";
import { Typography } from "@components/Typography";
import { useNavigation } from "@react-navigation/core";
import { AuthStackParamList } from "@interfaces/navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

type LoginNavigationProp = StackNavigationProp<AuthStackParamList, "Login">;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["light-100"],
  },
  content: {
    flexGrow: 1,
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  field: {
    marginTop: 24,
  },
  underline: {
    textDecorationLine: "underline",
  },
});

export default function LoginScreen() {
  const navigation = useNavigation<LoginNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header title="Login" back />
        <Box marginTop={64}>
          <TextField placeholder="Email" style={styles.field} />
          <TextField placeholder="Password" style={styles.field} />
        </Box>
        <Box marginTop={42}>
          <PrimaryButton title="Login" />
          <Box marginVertical={16} />
          <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Forgot-Password")}>
            <Typography variant="title-3" color="violet-100" textAlign="center">
              Forgot Password?
            </Typography>
          </TouchableOpacity>
        </Box>
        <Box flexDirection="row" marginTop={36} alignItems="center" justifyContent="center">
          <Typography variant="regular-1" color="dark-25">
            Don't have and account?
          </Typography>
          <Box marginHorizontal={2} />
          <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Register")}>
            <Typography color="violet-100" style={styles.underline}>
              Sign Up
            </Typography>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
