import { View, StyleSheet } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  containerSmall: {
    flex: 1,
  },
  containerItem: { flexBasis: "25%" },
});

const formatToK = (num) => {
  const numBer = Number(num);
  if (numBer < 1000) {
    return num;
  } else {
    return (numBer / 1000).toFixed(1) + "k";
  }
};

const BotItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.containerItem}
        fontWeight={"bold"}
        fontSize={"subheading"}
      >
        {" "}
        {formatToK(repo.stargazersCount)}
      </Text>
      <Text
        style={styles.containerItem}
        fontWeight={"bold"}
        fontSize={"subheading"}
      >
        {formatToK(repo.forksCount)}
      </Text>
      <Text
        style={styles.containerItem}
        fontWeight={"bold"}
        fontSize={"subheading"}
      >
        {formatToK(repo.reviewCount)}
      </Text>
      <Text
        style={styles.containerItem}
        fontWeight={"bold"}
        fontSize={"subheading"}
      >
        {formatToK(repo.ratingAverage)}
      </Text>

      <Text style={styles.containerItem} color={"textSecondary"}>
        Stars
      </Text>
      <Text style={styles.containerItem} color={"textSecondary"}>
        Forks
      </Text>
      <Text style={styles.containerItem} color={"textSecondary"}>
        Reviews
      </Text>
      <Text style={styles.containerItem} color={"textSecondary"}>
        Rating
      </Text>
    </View>
  );
};

export default BotItem;
