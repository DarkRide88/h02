import {Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {PostViewModel} from "../../models/postViewModel";
import {postsRepository} from "../../repositories/posts.db-repository";
import {mapToBlogViewModel} from "../../../blogs/router/mappers/map-to-blog-view-model";
import {mapToPostViewModel} from "../mappers/map-to-post-view-model";


export async function  getPostListHandler (req: Request, res: Response<PostViewModel[]>) {
    const posts = await postsRepository.findAll();
    const blogsViewmModel = posts.map(mapToPostViewModel);
    res.status(HttpStatus.Ok).send(blogsViewmModel);
}