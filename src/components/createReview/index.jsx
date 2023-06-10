import * as yup from "yup";
import { View } from "react-native";
import { Formik } from "formik";
import CreateReview from "./createReview";
import useCreateReview from "../../hooks/useCreateReview";
import { useNavigate } from "react-router-native";

const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Repository owner's username is  required"),
  name: yup.string().required("Repository's name is required"),
  rating: yup
    .number()
    .min(0, "Must be between 0 and 100")
    .max(100, "Must be between 0 and 100")
    .required(),
  review: yup.string(),
});

const initialValues = {
  username: "django",
  name: "django",
  rating: "90",
  review: "",
};

export const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <CreateReview onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const CreateReviewFormIndex = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, name, rating, review } = values;
    try {
      const { data } = await createReview({ username, name, rating, review });
      navigate(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit}></CreateReviewContainer>;
};
export default CreateReviewFormIndex;
