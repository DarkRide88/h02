import {Blog} from "../types/blog";
import {BlogInputModel} from "../models/blogInputModel";
import {ObjectId, WithId} from "mongodb";
import {client} from "../../db/mongo.db";

export const blogsRepository = {
    async findAll() : Promise<WithId<Blog>[]> {
        return client.db('learning').collection<Blog>('blogs').find({}).toArray();

    },
    async findById(id: string) : Promise<WithId<Blog> | null> {
      return  client.db('learning').collection<Blog>('blogs').findOne({ _id: new ObjectId(id)})
    },
    async create(newBlog: Blog): Promise<WithId<Blog>> {
        const insertResult = await client.db('learning').collection<Blog>('blogs').insertOne(newBlog);
        return {...newBlog, _id: insertResult.insertedId};
    },
    async delete(id:string) : Promise<void> {
        await client.db('learning').collection<Blog>('blogs').deleteOne({_id: new ObjectId(id)});
        return;
    },
    async update(id:string, dto: BlogInputModel) : Promise<void>  {
        const result = await client.db('learning').collection<Blog>('blogs').updateOne({id: id}, {$set: dto});
        return;
    }
}
