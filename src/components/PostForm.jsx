import React from "react";

const PostForm = ({ newPost, setNewPost, handleAddPost }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: Date.now(),
      title: newPost.title,
      body: newPost.body,
    };
    handleAddPost(post);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Добавить новый пост</h3>
      <input
        type="text"
        placeholder="Заголовок"
        value={newPost.title}
        required
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        placeholder="Содержание поста"
        value={newPost.body}
        required
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      >
        {" "}
      </textarea>
      <button type="submit">Добавить пост</button>
    </form>
  );
};

export default PostForm;
