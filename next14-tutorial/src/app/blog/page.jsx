"use client";
import { useEffect, useState } from "react";
import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/blog", {
          // options for fetch go here
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setPosts(data); // Assuming data is an array of blog posts
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error state here if needed
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
