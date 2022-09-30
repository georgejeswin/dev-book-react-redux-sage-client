import * as yup from "yup";

export const PostValidationSchema = yup.object().shape({
  title: yup.string().required("Title cannot be empty"),
  description: yup.string().required("Description cannot be empty"),
  image: yup.string(),
});
