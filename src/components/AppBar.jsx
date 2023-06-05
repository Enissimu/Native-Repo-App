import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../utils/theme";
import { Link } from "react-router-native";
import { useApolloClient, useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import { useAuthorization } from "../hooks/useAutharization";
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
  const { data, error, loading } = useQuery(ME);
  const authStore = useAuthorization();
  const apolloClient = useApolloClient();
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text> Error! ${error.message}</Text>;
  const logOut = async () => {
    await authStore.removeAccessToken();
    apolloClient.resetStore();
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabContainer}>
        {/* ... */}
        <Link to={"/"} style={styles.item}>
          <Text color={"primary"} fontSize={"subheading"} fontWeight={"bold"}>
            Rate Repository Application
          </Text>
        </Link>

        {data.me === null ? (
          <Link to={"/SignIn"} style={styles.item}>
            <Text color={"primary"} fontSize={"subheading"} fontWeight={"bold"}>
              Sign In
            </Text>
          </Link>
        ) : (
          <Pressable onPress={logOut}>
            <Text color="primary" fontSize={"subheading"} fontWeight={"bold"}>
              Log out
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
