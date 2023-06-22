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

export const ReviewDisplayIndex = ({ reviewNodes, repository, endReached }) => {
  return (
    <FlatList
      data={reviewNodes}
      onEndReached={endReached}
      onEndReachedThreshold={0.1}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item}></ReviewItem>}
      keyExtractor={(id) => id.id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

const ReviewIndex = () => {
  const { repoId } = useParams();
  const { repository, fetchMore } = useRepository({
    first: 5,
    repositoryId: repoId,
  });
  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];
  const endReached = () => {
    try {
      console.log("END REACHED?????");
      fetchMore();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ReviewDisplayIndex
      endReached={endReached}
      reviewNodes={reviewNodes}
      repository={repository}
    ></ReviewDisplayIndex>
  );
};

export default ReviewIndex;
