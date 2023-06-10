import Text from "../../Text";
import { StyleSheet } from "react-native-web";
import theme from "../../../utils/theme";
import { View } from "react-native";
import formatISO from "date-fns/formatISO";
import format from "date-fns/format";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: theme.backgroundColor.item,
    flexDirection: "row",
  },
  leftContainer: {
    width: 50,
    height: 50,
    borderColor: theme.colors.primary,
    borderWidth: 5,
    borderRadius: 25,
    justifyContent: "center",
  },
  rating: {
    textAlign: "center",
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text
          style={styles.rating}
          fontSize="subheading"
          fontWeight="bold"
          color="primary"
        >
          {review.rating}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <Text fontWeight={"bold"} fontSize={"subheading"}>
          {review.user.username}
        </Text>
        <Text color="textSecondary">
          {format(
            new Date(
              formatISO(new Date(review.createdAt), { representation: "date" })
            ),
            "dd/MM/yyyy"
          )}
        </Text>
        <Text> {review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
