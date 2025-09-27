import {RequestWithBody} from "../../../core/types/requestTypes";
import {Response} from "express";
import {db} from "../../../db/in-memory.db";
import {HttpStatus} from "../../../core/types/http-statuses";
import {postsRepository} from "../../repositories/post.repository";
import {Post} from "../../types/post";
import {PostInputModel} from "../../models/postInputModel";
import {blogsRepository} from "../../../blogs/repositories/blogs.repository";
import {createErrorMessages} from "../../../core/utils/error.utils";

export function createPostHandler (
    req: RequestWithBody<PostInputModel>,
    res:Response
) {
    const blog = blogsRepository.findById(+req.body.blogId)

    if(!blog) {
        res
            .status(HttpStatus.NotFound)
            .send(createErrorMessages([{ field: 'blogId', message: 'Blog used in post is not found' }]));
        return;
    }

    const newPost: Post = {
        id: (db.posts.length ? +db.posts[db.posts.length - 1].id + 1 : 1).toString(),
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
        blogName: blog.name
    }

    postsRepository.create(newPost);
    res.status(HttpStatus.Created).send(newPost);
}