import { View } from "react-native";
import SignIn from "./SignIn";
import { Formik } from "formik";
import * as yup from "yup";
import useSignIn from "../../hooks/useSignIn";
import { useAuthorization } from "../../hooks/useAutharization";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Username is Required"),
  password: yup
    .string()
    .min(8, "Password lenght must be longer than 8 characters")
    .required("Password is required"),
});

const initialValues = {
  username: "gorkem",
  password: "123456789",
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignInFormIndex = () => {
  const [signIn] = useSignIn();
  const authStore = useAuthorization();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      await authStore.setAccessToken(data);
      apolloClient.resetStore();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit}></SignInContainer>;
};
export default SignInFormIndex;
