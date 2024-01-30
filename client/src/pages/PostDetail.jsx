import React, { useContext, useEffect, useState } from "react";
import PostAuthor from "../components/PostAuthor";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import DeletePost from "./DeletePost";

import Thumbnail from "../assets/blog100.jpg";
import { UserContext } from "../context/userContext";
import axios from "axios";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  // const [creatorID, setCreatorID] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://trident-blog-api.onrender.com/api/posts/${id}`
        );
        setPost(response.data);
        // setCreatorID(response.data.creator);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getPost();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="post-detail">
      {error && <p className="error">{error}</p>}
      {post && (
        <div className="container post-detail__container">
          <div className="post-detail__header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.id == post?.creator && (
              <div className="post-detail__buttons">
                <Link to={`/posts/${id}/edit`} className="btn sm primary">
                  Edit
                </Link>
                <DeletePost postId={id} />
              </div>
            )}
          </div>

          <h1>{post.title}</h1>
          <div className="post-detail__thumbnail">
            <img
              src={`https://trident-blog-api.onrender.com/uploads/${post.thumbnail}`}
              alt=""
            />
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
        </div>
      )}
    </section>
  );
}

export default PostDetail;
