import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { View, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
  },
  item: {
    textAlign: "center",
  },
});

const SignIn = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username"></FormikTextInput>
      <FormikTextInput
        secureTextEntry
        name="password"
        placeholder="Password"
      ></FormikTextInput>
      <Pressable style={styles.container} onPress={onSubmit}>
        <Text style={styles.item}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
