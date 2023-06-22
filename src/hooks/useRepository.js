import { useQuery } from "@apollo/client";
import { GET_ONE_REPO } from "../graphql/queries";

const useRepository = (repoId) => {
  const { data, loading, fetchMore, error, ...result } = useQuery(
    GET_ONE_REPO,
    {
      variables: repoId,
      fetchPolicy: "cache-and-network",
    }
  );

  if (loading) return { repository: undefined };
  if (error) return { repository: undefined };

  const handleFetchMore = () => {
    console.log(data.repository);

    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data?.repository.reviews.pageInfo.endCursor,
        ...repoId,
      },
    });
  };
  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepository;
