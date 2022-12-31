import React from "react";
import { Form, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import Input from "../components/Input";
import PostService, { IPostEntity } from "../service/PostService";

const Edit = () => {
  const { data } = useLoaderData() as { data: IPostEntity };
  console.log(data);

  return (
    <div>
      {data ? (
        <Form
          method="post"
          className="max-w-[30rem] p-10 mx-auto shadow border m-10 flex flex-col gap-4"
        >
          <Input
            id="title"
            required
            name="title"
            label="Title"
            defaultValue={data.title}
          />

          <Input
            id="body"
            name="body"
            required
            type="textarea"
            defaultValue={data.body}
          />
          <button type="submit">Submit</button>
        </Form>
      ) : (
        <h1>No post</h1>
      )}
      <div>
        <Form method="post" action="destroy">
          <button
            type="submit"
            className="bg-red-500 text-white p-4 mx-auto m-7"
          >
            Delete
          </button>
        </Form>
      </div>
    </div>
  );
};

const loader = async ({ params }: LoaderFunctionArgs) => {
  const { postId } = params as { postId: string };
  console.log("Deleting - id:", postId);

  const post = await PostService.findPostById(postId);

  return { data: post };
};

export default Object.assign(Edit, { loader, action: () => {} });
