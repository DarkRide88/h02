import {RequestWithBody} from "../../../core/types/requestTypes";
import {BlogInputModel} from "../../models/blogInputModel";
import {blogsRepository} from "../../repositories/blogs.db-repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import  {Response} from "express";
import {mapToBlogViewModel} from "../mappers/map-to-blog-view-model";
import {BlogViewModel} from "../../models/blogVIewModel";
import {Blog} from "../../types/blog";

export async function createBlogHandler (
    req: RequestWithBody<BlogInputModel>,
    res:Response
) {
    try {
        const newBlog: Blog = {
            name: req.body.name,
            description: req.body.description,
            websiteUrl: req.body.websiteUrl,
            createdAt: new Date().toISOString(),
            isMembership: false,
        }

        const createdBlog = await blogsRepository.create(newBlog);
        const blogViewModel: BlogViewModel = mapToBlogViewModel(createdBlog)
        res.status(HttpStatus.Created).send(blogViewModel);
    } catch(e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}