const CreatePost = () => {
  return (
    <div>
      <h1 className="text-indigo-500 font-bold mb-5 mt-2">Create a Post</h1>
      <form className="flex flex-col gap-3">
        <div>
          <input
            type="text"
            placeholder="Title"
            className="bg-transparent p-3 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-linput_shadow dark:shadow-input_shadow mb-5"
          />
          <textarea
            placeholder="What's on your mind"
            className="bg-transparent p-3 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-linput_shadow dark:shadow-input_shadow mb-5"
          />
        </div>
        <div className="flex flex-wrap">
          <span>
            <input
              type="file"
              name=""
              id=""
              className="text-sm text-grey-500
              file:mr-5 file:py-2 file:px-6
              file:rounded-lg file:border-0
              file:text-sm file:font-medium
              file:text-blue-700
              hover:file:cursor-pointer
              dark:text-dtext_color
              dark:file:bg-dbg_navbar
            "
            />
          </span>
          <input
            type="submit"
            value="Post"
            className="mt-5 text-indigo-500 p-4 font-bold border-none w-[100%] cursor-pointer rounded-lg shadow-lbutton_shadow dark:shadow-button_shadow dark:hover:shadow-button_shadow_hover mb-5"
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
