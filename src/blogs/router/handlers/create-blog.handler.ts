import {RequestWithBody} from "../../../core/types/requestTypes";
import {BlogInputModel} from "../../models/blogInputModel";
import {blogsRepository} from "../../repositories/blogs.db-repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import  {Response} from "express";
import {mapToBlogViewModel} from "../mappers/map-to-blog-view-model";
import {BlogViewModel} from "../../models/blogVIewModel";

export async function createBlogHandler (
    req: RequestWithBody<BlogInputModel>,
    res:Response
) {
    try {
        const newBlog: BlogInputModel = {
            name: req.body.name,
            description: req.body.description,
            websiteUrl: req.body.websiteUrl
        }

        const createdBlog = await blogsRepository.create(newBlog);
        const blogViewModel: BlogViewModel = mapToBlogViewModel(createdBlog)
        res.status(HttpStatus.Created).send(blogViewModel);
    } catch(e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}