import {Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {PostViewModel} from "../../models/postViewModel";
import {postsRepository} from "../../repositories/post.repository";

export function  getPostListHandler (req: Request, res: Response<PostViewModel[]>) {
    const posts = postsRepository.findAll();
    res.status(HttpStatus.Ok).send(posts);
}