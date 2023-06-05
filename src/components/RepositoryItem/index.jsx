import { View, StyleSheet } from "react-native";
import theme from "../../utils/theme";
import TopItem from "./TopItem";
import BotItem from "./BotItem";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: theme.backgroundColor.item,
  },
});

const RepositoryItem = ({ repo }) => (
  <View testID="repositoryItem" style={styles.container}>
    <TopItem repo={repo}></TopItem>
    <BotItem repo={repo}></BotItem>
  </View>
);

export default RepositoryItem;
