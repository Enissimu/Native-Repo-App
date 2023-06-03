import { View } from "react-native";
import SignIn from "./SignIn";
import { Formik } from "formik";
import * as yup from "yup";
const initialValues = {
  username: "",
  password: "",
};

const loginValidationSchema = yup.object().shape({
  email: yup.string().required("Username is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

const SignInForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View>
      <Formik
        validationSchema={loginValidationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};
export default SignInForm;
