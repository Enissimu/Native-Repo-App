import { View, StyleSheet, Pressable } from "react-native";
import theme from "../../utils/theme";
import TopItem from "./TopItem";
import BotItem from "./BotItem";
import { useNavigate } from "react-router-native";
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

const RepositoryItem = ({ repo }) => {
  const navigate = useNavigate();
  const naviTheGate = () => {
    navigate(`/${repo.id}`);
  };
  return (
    <Pressable onPress={naviTheGate}>
      <View testID="repositoryItem" style={styles.container}>
        <TopItem repo={repo}></TopItem>
        <BotItem repo={repo}></BotItem>
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
