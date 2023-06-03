import { View } from "react-native";
import SignIn from "./SignIn";
import { Formik } from "formik";

const initialValues = {
  name: "",
  password: "",
};

const SignInForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};
export default SignInForm;
