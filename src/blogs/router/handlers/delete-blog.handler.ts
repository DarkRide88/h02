import {RequestWithParams} from "../../types/requestTypes";
import {Response} from "express";
import {BlogViewModel} from "../../models/blogVIewModel";
import {ErroreType} from "../../types/validationError";
import {blogsRepository} from "../../repositories/blogs.repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";


export function deleteBlogHandler (
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
    blogsRepository.delete(id)
    res.sendStatus(HttpStatus.NoContent);
}