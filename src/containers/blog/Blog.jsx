/** @format */

import React from "react";
import { Article } from "../../components";
import "./blog.css";

import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <p className="gpt3__blog-container_groupA-last">Last Article</p>
          <Article
            imgUrl={blog01}
            date="Jan 6, 2022"
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            description="This is the article you are looking for if you need all the info on GPT-3. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by...."
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Jan 5, 2022"
            title="GPT-3 and Open AI is the future"
          />
          <Article
            imgUrl={blog03}
            date="Dec 26, 2021"
            title="GPT-3 interview of the creator"
          />
          <Article
            imgUrl={blog04}
            date="Nov 31, 2021"
            title="Open AI is the future, I show you why"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI exclusive demo"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
