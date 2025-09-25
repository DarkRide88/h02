import {Request, Response, Router} from "express";
import {HttpStatus} from "../../core/types/http-statuses";
import {db} from "../../db/in-memory.db";
import {getBlogsListHandler} from "./handlers/get-blog-list.handler";

export const blogsRouter =  Router({});


// const  getBlogsListHandler  = async  (req: Request, res: Response) => {
//     res.status(HttpStatus.Ok).send(db.blogs);
// }




blogsRouter
    .get('', getBlogsListHandler)
    // .get('/:id', getVideoHandler)
    // .put('/:id', updateVideoHandler)
    // .delete('/:id', deleteVideoHandler)
    // .post('/', createVideoHandler)