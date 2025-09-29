import {blogsRepository} from "../../repositories/blogs.db-repository";
import {createErrorMessages} from "../../../core/middlewares/validation/input-validtion-result.middleware";
import {HttpStatus} from "../../../core/types/http-statuses";
import { Response} from "express";
import {RequestWithParams, RequestWithParamsAndBody} from "../../../core/types/requestTypes";
import {BlogInputModel} from "../../models/blogInputModel";



export async function updateBlogHandler(
    req: RequestWithParamsAndBody<{ id:string }, BlogInputModel>,
    res: Response,
) {
    try {
        const id = req.params.id;
        const blog = await blogsRepository.findById(id);
        if (!blog) {
            res
                .status(HttpStatus.NotFound)
                .send(createErrorMessages([{message:'Blog not found', field:'id' }]));
        }
        await blogsRepository.update(id, req.body);
        res.sendStatus(HttpStatus.NoContent);
    } catch(e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }

}