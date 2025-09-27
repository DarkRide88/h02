import {Blog} from "../types/blog";
import {db} from "../../db/in-memory.db";

export const blogsRepository = {
    findAll() : Blog[] {
        return db.blogs;
    },
    findById(id: number) : Blog | null {
        return db.blogs.find((b) => +b.id === id) ?? null;
    },
    create(newBlog: Blog): Blog {
        db.blogs.push(newBlog);
        return newBlog;
    },
    delete(id:number) : void {
        const index = db.blogs.findIndex((b) => +b.id === id);
        if (index === -1) {
            throw new Error("Blog not  exist");
        }
        db.blogs.splice(index,1);
        return;
    }
}

