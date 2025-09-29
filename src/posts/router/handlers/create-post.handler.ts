import {RequestWithBody} from "../../../core/types/requestTypes";
import {Response} from "express";
import {db} from "../../../db/in-memory.db";
import {HttpStatus} from "../../../core/types/http-statuses";
import {Post} from "../../types/post";
import {PostInputModel} from "../../models/postInputModel";
import {createErrorMessages} from "../../../core/utils/error.utils";
import {blogsRepository} from "../../../blogs/repositories/blogs.db-repository";
import {mapToPostViewModel} from "../mappers/map-to-post-view-model";
import {PostViewModel} from "../../models/postViewModel";
import {postsRepository} from "../../repositories/posts.db-repository";

export async function createPostHandler (
    req: RequestWithBody<PostInputModel>,
    res:Response
) {
    const blog = await blogsRepository.findById(req.body.blogId)

    if(!blog) {
        res
            .status(HttpStatus.NotFound)
            .send(createErrorMessages([{ field: 'blogId', message: 'Blog used in post is not found' }]));
        return;
    }

    const newPost: Post = {
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
        blogName: blog.name,
        createdAt: new Date().toISOString(),
    }

    const createdPost = await postsRepository.create(newPost, req.body.blogId);
    const postViewModel : PostViewModel = mapToPostViewModel(createdPost);

    res.status(HttpStatus.Created).send(postViewModel);
}