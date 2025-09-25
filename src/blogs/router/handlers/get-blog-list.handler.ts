import {Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {blogsRepository} from "../../repositories/blogs.repository";
import {BlogViewModel} from "../../models/blogVIewModel";


export function  getBlogsListHandler (req: Request, res: Response<BlogViewModel[]>) {
    const blogs = blogsRepository.findAll();
    res.status(HttpStatus.Ok).send(blogs);
}