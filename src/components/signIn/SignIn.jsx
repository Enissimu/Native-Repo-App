import Text from "../Text";
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
  const handle = () => {
    console.log("CLICKED");
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
