import {blogsRepository} from "../../repositories/blogs.repository";
import {createErrorMessages} from "../../../core/middlewares/validation/input-validtion-result.middleware";
import {HttpStatus} from "../../../core/types/http-statuses";
import { Response} from "express";
import {RequestWithParams, RequestWithParamsAndBody} from "../../types/requestTypes";
import {BlogInputModel} from "../../models/blogInputModel";



export function updateBlogHandler(
    req: RequestWithParamsAndBody<{ id:string }, BlogInputModel>,
    res: Response,
) {

    const id = parseInt(req.params.id);
    const blog = blogsRepository.findById(id);
    if (!blog) {
        res
            .status(HttpStatus.NotFound)
            .send(createErrorMessages([{field:'id', message:'Blog not found'}]));
    }

    blogsRepository.update(id, req.body);
    res.sendStatus(HttpStatus.NoContent);
}