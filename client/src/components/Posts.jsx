import React, { useEffect, useState } from "react";
import axios from "axios";

import PostItem from "./PostItem";
import Loader from "./Loader";
import { DUMMY_POSTS } from "../data";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fecthPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://trident-blog-api.onrender.com/api/posts`
        );
        setPosts(response?.data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };
    fecthPosts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(
            ({
              _id: id,
              thumbnail,
              category,
              title,
              description,
              creator,
              createdAt,
            }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={creator}
                createdAt={createdAt}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="center">No posts found!</h2>
      )}
    </section>
  );
}
export default Posts;
