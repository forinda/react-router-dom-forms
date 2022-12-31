import React from "react";
import Input from "../components/Input";
import { Form, ActionFunctionArgs, redirect } from "react-router-dom";
import PostService, { IPostEntity } from "../service/PostService";

const AddPost = () => {
  return (
    <div>
      <Form
        method="post"
        className="max-w-[30rem] p-10 mx-auto shadow border m-10 flex flex-col gap-4"
      >
        <h1 className="text-4xl font-bold  py-4">Create new post</h1>
        <Input
          label="Post label"
          type="text"
          name="title"
          id="title"
          defaultValue={""}
          placeholder="Title..."
        />
        <Input
          label="Post body"
          type="textarea"
          cols={20}
          name="body"
          id="body"
          defaultValue={""}
          placeholder="Body text..."
        />
        <button
          type="submit"
          className="text-white font-bold bg-blue-600 px-4 py-2"
        >
          Submit new post
        </button>
      </Form>
    </div>
  );
};

const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  await PostService.addPost(
    Object.fromEntries(formData) as unknown as IPostEntity
  );

  return redirect("/");
};

export default Object.assign(AddPost, { action });
