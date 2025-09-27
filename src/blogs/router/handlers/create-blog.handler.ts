import {RequestWithBody} from "../../../core/types/requestTypes";
import {BlogInputModel} from "../../models/blogInputModel";
import {db} from "../../../db/in-memory.db";
import {Blog} from "../../types/blog";
import {blogsRepository} from "../../repositories/blogs.repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import  {Response} from "express";

export function createBlogHandler (
    req: RequestWithBody<BlogInputModel>,
    res:Response
) {
    const newBlog: Blog = {
        id: (db.blogs.length ? +db.blogs[db.blogs.length - 1].id + 1 : 1).toString(),
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl
    }

    blogsRepository.create(newBlog);
    res.status(HttpStatus.Created).send(newBlog);
}