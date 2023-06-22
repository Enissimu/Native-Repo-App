import Text from "../Text";
import { StyleSheet, View, Button, Alert } from "react-native";
import formatISO from "date-fns/formatISO";
import theme from "../../utils/theme";
import format from "date-fns/format";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";

const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: theme.backgroundColor.item,
  },
  container: {
    display: "flex",
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
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button1: {
    paddingHorizontal: 10,
    color: "blue",
  },
  button2: {
    paddingHorizontal: 10,
  },
});

const MyReviewItem = ({ review }) => {
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();

  const createTwoButtonAlert = () =>
    Alert.alert("Delete review", "Are you sure about deleting your review", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "DELETE", onPress: () => deleteReviewFun() },
    ]);

  const deleteReviewFun = async () => {
    try {
      await deleteReview(review.id);
    } catch (e) {
      console.log(e);
    }
  };
  const navigateTo = (review) => {
    navigate(`/${review.repositoryId}`);
  };
  return (
    <View style={styles.bigContainer}>
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
            {review.repository.fullName}
          </Text>

          <Text color="textSecondary">
            {format(
              new Date(
                formatISO(new Date(review.createdAt), {
                  representation: "date",
                })
              ),
              "dd/MM/yyyy"
            )}
          </Text>
          <Text> {review.text}</Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          style={styles.button1}
          title="View repository"
          onPress={() => navigateTo(review)}
        ></Button>
        <Button
          style={styles.button2}
          color="#d6394c"
          title="Delete review"
          onPress={createTwoButtonAlert}
        ></Button>
      </View>
    </View>
  );
};

export default MyReviewItem;
