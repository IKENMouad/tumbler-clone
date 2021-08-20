import asyncHandler from "express-async-handler";

export const createPostRequest = asyncHandler(async (req, res) => {
  let data = req.body;

  if (Object.keys(data).length > 0) {
    let post = new Post({
      type: data.type,
      title: data.title,
      description: data.description,
      tags: data.tags,
      hash: data.hash,
    });
    post = await post.save();
    return res.status(201).json({ post, code: "success" });
  } else {
    return res.status(204).json({ code: "failed" });
  }
});

export const fetchPostsByHash = async (req, res) => {
    const { hashId } = req.params;
    let error = "";
    if (hashId) {
        let posts = await Post.find({ hash: hashId });
        if (posts?.length > 0) {
            return res.status(200).json({ items: posts, total: posts.length });
        } else {
            error = "no posts";
        }
    } else {
        error = "no tag to search ";
    }
    return res.status(204).json({ error, code: "failed" });
};

export const fetchPostsByTag = async (req, res) => {
    const { tagId } = req.params;
    let error = "";
    if (tagId) {
        let posts = await Post.find({ tags: { $in: [tagId] } });
        if (posts?.length > 0) {
            return res.status(200).json({ items: posts, total: posts.length });
        } else {
            error = "no posts";
        }
    } else {
        error = "no tag to search ";
    }
    return res.status(204).json({ error, code: "failed" });
};

export const fetchPost = async (req, res) => {
    const { postId } = req.params;
    let error = "";
    if (postId) {
        let post = await Post.findById(postId);
        if (post) {
            return res.status(200).json({ post, code: "success" });
        } else {
            error = "no post";
        }
    } else {
        error = "no postId to search ";
    }
    return res.status(204).json({ error, code: "failed" });
};
