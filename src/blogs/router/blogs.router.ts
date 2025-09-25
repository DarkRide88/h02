import { Router} from "express";
import {getBlogsListHandler} from "./handlers/get-blog-list.handler";
import {getBlogHandler} from "./handlers/get-blog.handler";
import {idValidation} from "../../core/middlewares/validation/params-id.validation-middleware";
import {inputValidationResultMiddleware} from "../../core/middlewares/validation/input-validtion-result.middleware";

export const blogsRouter =  Router({});

blogsRouter
    .get('', getBlogsListHandler)
    .get('/:id', idValidation,inputValidationResultMiddleware, getBlogHandler)
    // .put('/:id', updateVideoHandler)
    // .delete('/:id', deleteVideoHandler)
    // .post('/', createVideoHandler)