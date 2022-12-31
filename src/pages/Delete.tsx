import { ActionFunctionArgs, redirect } from "react-router-dom";
import PostService from "../service/PostService";

const action = async ({ params }: ActionFunctionArgs) => {
  const { postId } = params;
  const res = await PostService.deletePost(postId as string);
  console.log({res});
  
  return redirect("/");
};

export default { action }
