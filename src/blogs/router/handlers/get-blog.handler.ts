import { Response } from 'express';
import  {blogsService} from "../../application/blogs.service";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";
import {RequestWithParams} from "../../../core/types/requestTypes";
import {mapToBlogViewModel} from "../mappers/map-to-blog-view-model";



export async function getBlogHandler (
    req: RequestWithParams<{ id: string }>,
    res: Response) {

    try {
        const id = req.params.id;
        const blog = await blogsService.findById(id)

        if(!blog) {
            res
                .status(HttpStatus.NotFound)
                .send(createErrorMessages([{ field: 'id', message: 'Blog not found' }]));
            return;
        }
        const blogViewModel = mapToBlogViewModel(blog)
        res.send(blogViewModel)
    } catch(e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }

}