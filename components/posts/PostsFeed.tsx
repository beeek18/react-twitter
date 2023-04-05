import React from "react";

import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";

interface PostsFeedProps {
  userId?: string;
}

const PostsFeed: React.FC<PostsFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((posts: Record<string, any>) => (
        <PostItem userId={userId} key={posts.id} data={posts} />
      ))}
    </>
  );
};

export default PostsFeed;
