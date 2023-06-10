import { useParams } from "react-router-native";
import useRepository from "../../../hooks/useRepository";
import { StyleSheet, View, FlatList } from "react-native";
import RepositoryInfo from "./repositoryInfo";
import ReviewItem from "./reviewItem";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const ReviewIndex = () => {
  const { repoId } = useParams();
  const { repository } = useRepository(repoId);
  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item}></ReviewItem>}
      keyExtractor={(id) => id.id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

export default ReviewIndex;
