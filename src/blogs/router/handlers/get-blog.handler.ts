import { Request, Response } from 'express';
import {blogsRepository} from "../../repositories/blogs.repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";
import {RequestWithParams} from "../../../core/types/requestTypes";
import {BlogViewModel} from "../../models/blogVIewModel";
import {ErroreType} from "../../types/validationError";


export function getBlogHandler (
    req: RequestWithParams<{ id: string }>,
    res: Response<BlogViewModel | ErroreType>) {

    const id = parseInt(req.params.id);
    const blog = blogsRepository.findById(id)

    if(!blog) {
        res
            .status(HttpStatus.NotFound)
            .send(createErrorMessages([{ field: 'id', message: 'Blog not found' }]));
        return;
    }

    res.send(blog)
}