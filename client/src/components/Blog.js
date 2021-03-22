import React from "react";
import allBlogs from "../data/allBlogs";

const Blog = () => {
  return (
    <div>
      <div className="BlogsPage">
        {allBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img href={blog.link} src={blog.image} alt="BlogImage" />

                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
