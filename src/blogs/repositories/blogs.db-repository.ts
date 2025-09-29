import {Blog} from "../types/blog";
import {db} from "../../db/in-memory.db";
import {BlogInputModel} from "../models/blogInputModel";
import {client} from "./db";
import {ObjectId, WithId} from "mongodb";

export const blogsRepository = {
    async findAll() : Promise<WithId<Blog>[]> {
        return client.db('learning').collection<Blog>('blogs').find({}).toArray();

        // return db.blogs;
    },
    async findById(id: string) : Promise<WithId<Blog> | null> {
      return  client.db('learning').collection<Blog>('blogs').findOne({ _id: new ObjectId(id)})
    },
    async create(newBlog: Blog): Promise<WithId<Blog>> {
        const insertResult = await client.db('learning').collection<Blog>('blogs').insertOne(newBlog);
        // db.blogs.push(newBlog);
        return {...newBlog, _id: insertResult.insertedId};
    },
    async delete(id:number) : Promise<void> {
        await client.db('learning').collection<Blog>('blogs').deleteOne({id: id});
        // const index = db.blogs.findIndex((b) => +b.id === id);
        // if (index === -1) {
        //     throw new Error("Blog not  exist");        // }

        return;
    },
    async update(id:string, dto: BlogInputModel) : Promise<void>  {
        const result = await client.db('learning').collection<Blog>('blogs').updateOne({id: id}, {$set: dto});
        // const blog =  db.blogs.find((b) => +b.id === id);
        return;
        // if (!blog) {
        //     throw new Error('Blog not exist');
        // }

        // blog.name = dto.name ?? blog.name;
        // blog.description = dto.description ?? blog.description;
        // blog.websiteUrl = dto.websiteUrl ?? blog.websiteUrl;
        // return;
    }
}
