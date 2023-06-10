import { useQuery } from "@apollo/client";
import { GET_REPOS } from "../graphql/queries";

const useRepositories = () => {
  const { data, loading, error } = useQuery(GET_REPOS);

  if (loading) return { repositories: undefined };
  if (error) return { repositories: undefined };

  return data;
};

export default useRepositories;
