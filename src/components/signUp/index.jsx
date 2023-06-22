import { View } from "react-native";
import SignUp from "./signUp";
import { Formik } from "formik";
import * as yup from "yup";
import useSignUp from "../../hooks/useSignUp";
import { useAuthorization } from "../../hooks/useAutharization";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import useSignIn from "../../hooks/useSignIn";

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username is a required string with a length between 5 and 30")
    .max(30, "Username is a required string with a length between 5 and 30")
    .required("Username is Required"),
  password: yup
    .string()
    .min(5, "Password is a required string with a length between 5 and 50")
    .max(50, "Password is a required string with a length between 5 and 50")
    .required("Password is required"),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match")
    .required("Password confirm is required"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <SignUp onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignUpFormIndex = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const authStore = useAuthorization();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const createdData = await signUp({ username, password });
      const { data } = await signIn({
        username: createdData.data.createUser.username,
        password,
      });
      await authStore.setAccessToken(data);
      apolloClient.resetStore();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit}></SignUpContainer>;
};
export default SignUpFormIndex;
