import { StyleSheet, View } from "react-native";
import RepositoryList from "./components/RepositoryList ";
import AppBar from "./components/AppBar";
import theme from "./utils/theme";
import { Routes, Route, Navigate } from "react-router-native";
import SignInFormIndex from "./components/signIn/index";
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.backgroundColor.main,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar> </AppBar>
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />{" "}
        <Route path="/SignIn" element={<SignInFormIndex />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />{" "}
      </Routes>
    </View>
  );
};

export default Main;
