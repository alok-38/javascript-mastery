"use client";
import { onGetBlogPost } from '@/actions/landing';
import { CardDescription } from '@/components/ui/card';
import { getMonthName } from '@/lib/utils';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';

type Props = { params: { id: string } };

const PostPage: React.FC<Props> = ({ params }) => {
  const [post, setPost] = useState<any>(null); // Initialize post state

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await onGetBlogPost(params.id);
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [params.id]); // Fetch post when params.id changes

  if (!post) {
    return <div>Loading...</div>; // Handle loading state if post is not yet available
  }

  // Ensure post.content is a string before passing to parse
  const parsedContent = typeof post.content === 'string' ? parse(post.content) : null;

  return (
    <div className="container flex justify-center my-10">
      <div className="lg:w-6/12 flex flex-col">
        <CardDescription>
          {getMonthName(post.createdAt.getMonth())} {post.createdAt.getDate()} {post.createdAt.getFullYear()}
        </CardDescription>
        <h2 className="text-6xl font-bold">{post.title}</h2>
        <div className="text-xl parsed-container flex flex-col mt-10 gap-10">
          {parsedContent}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
