import { Router} from "express";
import {getPostListHandler} from "./handlers/get-post-list.handler";
import {getPostHandler} from "./handlers/get-post.handler";
// import {getPostsListHandler} from "./handlers/get-Post-list.handler";
// import {getPostHandler} from "./handlers/get-Post.handler";
import {idValidation} from "../../core/middlewares/validation/params-id.validation-middleware";
import {inputValidationResultMiddleware} from "../../core/middlewares/validation/input-validtion-result.middleware";
import {createPostHandler} from "./handlers/create-post.handler";
// import {createPostHandler} from "./handlers/create-Post.handler";
// import {PostInputDtoValidation} from "../validation/Post.input-dto.validation-middlewares";
// import {deletePostHandler} from "./handlers/delete-Post.handler";
// import {updatePostHandler} from "./handlers/update-Post.handler";

export const postsRouter =  Router({});

postsRouter
    .get('', getPostListHandler)
    .get('/:id', idValidation,inputValidationResultMiddleware, getPostHandler)
    // .put('/:id', PostInputDtoValidation, inputValidationResultMiddleware, updatePostHandler)
    // .delete('/:id', idValidation, inputValidationResultMiddleware,deletePostHandler)
    .post('/', createPostHandler)