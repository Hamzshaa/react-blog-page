import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAuthors = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://trident-blog-api.onrender.com/api/users"
        );
        setAuthors(response?.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getAuthors();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ _id: id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author__avatar">
                  <img
                    src={`https://trident-blog-api.onrender.com/uploads/${avatar}`}
                    alt={`Image of ${name}`}
                  />
                </div>
                <div className="author__info">
                  <h2>{name}</h2>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No users/authors found.</h2>
      )}
    </section>
  );
}

export default Authors;
