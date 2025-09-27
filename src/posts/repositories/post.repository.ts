import {db} from "../../db/in-memory.db";
import {Post} from "../types/post";
import {PostInputModel} from "../models/postInputModel";
import {blogsRepository} from "../../blogs/repositories/blogs.repository";

export const postsRepository = {
    findAll() : Post[] {
        return db.posts;
    },
    findById(id: number) : Post | null {
        return db.posts.find((b) => +b.id === id) ?? null;
    },
    create(newPost: Post): Post {
        db.posts.push(newPost);
        return newPost;
    },
    delete(id:number) : void {
        const index = db.posts.findIndex((b) => +b.id === id);
        if (index === -1) {
            throw new Error("Post not  exist");
        }
        db.posts.splice(index,1);
        return;
    },
    update(id:number, dto: PostInputModel) : void  {
        const post =  db.posts.find((b) => +b.id === id);
        const blog = blogsRepository.findById(+dto.blogId)
        if (!post) {
            throw new Error('Post not exist');
        }
        if(!blog) {
            throw new Error("Blog id used in post not exist')");
        }

        post.title = dto.title ?? post.title;
        post.shortDescription = dto.shortDescription ?? post.shortDescription;
        post.content = dto.content ?? post.content;
        post.blogId = dto.blogId ?? post.blogId;
        post.blogName = blog.name
        return;
    }
}

