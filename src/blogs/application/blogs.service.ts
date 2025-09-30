import {Blog} from "../types/blog";
import {BlogInputModel} from "../models/blogInputModel";

import {blogsRepository} from "../repositories/blogs.db-repository";
import {WithId} from "mongodb";


export const blogsService = {
    async findAll() : Promise<WithId<Blog>[]> {
        return blogsRepository.findAll();

    },
    async findById(id: string) : Promise<WithId<Blog> | null> {
        return  blogsRepository.findById(id)
    },
    async create(newBlog: Blog): Promise<WithId<Blog>> {
        const insertResult = await blogsCollection.insertOne(newBlog);
        return {...newBlog, _id: insertResult.insertedId};
    },
    async delete(id:string) : Promise<void> {
        await blogsCollection.deleteOne({_id: new ObjectId(id)});
        return;
    },
    async update(id:string, dto: BlogInputModel) : Promise<void>  {
        await blogsCollection.updateOne({_id: new ObjectId(id)}, {$set: dto});
        return;
    }
}
