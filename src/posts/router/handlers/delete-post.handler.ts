import {RequestWithParams} from "../../../core/types/requestTypes";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";
import {Response} from 'express'
import {postsRepository} from "../../repositories/posts.db-repository";

export async function deletePostHandler(
    req: RequestWithParams<{ id:string }>,
    res: Response,
) {
    const id = req.params.id;
    const post = await postsRepository.findById(id);

    if(!post) {
        res
            .status(HttpStatus.NotFound)
            .send(createErrorMessages([{ field: 'blogId', message: 'Post not found' }]));
        return;
    }

    await postsRepository.delete(id)
    res.sendStatus(HttpStatus.NoContent);
}