import Tag from "../models/Tag.model";

export const createTag = async (req, res) => {
  const body = req.body;
  let error = "";
  if (body.name) {
    let tag = await Tag.findById(body.name);
    if (!tag) {
      tag = new Tag({ name: body.name });
      tag = await tag.save();
        return res.status(201).send({ code: "success", tag });
    } else {
      error = "tag exist ";
    }
  } else {
    error = "name reauired ";
  }
  return res.status(204).send({ error, code: "failed" });
};
