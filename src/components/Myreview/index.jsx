import { useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries";
import Text from "../Text";
import { View, StyleSheet, FlatList } from "react-native";
import MyReviewItem from "./myReview";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { data, error, loading } = useQuery(ME, {
    variables: {
      includeReviews: true,
    },
    pollInterval: 500,
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text> Error! ${error.message}</Text>;
  const dataObj = data ? data.me : undefined;
  const reviewNodes = dataObj
    ? dataObj.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <MyReviewItem review={item}></MyReviewItem>}
      keyExtractor={(id) => id.id}
    />
  );
};

export default MyReviews;
