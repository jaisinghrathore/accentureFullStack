import express from "express";
import {
  getAllBlogs,
  sendBlogs,
  deleteBlog,
  updateBlog,
  getBlog,
} from "../controller/blogController.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);
router.post("/sendData", sendBlogs);

export default router;
