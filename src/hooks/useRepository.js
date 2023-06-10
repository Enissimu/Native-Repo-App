import { useQuery } from "@apollo/client";
import { GET_ONE_REPO } from "../graphql/queries";

const useRepository = (repoId) => {
  const { data, loading, error } = useQuery(GET_ONE_REPO, {
    variables: { repositoryId: repoId },
    fetchPolicy: "cache-and-network",
  });
  if (loading) return { repository: undefined };
  if (error) return { repository: undefined };
  return data;
};

export default useRepository;
