import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import postsSlice from "../../redux/slices/posts.slice";
import { PostValidationSchema } from "../../validations/posts";

const CreatePost = () => {
  const dispatch = useDispatch();
  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleCreatePost = (values: any) => {
    convertToBase64(values.image).then((res) => {
      dispatch(postsSlice.actions.createPost({ ...values, image: res }));
    });
  };
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
          image: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleCreatePost(values);
        }}
        validationSchema={PostValidationSchema}
      >
        {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <h1 className="text-indigo-500 font-bold mb-5 mt-2">
              Create a Post
            </h1>
            <div>
              <input
                type="text"
                placeholder="Title"
                value={values.title}
                onChange={handleChange}
                name="title"
                className="bg-transparent p-3 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-linput_shadow dark:shadow-input_shadow mb-5"
              />
              {/* <span className="text-sm text-red-300 mt-2 mb-2">
                {errors.title}
              </span> */}
              <textarea
                value={values.description}
                placeholder="What's on your mind"
                onChange={handleChange}
                name="description"
                className="bg-transparent p-3 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-linput_shadow dark:shadow-input_shadow mb-5"
              />
              {/* <span className="text-sm text-red-300 mt-2 mb-2">
                {errors.description}
              </span> */}
            </div>
            <div className="flex flex-wrap">
              <span>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={(event: any) => {
                    setFieldValue("image", event.target.files[0]);
                  }}
                  className="text-sm text-grey-500
                    file:mr-5 file:py-2 file:px-6
                    file:rounded-lg file:border-0
                    file:text-sm file:font-medium
                    file:text-blue-700
                    hover:file:cursor-pointer
                    dark:text-dtext_color
                    dark:file:bg-dbg_navbar"
                />
                {/* <span className="text-sm text-red-300 mt-2 mb-2">
                  {errors.image}
                </span> */}
              </span>
              <input
                type="submit"
                value="Post"
                className="mt-5 text-indigo-500 p-4 font-bold border-none w-[100%] cursor-pointer rounded-lg shadow-lbutton_shadow dark:shadow-button_shadow dark:hover:shadow-button_shadow_hover mb-5"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePost;
