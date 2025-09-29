import {Blog} from "../types/blog";
import {db} from "../../db/in-memory.db";
import {BlogInputModel} from "../models/blogInputModel";
import {WithId} from "mongodb";

export const blogsRepository = {
    async findAll() : Promise<WithId< Blog[]>> {
        return db.blogs;
    },
    async findById(id: number) : Promise<Blog | null> {
        return db.blogs.find((b) => +b.id === id) ?? null;
    },
    async create(newBlog: Blog): Promise<Blog> {
        db.blogs.push(newBlog);
        return newBlog;
    },
    async delete(id:number) : Promise<void> {
        const index = db.blogs.findIndex((b) => +b.id === id);
        if (index === -1) {
            throw new Error("Blog not  exist");
        }
        db.blogs.splice(index,1);
        return;
    },
    async update(id:number, dto: BlogInputModel) : Promise<void>  {
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

