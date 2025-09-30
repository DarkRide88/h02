import {Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {blogsRepository} from "../../repositories/blogs.db-repository";
import {BlogViewModel} from "../../models/blogVIewModel";
import {mapToBlogViewModel} from "../mappers/map-to-blog-view-model";


export async function  getBlogsListHandler (req: Request, res: Response<BlogViewModel[]>) {
    try {
        const blogs = await blogsRepository.findAll();
        const blogsViewModels = blogs.map(mapToBlogViewModel);
        res.status(HttpStatus.Ok).send(blogsViewModels);
    } catch(e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}