import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  error: {
    color: theme.colors.inputError,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  const textInputStyled = error
    ? [{ ...textInputStyle[0], borderColor: styles.error.color }]
    : textInputStyle;
  return (
    <NativeTextInput style={textInputStyled} textAlign={"center"} {...props} />
  );
};

export default TextInput;
