import {RequestWithParams} from "../../../core/types/requestTypes";
import {postsRepository} from "../../repositories/post.repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";
import {Response} from 'express'

export function deletePostHandler(
    req: RequestWithParams<{ id:string }>,
    res: Response,
) {
    const id = parseInt(req.params.id);
    const post = postsRepository.findById(id);

    if(!post) {
        res
            .status(HttpStatus.NotFound)
            .send(createErrorMessages([{ field: 'blogId', message: 'Post not found' }]));
        return;
    }

    postsRepository.delete(id)
    res.sendStatus(HttpStatus.NoContent);
}