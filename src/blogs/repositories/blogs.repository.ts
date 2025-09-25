import {Blog} from "../types/blog";
import {db} from "../../db/in-memory.db";

export const blogsRepository = {
    findAll() : Blog[] {
        return db.blogs;
    }
}