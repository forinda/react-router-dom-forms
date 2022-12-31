export interface IPostEntity {
  id: number | string;
  title: string;
  body: string;
  image?: string;
}

class PostService {
  private _posts: IPostEntity[];
  private _postStateName = "app-202-posts";

  constructor() {
    this._posts = JSON.parse(localStorage.getItem(this._postStateName)!)
      ? JSON.parse(localStorage.getItem(this._postStateName)!)
      : [];
  }

  get posts() {
    return this._posts;
  }
  set posts(posts) {
    this._posts = posts;
  }
  sync() {
    localStorage.setItem(this._postStateName, JSON.stringify(this._posts));
    return this;
  }
  /**
   * Find a given post
   * @param post
   * @returns
   */
  public addPost = async (post: Exclude<IPostEntity, "id">) => {
    if (!post.body || !post.body) {
      throw new Error("Missing required fields, title and body");
    }
    post.id = new Date().getTime().toString();
    post.image = `https://picsum.photos/id/${this.posts.length + 10}/600/600`;
    this._posts.push(post);
    this.sync();
    return post;
  };
  /**
   * Delete a given post
   * @param id
   * @returns
   */
  public deletePost = async (id: string) => {
    try {
      const posts = this.posts.slice();

      const newState = posts.filter((p) => p.id !== id);

      this.posts = newState;
      this.sync();
      return { message: "Success" };
    } catch (error) {
      console.log(error);

      return error as Error;
    }
  };
  /**
   *Update post
   * @param post
   * @param id
   * @returns
   */
  public updatePost = async (post: Partial<IPostEntity>, id: string) => {
    try {
      const p = this.posts.find((p) => p.id === id);
      if (!p) {
        throw new Error("Post not found");
      }

      const updated = this.posts.map((p) =>
        post.id === id
          ? {
              ...p,
              ...post,
            }
          : p
      );
      this.posts = updated;
      this.sync();
      return { message: "success" };
    } catch (err) {
      return err;
    }
  };
  /**
   * Find post by Id
   */
  public findPostById = async (id: string) => {
    const post = this.posts.find((p) => p.id === id);
    return post;
  };
}

export default new PostService();
