import {RequestWithParamsAndBody} from "../../../core/types/requestTypes";
import {Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/middlewares/validation/input-validtion-result.middleware";
import {PostInputModel} from "../../models/postInputModel";
import {postsRepository} from "../../repositories/post.repository";

export function updatePostHandler(
    req: RequestWithParamsAndBody<{ id:string }, PostInputModel>,
    res: Response,
) {

    const id = parseInt(req.params.id);
    const post = postsRepository.findById(id);
    if (!post) {
        res
            .status(HttpStatus.NotFound)
            .send(createErrorMessages([{message:'post not found', field:'id'}]));
    }

    postsRepository.update(id, req.body);
    res.sendStatus(HttpStatus.NoContent);
}