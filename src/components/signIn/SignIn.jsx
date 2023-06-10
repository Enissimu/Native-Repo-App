import Text from "../Text";
import { View, StyleSheet, Pressable } from "react-native";
import FormikTextInput from "../FormikTextInput";
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
  },
  item: {
    textAlign: "center",
  },
});

const SignIn = ({ onSubmit }) => {
  const handle = () => {
    onSubmit();
  };
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username"></FormikTextInput>
      <FormikTextInput
        secureTextEntry
        name="password"
        placeholder="Password"
      ></FormikTextInput>
      <Pressable style={styles.container} onPress={handle}>
        <Text style={styles.item}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
