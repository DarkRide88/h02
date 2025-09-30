import {RequestWithParams} from "../../../core/types/requestTypes";
import {Response} from 'express'
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";
import {PostViewModel} from "../../models/postViewModel";
import {ErroreType} from "../../../blogs/types/validationError";
import {postsRepository} from "../../repositories/posts.db-repository";
import {mapToPostViewModel} from "../mappers/map-to-post-view-model";

export async function getPostHandler (
    req: RequestWithParams<{ id: string }>,
    res: Response<PostViewModel | ErroreType>): Promise<void> {

    let id = req.params.id;
    let post = await postsRepository.findById(id);

    if(!post) {
        res
            .status(HttpStatus.NotFound)
            .send(createErrorMessages([{ message: 'Post not found', field: 'id' }]));
        return
    }
    const postViewModel = mapToPostViewModel(post);

    res.send(postViewModel);
}