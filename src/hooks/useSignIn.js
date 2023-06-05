import { LOG_IN } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
const useSignIn = () => {
  const [mutate, result] = useMutation(LOG_IN);

  const signIn = async ({ username, password }) => {
    return await mutate({
      variables: { credentials: { username, password } },
    });
  };

  return [signIn, result];
};
export default useSignIn;
