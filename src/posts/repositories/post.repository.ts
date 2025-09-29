// import {db} from "../../db/in-memory.db";
// import {Post} from "../types/post";
// import {PostInputModel} from "../models/postInputModel";
// import {blogsInMemoryRepository} from "../../blogs/repositories/blogs.in-memory-repository";
// import {blogsRepository} from "../../blogs/repositories/blogs.db-repository";
//
// export const postsRepository = {
//     async findAll() : Promise<Post[]>  {
//         return db.posts;
//     },
//     async findById(id: number) : Promise<Post | null>  {
//         return db.posts.find((b) => +b.id === id) ?? null;
//     },
//     async create(newPost: Post, id: string): Promise<Post> {
//         db.posts.push(newPost);
//         return newPost;
//     },
//     async delete(id:number) : Promise<void> {
//         const index = db.posts.findIndex((b) => +b.id === id);
//         if (index === -1) {
//             throw new Error("Post not  exist");
//         }
//         db.posts.splice(index,1);
//         return;
//     },
//     async update(id:number, dto: PostInputModel) : Promise<void>  {
//         const post =  db.posts.find((b) => +b.id === id);
//         const blog = await blogsRepository.findById(dto.blogId)
//         if (!post) {
//             throw new Error('Post not exist');
//         }
//         if(!blog) {
//             throw new Error("Blog id used in post not exist')");
//         }
//
//         post.title = dto.title ?? post.title;
//         post.shortDescription = dto.shortDescription ?? post.shortDescription;
//         post.content = dto.content ?? post.content;
//         post.blogId = dto.blogId ?? post.blogId;
//         post.blogName = blog.name
//         return;
//     }
// }
//
