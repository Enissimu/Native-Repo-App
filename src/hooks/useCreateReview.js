import { useMutation } from "@apollo/client";
import { SEND_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(SEND_REVIEW);

  const createReview = async ({ username, name, rating, review }) => {
    return await mutate({
      variables: {
        review: {
          ownerName: username,
          repositoryName: name,
          rating: Number(rating),
          text: review,
        },
      },
    });
  };
  return [createReview, result];
};
export default useCreateReview;
