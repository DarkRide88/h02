import {Blog} from "../types/blog";
import {BlogInputModel} from "../models/blogInputModel";
import {ObjectId, WithId} from "mongodb";
import {blogsCollection} from "../../db/mongo.db";

export const blogsRepository = {
    async findAll() : Promise<WithId<Blog>[]> {
        return blogsCollection.find({}).toArray();

    },
    async findById(id: string) : Promise<WithId<Blog> | null> {
      return  blogsCollection.findOne({ _id: new ObjectId(id)})
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
        const result = await blogsCollection.updateOne({_id: new ObjectId(id)}, {$set: dto});
        return;
    }
}
