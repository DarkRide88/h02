import {Video, availableResolutions} from "../videos/types/video";
import {Blog} from "../blogs/types/blog";
import {Post} from "../posts/types/post";




export const db = {
  blogs: <Blog[]>[
    {
      id: '1',
      name: 'How to learn js',
      description: 'Know how to learn js',
      websiteUrl: "https://www.howtolearn.com",
    },
    {
      id: '2',
      name: 'How to learn Ruby',
      description: 'Know how to learn Ruby',
      websiteUrl: "https://www.howtolearn.com",
    },
    {
      id: '3',
      name: 'How to learn C#',
      description: 'Know how to learn C#',
      websiteUrl: "https://www.howtolearn.com",
    },
  ],
  posts: <Post[]>[
    {
      id: '1',
      title: 'First Js lesson',
      shortDescription: 'frist lesson',
      content: 'SOME CONTENT',
      blogId: '1',
      blogName: 'How To Learn Js',
    },
    {
      id: '2',
      title: 'First Ruby lesson',
      shortDescription: 'frist lesson',
      content: 'SOME CONTENT',
      blogId: '2',
      blogName: 'How To Learn Ruby',
    },
    {
      id: '3',
      title: 'First C# lesson',
      shortDescription: 'frist lesson',
      content: 'SOME CONTENT',
      blogId: '3',
      blogName: 'How To Learn C#',
    },
  ]
};

