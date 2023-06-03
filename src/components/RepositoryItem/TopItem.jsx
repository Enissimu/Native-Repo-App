import { View, Image, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  conatiner2: {
    display: "flex",
    paddingLeft: 10,
    alignItems: "flex-start",
  },
  logo: {
    width: 50,
    height: 60,
  },
  language: {
    overflow: "hidden",
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
  },
});

const TopItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: repo.ownerAvatarUrl,
        }}
      />

      <View style={styles.conatiner2}>
        <Text fontWeight={"bold"} fontSize={"subheading"}>
          {repo.fullName}
        </Text>
        <Text color={"textSecondary"}>{repo.description}</Text>
        <Text style={styles.language}> {repo.language}</Text>
      </View>
    </View>
  );
};

export default TopItem;
