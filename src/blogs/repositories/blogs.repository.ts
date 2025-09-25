import {Blog} from "../types/blog";
import {db} from "../../db/in-memory.db";

export const blogsRepository = {
    findAll() : Blog[] {
        return db.blogs;
    },
    findById(id: number) : Blog | null {
        return db.blogs.find((b) => +b.id === id) ?? null;
    }
}

