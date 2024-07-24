import React from "react";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    imgSrc: "img/blog-1.jpg",
    date: {
      day: "01",
      month: "January",
      year: "2045",
    },
    title: "Sed amet tempor amet sit kasd sea lorem",
  },
  {
    id: 2,
    imgSrc: "img/blog-2.jpg",
    date: {
      day: "01",
      month: "January",
      year: "2045",
    },
    title: "Sed amet tempor amet sit kasd sea lorem",
  },
  {
    id: 3,
    imgSrc: "img/blog-3.jpg",
    date: {
      day: "01",
      month: "January",
      year: "2045",
    },
    title: "Sed amet tempor amet sit kasd sea lorem",
  },
];

const BlogSection = () => {
  return (
    <div className="container-fluid p-5">
      <div className="mb-5 text-center">
        <h5 className="text-primary text-uppercase">Our Blog</h5>
        <h1 className="display-3 text-uppercase mb-0">Latest Blog Post</h1>
      </div>
      <div className="row g-5">
        {blogData.map((blog) => (
          <div key={blog.id} className="col-lg-4">
            <div className="blog-item">
              <div className="position-relative overflow-hidden rounded-top">
                <img className="img-fluid" src={blog.imgSrc} alt="" />
              </div>
              <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                  <span>{blog.date.day}</span>
                  <h6 className="text-light text-uppercase mb-0">{blog.date.month}</h6>
                  <span>{blog.date.year}</span>
                </div>
                <Link className="h5 text-uppercase text-light" to="">
                  {blog.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
