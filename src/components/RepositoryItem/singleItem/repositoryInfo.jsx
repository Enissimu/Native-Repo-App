import { StyleSheet, View, Pressable } from "react-native";
import Text from "../../Text";
import theme from "../../../utils/theme";
import * as Linking from "expo-linking";
import TopItem from "../TopItem";
import BotItem from "../BotItem";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: theme.backgroundColor.item,
  },
  link: {
    overflow: "hidden",
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
  },
});
const RepositoryInfo = ({ repository }) => {
  const openNet = () => {
    Linking.openURL(repository.url);
  };
  return (
    <View style={styles.container}>
      {repository ? (
        <View>
          <TopItem repo={repository}></TopItem>
          <BotItem repo={repository}></BotItem>
          <Pressable onPress={openNet}>
            <Text style={styles.link}>Open in GitHub </Text>
          </Pressable>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default RepositoryInfo;
