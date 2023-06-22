import { useQuery } from "@apollo/client";
import { GET_REPOS } from "../graphql/queries";

const useRepositories = (sort) => {
  const { data, loading, fetchMore, error, refetch, ...result } = useQuery(
    GET_REPOS,
    {
      variables: sort,
    }
  );

  if (loading) return { repositories: undefined };
  if (error) return { repositories: undefined };

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...sort,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    refetch,
    ...result,
  };
};

export default useRepositories;
