import React, { useState, useEffect } from "react";
import { database } from "../firebaseConfig";
import { ref, set, onValue, remove } from "firebase/database";
import PostList from "./PostList";
import PostForm from "./PostForm";

const Blog = ({user}) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    const postRef = ref(database, "posts");
    onValue(postRef, (snapshot) => {
      const data = snapshot.val();
      const loadedPosts = [];
      for (let id in data) {
        loadedPosts.push({ id, ...data[id] });
      }
      setPosts(loadedPosts);
    });
  }, []);

  const handleAddPost = (post) => {
    const postId = Date.now();
    const currentDate = new Date().toISOString(); 
    set(ref(database, "posts/" + postId), {
      title: post.title,
      body: post.body,
      date: currentDate, 
    });
  };

  const handleDeletePost = (postId) => {
    remove(ref(database, "posts/" + postId));
  };

  return (
    <>
      <PostForm
        newPost={newPost}
        setNewPost={setNewPost}
        handleAddPost={handleAddPost}
      />
      <PostList posts={posts} handleDeletePost={handleDeletePost} user={user} />
    </>
  );
};

export default Blog;
