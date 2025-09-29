import {RequestWithParams} from "../../../core/types/requestTypes";
import {Response} from "express";
import {BlogViewModel} from "../../models/blogVIewModel";
import {ErroreType} from "../../types/validationError";
import {blogsRepository} from "../../repositories/blogs.in-memory-repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";


export async function deleteBlogHandler (
    req: RequestWithParams<{ id: string }>,
    res: Response<BlogViewModel | ErroreType>) {

    try {
        const id = parseInt(req.params.id);
        const blog = await blogsRepository.findById(id)

        if(!blog) {
            res
                .status(HttpStatus.NotFound)
                .send(createErrorMessages([{ field: 'id', message: 'Blog not found' }]));
            return;
        }
        await blogsRepository.delete(id)
        res.sendStatus(HttpStatus.NoContent);
    } catch (e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }

}