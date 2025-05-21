import React from "react";
import "../App.css";

const PostList = ({ posts, handleDeletePost, user }) => {
  return (
    <div className="PostList-container">
      <h1>Список постов</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>
              <small>
                {user.email} <br />
              </small>
              <small>{new Date(post.date).toLocaleString()}</small>
            </p>{" "}
            <button onClick={() => handleDeletePost(post.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
