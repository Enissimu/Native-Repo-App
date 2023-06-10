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

const CreateReview = ({ onSubmit }) => {
  const handle = () => {
    onSubmit();
  };
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Repository owner name"
      ></FormikTextInput>

      <FormikTextInput
        name="name"
        placeholder="Repository name"
      ></FormikTextInput>

      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
      ></FormikTextInput>

      <FormikTextInput
        name="review"
        placeholder="Review"
        multiline
      ></FormikTextInput>
      <Pressable style={styles.container} onPress={handle}>
        <Text style={styles.item}>Create Review</Text>
      </Pressable>
    </View>
  );
};

export default CreateReview;
