import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

function DeletePost({ postId: id }) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const token = currentUser?.token;

  // redirect to login page for any user who isn't logged in

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  const removePost = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `https://trident-blog-api.onrender.com/api/posts/${id}`,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        if (location.pathname === `/myposts/${currentUser.id}`) {
          navigate(0);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Link onClick={() => removePost()} className="btn sm danger">
      Delete
    </Link>
  );
}

export default DeletePost;
