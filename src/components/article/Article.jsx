import React from 'react';
import "./article.css";

const Article = ({ imgURL, participants, title }) => {
  return (
    <div className="ehb__blog-container_article">
      <div className="ehb__blog-container_article-image">
        <img src={imgURL} alt="" />
      </div>
      <div className="ehb__blog-container_article-content">
        <div>
          <p>{participants}</p>
          <h3>{title}</h3>
        </div>
        {/* <p>Read Full Article</p> */}
      </div>
    </div>
  )
}

export default Article