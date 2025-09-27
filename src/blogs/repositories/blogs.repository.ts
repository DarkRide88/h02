import {Blog} from "../types/blog";
import {db} from "../../db/in-memory.db";
import {BlogInputModel} from "../models/blogInputModel";

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
    },
    update(id:number, dto: BlogInputModel) : void  {
        const blog =  db.blogs.find((b) => +b.id === id);

        if (!blog) {
            throw new Error('Blog not exist');
        }

        blog.name = dto.name ?? blog.name;
        blog.description = dto.description ?? blog.description;
        blog.websiteUrl = dto.websiteUrl ?? blog.websiteUrl;
        return;
    }
}

