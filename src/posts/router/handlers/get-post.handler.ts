import {RequestWithParams} from "../../../core/types/requestTypes";
import {Response} from 'express'
import {postsRepository} from "../../repositories/post.repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";
import {PostViewModel} from "../../models/postViewModel";
import {ErroreType} from "../../../blogs/types/validationError";

export function getPostHandler (
    req: RequestWithParams<{ id: string }>,
    res: Response<PostViewModel | ErroreType>): void {

    let id = parseInt(req.params.id);
    let post = postsRepository.findById(id);

    if(!post) {
        res
            .status(HttpStatus.NotFound)
            .send(createErrorMessages([{ message: 'Post not found', field: 'id' }]));
        return
    }

    res.send(post);
}