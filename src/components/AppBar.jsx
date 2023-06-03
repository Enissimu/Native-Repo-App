import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.appBar,
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  item: {
    paddingHorizontal: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabContainer}>
        {/* ... */}
        <Link to={"/"} style={styles.item}>
          <Text color={"primary"} fontSize={"subheading"} fontWeight={"bold"}>
            Rate Repository Application
          </Text>
        </Link>
        <Link to={"/SignIn"} style={styles.item}>
          <Text color={"primary"} fontSize={"subheading"} fontWeight={"bold"}>
            Sign In
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
