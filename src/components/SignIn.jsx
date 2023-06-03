import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { View, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({});

const SignIn = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username"></FormikTextInput>
      <FormikTextInput name="password" placeholder="Password"></FormikTextInput>
      <Pressable onPress={onSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
