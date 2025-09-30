import {Post} from "../types/post";
import {PostInputModel} from "../models/postInputModel";
import {ObjectId, WithId} from "mongodb";
import {postsCollection, client, blogsCollection} from "../../db/mongo.db";
import {PostViewModel} from "../models/postViewModel";

export const postsRepository = {
    async findAll() : Promise<WithId<Post>[]> {
        return postsCollection.find({}).toArray();

    },
    async findById(id: string) : Promise<WithId<Post> | null> {
        return  postsCollection.findOne({ _id: new ObjectId(id)})
    },
    async create(newPost: Post, id:string): Promise<WithId<Post>> {
        const insertResult = await postsCollection.insertOne(newPost);
        return {...newPost, _id: insertResult.insertedId};
    },
    async delete(id:string) : Promise<void> {
        await postsCollection.deleteOne({_id: new ObjectId(id)});
        return;
    },
    async update(id:string, dto: PostInputModel) : Promise<void>  {
        const result = await postsCollection.updateOne({_id: new ObjectId(id)}, {$set: dto});
        return;
    }
}
