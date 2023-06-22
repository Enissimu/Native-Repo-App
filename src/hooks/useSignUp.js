import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";
const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);

  const signIn = async ({ username, password }) => {
    return await mutate({
      variables: { user: { username, password } },
    });
  };

  return [signIn, result];
};
export default useSignUp;
